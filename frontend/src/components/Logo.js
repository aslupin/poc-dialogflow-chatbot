import React from 'react'
import styled from '@emotion/styled'

const LogoText = styled.div`
    font-weight: bold;
    font-size: 16px;
    font-family: 'Mali';
    cursor: pointer;
    margin-right: 20px;

     @media only screen and (max-width: 1000px) {
       font-size: 12px;
       width: 100%;
    }

`

const  LogoComp = () => {
    return (
        <LogoText>
            PetPing | เว็บไซต์รับอุปการะสัตว์
        </LogoText>
    )
}

export default  LogoComp
