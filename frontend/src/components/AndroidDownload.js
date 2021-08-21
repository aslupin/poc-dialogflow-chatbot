import styled from "@emotion/styled"

// import img_download from '../assets/img/download.png'
import img_phone from '../assets/img/phone.png'
import img_android from '../assets/img/android.png'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  100%;
    height:  380px;
    background-color: rgba(227, 227, 227, 0.7);
    position: relative;
    margin: 140px 0;
`

const Wrapper = styled.div`
     width: 50%;
     max-width: 500px;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     position: relative;
`


const ContentContainer = styled.a`
    width:  400px;
    height: 120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #F5F5FA;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
    border-radius: 16px;
    cursor: pointer;
`

const PhoneImage = styled.img`
    margin: auto 200px;
    margin-top: -100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

     @media only screen and (max-width: 1000px) {
       display: none;
    }

`

const DownloadIcon = styled.img`
    width:  90px;
`

const TextDownload = styled.p`
    font-size:  20px;
    font-weight: bold;
    text-transform:  uppercase;
`

const DownloadTopic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 100%;
    font-size:  26px;
    font-weight: bold;
    text-transform:  uppercase;
    margin: 0;
    position: absolute;
    top: -80px;
    background: rgba(143, 189, 168, 0.7);
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
    border-radius: 16px;

     @media only screen and (max-width: 1000px) {
       font-size:  18px;
    }
`

const AndroidDownload = () => {
    return (
    <>
        <Container>
            <PhoneImage src={img_phone} loading="lazy" />
                
            <Wrapper>
                    <DownloadTopic>
                        ดาวร์โหลด Application
                    </DownloadTopic>
                    <ContentContainer href="https://drive.google.com/file/d/1uJyU-tj4R-VIQ629irIRnbZhA9tCHkNw/view?usp=sharing" target="_blank">
                    <DownloadIcon src={img_android} loading="lazy" />
                    <TextDownload> 
                        Download for Android
                    </TextDownload>
                </ContentContainer>
            </Wrapper>
        </Container>
    </>
    )
}

export default AndroidDownload
