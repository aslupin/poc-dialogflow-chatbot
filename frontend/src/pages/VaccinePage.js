import styled from "@emotion/styled"
import img_vac_dog from '../assets/img/vaccine_dog.png'
import img_vac_cat from '../assets/img/vaccine_cat.png'
import img_vac from '../assets/img/bg_vac.jpg'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${img_vac});
    background-size: cover;
    background-position: center;
`

const ContainerText = styled.div`
    width: 60%;
    font-size: 20px;
    line-height: 22px;
    margin: 50px 0 140px 0;

    @media only screen and (max-width: 1000px) {
        background-color: rgba(255,255,255, 0.9);
        padding: 30px;
        border-radius: 10px;
    }

`

const HeaderText = styled.h1`
    font-size: 30px;
    font-weight: bold;
`
const HeaderDetailText = styled.h1`
    font-size: 22px;
    font-weight: bold;
    margin: 20px auto;
`

const ImageConetent = styled.img`
    width: 80%;
    max-width: 900px;
`

const VaccinePage = () => {
    return (
        <Container>
            <HeaderText>โปรเเกรมวัคซีนในลูกสัตว์</HeaderText>
            <HeaderDetailText>ลูกสุนัข</HeaderDetailText>
            <ImageConetent src={img_vac_dog} />
            <HeaderDetailText>ลูกแมว</HeaderDetailText>
            <ImageConetent src={img_vac_cat} />
            <ContainerText>
                <p>เมื่อลูกสุนัขและแมวโตขึ้น ภูมิคุ้มกันที่ได้รับจากแม่ย่อมลดลง โดยเฉพาะลูกสัตว์กำพร้าที่พบได้บ่อยในสถานสงเคราะห์ การฉีดวัคซีนป้องกันโรคจึงมีความสำคัญ</p>
                <p>เราอาจแบ่งวัคซีนออกเป็นสองประเภท คือ วัคซีนหลัก (core vaccine) หมายถึงวัคซีนที่ป้องกันโรคที่สำคัญทั่วโลก สุนัขและแมวทุกตัวควรได้รับ และวัคซีนทางเลือก (non-core vaccine) หมายถึงวัคซีนที่ให้โดยพิจารณาจากความเสี่ยงของการเกิดโรคในแต่ละพื้นที่ที่เลี้ยงสัตว์ นอกจากนี้ยังมีวัคซีนอีกกลุ่มหนึ่งที่ไม่แนะนำให้ใช้เนื่องจากยังไม่มีข้อมูลทางวิทยาศาสตร์ที่เพียงพอด้วย</p>
                <p>หลายท่านอาจมีข้อสงสัยว่าหลังจากได้รับวัคซีนไปนานเท่าไหร่สัตว์จึงจะสร้างภูมิคุ้มกัน คำตอบคือ ระยะเวลานั้นขึ้นอยู่กับตัวสัตว์ วัคซีนและเชื้อโรค วัคซีนบางชนิดอาจเริ่มมีภูมิคุ้มกันตอบสนองตั้งแต่วันแรกที่ฉีดหรือบางชนิดใช้เวลา 1-2 สัปดาห์ ดังนั้นหลังทำวัคซีน อย่าเพิ่งปล่อยให้สัตว์เลี้ยงไปคลุกคลีกับสัตว์ตัวอื่นๆ นอกบ้านเร็วจนเกินไปเพราะภูมิคุ้มกันอาจยังทำงานได้ไม่เต็มที่</p>
                <p>สุดท้ายนี้สิ่งที่อยากฝากไว้คือ สิ่งที่ดีที่สุดในการทำให้ลูกสุนัขและแมวมีสุขภาพดี นอกเหนือจากการได้รับวัคซีนแล้ว เจ้าของควรให้ความสำคัญในเรื่องสุขภาพโดยรวมด้วย ควรมีการดูแลลูกสุนัขและแมวอย่างเหมาะสมตามความต้องการของร่างกาย ตามช่วงอายุและควรพาลูกสุนัขและแมวไปตรวจสุขภาพเป็นประจำทุกปีด้วย</p>
            </ContainerText>
        </Container>
    )
}

export default VaccinePage
