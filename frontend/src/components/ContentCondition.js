import React from 'react'
import styled  from '@emotion/styled'

import img_con_r  from '../assets/img/condition_r.jpg'
import img_con_l from '../assets/img/condition_l.jpg'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    align-items: center;
    justify-content: center;
    margin: 0;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        margin: 300px auto 500px;
    }

`

const ImageCondition = styled.img`
     height: 75%;
     margin: 0 20px;
     max-width: 900px;
     /* width: 90%; */
`

const ContentCondition = () => {
    return (
        <Container>
            <ImageCondition loading="lazy" src={img_con_l} />
            <ImageCondition loading="lazy" src={img_con_r} />
        </Container>
    )
}

export default ContentCondition
