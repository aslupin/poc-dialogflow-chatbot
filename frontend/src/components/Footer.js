import React from 'react'
import styled from '@emotion/styled';
import img_footer from '../assets/img/footer.jpg'

const Footer = styled.img`
    margin: 0 auto 200px;
     width: 100%;
     height: 680px; 
     object-fit: contain;
`

const TypeText = styled.div`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Mali';
    background: #F5F5FA;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
    border-radius: 16px;
    margin: 80px auto 49px;
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

const FooterComp = () => {
    return (
        <>
            <TypeText>ติดต่อเรา</TypeText>
            <Footer loading="lazy" src={img_footer} />
        </>
    )
}

export default FooterComp 
