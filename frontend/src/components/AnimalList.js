import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import db from '../firebase'
import img_contact from  '../assets/img/conversation.png'

const CardContainer = styled.div`
    width: 320px;
    height: 320px;
    background: #F5F5FA;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
    border-radius: 16px;
    margin: 24px auto;
    
    @media only screen and (max-width: 1000px) {
       margin: 10px auto;
    }
`
const Adapter = styled.div`
    width:  90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-columns: 1fr;
    gap: 10px;
    height:  760px;
    overflow: scroll;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    margin: 0 auto;
    

    @media only screen and (max-width: 1800px) {
       grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1400px) {
       grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 1200px) {
       grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 1000px) {
       grid-template-columns: repeat(1, 1fr);
        gap: 2px;
    }
`

const Avatar = styled.img` 
    width:  100%;
    object-fit: cover;
    height:  50%;
    margin-top: 4px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const ContainerContact = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
`

const ContainerDetail = styled.div` 
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
`

const TextDetail = styled.p`
    font-family: 'Mali';
    margin: 3px 0;
`

const Contact = styled.a`
    margin: auto;
    cursor: pointer;
`

const TypeText = styled.div`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Mali';
    background: #F5F5FA;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
    border-radius: 16px;
    margin: 40px auto;
    width: 40%;
    min-width: 400px;
    height: 80px; 
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;

    span {
         font-size:  18px;
         margin: auto 20px;
    }

    @media only screen and (max-width: 600px) {
       font-size: 16px;
    }
`

const AnimalList = ({ type, bg }) => {
    const [animals, setAnimal] = useState([])

    const getAnimal = async () => {
        let animalBulk = []
        await db.collection("Pet").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                animalBulk = [...animalBulk, doc.data()]
            });
        });
        console.log(animalBulk)
        setAnimal(animalBulk)
    }

    // when component rendered (first time)
    useEffect(() => {
         getAnimal()
    }, [])

    return (
        <>
            <TypeText>{type}ที่กำลังต้องการผู้อุปการะ</TypeText>
            <Adapter bg={bg}>
                {
                    animals
                    .filter((animal) => animal.Type && animal.Type === type)
                    .map((animal, index) => <CardAnimal key={index} {...animal} />)
                }
            </Adapter>
        </>
    )
}

const CardAnimal = ({ Image, Name, Bread, Sex, Age, Type }) => {
    return (
    <CardContainer>
        <Avatar src={Image} loading="lazy" />
        <ContainerContact> 
            <ContainerDetail>
                <TextDetail>ชื่อ: {Name}</TextDetail>
                    {Sex && <TextDetail>เพศ: {Sex}</TextDetail>}
                    {Age && <TextDetail>อายุ: {Age}</TextDetail>}
                    {Bread && <TextDetail>พันธุ์: {Bread}</TextDetail>}
                    {Type && <TextDetail>ประเภท: {Type}</TextDetail>}
            </ContainerDetail>
            <Contact href=" https://www.facebook.com/ThailandAdopterClub" target="_blank">
                <img src={img_contact} loading="lazy" width="70px" />
            </Contact>
        </ContainerContact>
    </CardContainer>)
}

export default AnimalList
