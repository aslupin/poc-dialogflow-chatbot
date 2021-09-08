import { Link } from 'react-router-dom'
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

const TabText = styled.div`
    font-weight: bold;
    font-size: 16px;
    font-family: 'Mali';
    margin: 0 6px;
    cursor: pointer;
    color: #496fad;
    border: 1px solid #496fad;
    border-radius: 10px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    white-space: nowrap;

    &:hover {
         color: #1c69e8;
         border: 1px solid #1c69e8;
         font-weight: bold;
         background-color: #ebf2ff;
    }

     @media only screen and (max-width: 1000px) {
       font-size: 12px;
       height: 42px;
    }

`

const  NavbarComp  = () => {
    return (
    <>
        <Navbar>
            <Link to="/">
                <Logo/>
            </Link>
            <Link to="/step">
                <TabText>ขั้นตอนการขอรับอุปการะ</TabText>
            </Link>
            <Link to="/list/dog">
                <TabText>สุนัขที่รออุปการะ</TabText>
            </Link>
            <Link to="/list/cat">
                <TabText>แมวที่รออุปการะ</TabText>
            </Link>
            <Link to="/vaccine">
                <TabText>วัคซีน</TabText>
            </Link>
        </Navbar>
        <Gab />
    </>
    )
}

export default NavbarComp