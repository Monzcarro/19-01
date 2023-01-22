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
        pic: "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200"
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
        pic: 'https://worlddogfinder.com/imager/1200x630/upload/articles/retriever_puppies_eating_food.png'
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "violet",
        pic: "https://tisi.by/assets/images/news/tisi_animal_feed.png"
    },
    {
        caption: "Ням-ням",
        text: "Лучшие лакомства для собак за полцены",
        bg: "lightblue",
        pic: "https://parnasvet.ru/wp-content/uploads/2021/06/kak-vybrat-sobaku.png"
    },
];

const Home = () => {
    return <>
        <Row>
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