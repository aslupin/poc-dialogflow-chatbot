import { useState, useEffect } from "react"
import redaxios from 'redaxios'
import styled  from "@emotion/styled"
import { keyframes } from '@emotion/react'
import img_loading  from '../assets/img/loading.png'

const Container = styled.div`
    transition: height 0.2s ease-out;
    position: fixed;
    bottom: 0;
    right: 40px;
    background: #fff;
    width: 400px;
    height:  52px;
    z-index: 100;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    flex-direction:  column;
    overflow:  hidden;
    ${props => props.isShowChat ? `height: 600px;`: `height: 52px;`}
    
`

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 52px;
    align-items: center;
    border-bottom: 1px solid #000;
    padding: 0 20px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
`

const ChatMessage = styled.div`
    width: 100%;
    height: 500px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: visible;
    background: grey;
    padding: 0 8px;
`

const ContainerChat = styled.form`
    display: flex;
    align-items: center;
    padding:  0 20px;
    height: 80px;
`

const Input = styled.input`
    height:  38px;
    width:  70%;
    font-size: 18px;
    padding: 0 8px;
     border-radius: 6px;
`

const Button = styled.button`
    height:  38px;
    width: 90px;
    margin: 0 8px;
    border-radius: 2px;
    background-color: #c2f0d8;
    display: flex;
    align-items: center;
    justify-content: center;
`

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(359deg); }
`

const LoadingIcon = styled.img`
    width: 20px;
    height: 20px;
    animation: ${rotate} 2s infinite linear;
`

const ChatComp = () => {
    const [history, setHistory] = useState([])
    const [question, setQuestion] = useState('')
    const [isShowChat, setIsShowChat] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleOnChange = (e) => {
         setQuestion(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if (question === "") return;
        SendMessageToBot(question)
       
    }

    const SendMessageToBot = async (msg)  => {
        setLoading(true)
        try {
            const { data } = await redaxios.post("https://dialogflow-chatbot-petping.herokuapp.com/chatbot", {
                message: msg
            })
            const { message: { fulfillmentText }} = data

            const userNewMsg = {
                type: "user",
                text: question
            }
            
            const botNewMsg = {
                type: "bot",
                text: fulfillmentText
            }
            
            setHistory([...history, userNewMsg, botNewMsg])
            setQuestion('')

            var element = document.getElementById("adapter");
            element.scrollTop = element.scrollHeight;
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const showChat = () => {
        setIsShowChat(!isShowChat)
        // false => !false = true
        // true => !true = false
        console.log(isShowChat)
    }

    useEffect(() => {

        const FirstMessage = [
            {
                type: "bot",
                text: "สวัสดีค่ะ มีอะไรให้บอทช่วยเหลือมั้ยคะ?"
            },
            {
                type: "admin",
                text: "- ขั้นตอนการรับเลี้ยง"
            },
            {
                type: "admin",
                text: "- การจัดส่ง"
            },
            {
                type: "admin",
                text: "- ค่าใช้จ่าย"
            },
        ]

        setHistory([...history, ...FirstMessage])
    }, [])

    return (
        <Container isShowChat={isShowChat}>
            <Header onClick={showChat}>แชทบอท - ถาม/ตอบทุกปัญหา</Header>
            {
                isShowChat && (
                    <>
                        <ChatMessage id="adapter">
                            {
                                history.map((msg, index) => {
                                    return (
                                        <Message key={index} {...msg} />
                                    )
                                })
                            }
                        </ChatMessage>
                        <ContainerChat onSubmit={handleOnSubmit}>
                            <Input type="text" value={question} onChange={handleOnChange} />
                            <Button disabled={loading}>{loading ? (<LoadingIcon src={img_loading} />) : "ส่ง"}</Button>
                        </ContainerChat>
                    </>
                )
            }
        </Container>
    )
}

const MsgItem = styled.div`
    position: relative;
    background-color: ${props => props.type !== 'user' ? '#fff' : 'rgba(199, 245, 174, 1)'};
    float: ${props => props.type !== 'user' ? 'left' : 'right'};
    min-height:  44px;
    max-width: 90%;
    font-size:  18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    margin:  6px 4px;
    padding:  10px 12px;
    overflow-wrap: break-word;
    background-color: ${props => props.type === 'admin' && '#f2edce'};

    span {
        margin: 0;
        font-weight: bold;
        text-transform: uppercase;
    }
`

const ItemContainer = styled.div`
    width: 100%;
    display: inline-block;
`
const Message = ({ text, type }) => {
     return (
         <ItemContainer>
            <MsgItem type={type}> 
                {
                    type === "admin" ? 
                        (<>{text}</>):
                         (<><span>{type === 'bot' ? 'PETPING': type}</span>: {text}</>)
                }
            </MsgItem>
         </ItemContainer>
     )
}

export default ChatComp
