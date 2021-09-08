import styled from '@emotion/styled';
import img_dog from '../assets/img/bg_step.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${img_dog});
    background-size: cover;
    background-position: center;
`

const ContainerText = styled.div`
    width: 50%;
    font-size: 20px;
    line-height: 22px;
    margin: 10px 0 140px 0;

    p {
        font-size: 22px;
        font-weight: bold;
        line-height: 1.5;

        @media only screen and (max-width: 600px) {
            font-size: 16px;
        }
    }
`

const HeaderText = styled.h1`
    font-size: 24px;
    margin: 5px 0;
    margin-top: 50px;
`

const StepPage = () => {
    return (
        <Container>
            <HeaderText>รายละเอียดขั้นตอน</HeaderText>
            <ContainerText>
                <p>1. เลือกสัตว์ที่คุณสนใจ</p>
                <p>2. บันทึกชื่อหรือรูปภาพสัตว์จรจัดที่คุณต้องการรับอุปการะ</p>
                <p>3. ติดต่อไปยังสถานที่พักพิง ตามช่องทางการติดต่อด้านล่าง</p>
                <p>4. ท่านต้องส่งหลักฐานที่ทีมงานต้องการเพื่อพิจารณาความเหมาะสม</p>
                <p>5. เมื่อผ่านการพิจารณา สามารถเดินทางไปรับได้เลยหรือทีมงานสามารถจัดส่งให้ได้</p>
            </ContainerText>
        </Container>
    )
}

export default StepPage
