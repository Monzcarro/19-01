import React from "react";
import {Row, Col} from "react-bootstrap";

// props.pic, bg, caption, text ===> 
const Block = ({pic, bg, caption, text}) => {
    let style = {
        backgroundImage: "url(https://cdn.breedadvisor.com/wp-content/uploads/2019/11/jump-to-background.png)",
        backgroundSize: "auto 300%",
        backgroundColor: bg,
        borderRadius: "20px",
    };
    return <Row style={style}>
        <Col xs={8} className="py-3">
            <h3>{caption}</h3>
            <p>{text}</p>
        </Col>
        <Col>
            <img src={pic} alt={caption} className="card-image py-3"/>
        </Col>
    </Row>
}

export default Block;

const ads = ["https://avatars.mds.yandex.net/get-mpic/5268639/img_id2353893688558851266.png/orig", "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200", "https://ozerki.ru/er-pics/images/goods/90538/main", 'https://worlddogfinder.com/imager/1200x630/upload/articles/retriever_puppies_eating_food.png', "https://tisi.by/assets/images/news/tisi_animal_feed.png", "https://parnasvet.ru/wp-content/uploads/2021/06/kak-vybrat-sobaku.png"];