import styled from '@emotion/styled';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import bg_header1 from '../assets/img/bg_header1.jpg'
import bg_header2 from '../assets/img/bg_header2.jpg'
import bg_header3 from '../assets/img/bg_header3.jpg'
import bg_header4 from '../assets/img/bg_header4.jpg'
import bg_header5 from '../assets/img/bg_header5.jpg'
import bg_header6 from '../assets/img/bg_header6.jpg'

const slideImages = [
    bg_header1,
    bg_header2,
    bg_header3,
    bg_header4,
    bg_header5,
    bg_header6,
];

const Container = styled.div`
    position: relative;
`

const HeaderContaienr = styled.div`
	position: relative;
	width: 100%;
	height: 720px;
    background-image: ${props => `url(${props.bg})`};
    background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	backdrop-filter: blur(1900px);
	overflow: hidden;
`

const Slideshow = ({ children }) => {
    return (
        <Container className="slide-container">
            {children}
            <Slide duration={2500}>
                {
                    slideImages.map((bg, index) => <HeaderContaienr bg={bg} className="each-slide" key={index}>
                    </HeaderContaienr>)
                }
            </Slide>
        </Container>
    )
}

export default Slideshow
