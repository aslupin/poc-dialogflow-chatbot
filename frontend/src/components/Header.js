import React from 'react'
import styled from '@emotion/styled'

// import img_header from '../assets/img/header2.jpg'
import HeaderImage from './SlideShow'

// const HeaderContaienr = styled.div`
// 	position: relative;
// 	width: 100%;
// 	height: 720px;
// 	background-image: url(${img_header});
//     background-position: center;
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	backdrop-filter: blur(1900px);
// 	overflow: hidden;
// `

const BlurLayer = styled.div`
	width:  100%;
	height:  110%;
    filter: blur(10px);
	position: absolute;
	top: 0;
`

const ContainerContent = styled.div`
    position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index:  2;
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 800px) {
        margin-left: 40px;
    }
`

const HeaderText = styled.h1`
	z-index:  2;
	font-family: 'Mali';
	font-weight: 700;
	font-size: 48px;
	margin: 0;
    text-transform: uppercase;
    background: #F5F5FA;

    @media only screen and (max-width: 800px) {
        font-size: 38px;
    }
`

const PRText = styled.p`
    margin-top: 10px;
	font-family: 'Mali';
	font-size:  20px;
	color:  black;
	font-weight: 700;
    background: #F5F5FA;
`

const HeaderComponent = () => {
    return (
        <HeaderImage>
             <BlurLayer />
             <ContainerContent>
                 <HeaderText>Petping.com </HeaderText>
                 <PRText>เว็บไซต์รับอุปการะสัตว์​</PRText>
             </ContainerContent>
        </HeaderImage>
    )
}

export default  HeaderComponent
