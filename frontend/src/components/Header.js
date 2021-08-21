import React from 'react'
import styled from '@emotion/styled'

import img_header from '../assets/img/header2.jpg'

const HeaderContaienr = styled.div`
	position: relative;
	width: 100%;
	height: 720px;
	background-image: url(${img_header});
    background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	backdrop-filter: blur(1900px);
	overflow: hidden;
`

const BlurLayer = styled.div`
	width:  100%;
	height:  110%;
    filter: blur(10px);
	position: absolute;
	top: 0;
`

const ContainerContent = styled.div`
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
    background: #F5F5FA;
    text-transform: uppercase;

    @media only screen and (max-width: 800px) {
        font-size: 38px;
    }
`

const PRText = styled.p`
    margin-top: 10px;
	font-family: 'Mali';
	font-size:  20px;
	color:  black;
    background: #F5F5FA;
	font-weight: 700;
`

const  HeaderComponent = () => {
    return (
        <HeaderContaienr>
            <BlurLayer />
            <ContainerContent>
                <HeaderText>Petping.com </HeaderText>
                <PRText>เว็บไซต์รับอุปการสัตว์​</PRText>
            </ContainerContent>
        </HeaderContaienr>
    )
}

export default  HeaderComponent
