import React from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'

const Navbar = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    height:  48px;
    width:  100%;
    background: #F5F5FA;
    align-items:  center;
    padding: 0 20px;
    z-index: 5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Gab = styled.div`
    width: 100%;
    height:  48px;
    visibility: hidden;
`


const  NavbarComp  = () => {
    return (
    <>
        <Navbar>
             <Logo/>
        </Navbar>
        <Gab />
    </>
    )
}

export default NavbarComp