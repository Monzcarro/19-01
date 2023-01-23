import React from "react";
import {Row, Col} from "react-bootstrap";
import AdBlock from "../Components/AdBlock";

let ads = [
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "springgreen",
        pic: "https://avatars.mds.yandex.net/get-mpic/5268639/img_id2353893688558851266.png/orig"
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "violet",
        pic: "https://i.imgur.com/PhJdhAr.png"
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "lightblue",
        pic: "https://ozerki.ru/er-pics/images/goods/90538/main"
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "springgreen",
        pic: 'https://i.imgur.com/CF5n7r7.png'
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "violet",
        pic: "https://i.imgur.com/VqhnXWB.png"
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "lightblue",
        pic: "https://i.imgur.com/JjvK1jG.png"
    },
];

const Home = () => {
    return <>
        <Row className="gx-5 gy-4">
            <Col xs={12}>
                <AdBlock {...ads[0]}/>
            </Col>
            <Col xs={12} md={6}>
                <AdBlock {...ads[1]}/>
            </Col>
            <Col xs={12} md={6}>
                <AdBlock {...ads[2]}/>
            </Col>
            <Col xs={12}>
                <AdBlock {...ads[3]}/>
            </Col>
            <Col xs={12} md={6}>
                <AdBlock {...ads[4]}/>
            </Col>
            <Col xs={12} md={6}>
                <AdBlock {...ads[5]}/>
            </Col>
        </Row>
    </>
}

export default Home;