import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNzU5Yjk4YjAzOGY3NzlkMjAiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NTAsImV4cCI6MTY5OTQ0Nzk1MH0.A-txiDiqONEBOhOgawZTA5GmU6-Ct5Hk5XffHN1Gv6Y";

// const MyCard = (props) => {
//     return <Card>
//         <Card.Img src={props.pic} height="100" className="w-auto"></Card.Img>
//         <Card.Body>
//             <Card.Title>{props.name}</Card.Title>
//             <Card.Text>{props.txt.slice(0, 11)}...</Card.Text>
//             <Button>Click</Button>
//         </Card.Body>
//     </Card>
// }

export default () => {
    const [goods, setGoods] = useState([]); // сперва "что", а потом чем изменяется
    useEffect(() => {
        fetch("https://api.react-learning.ru/products", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setGoods(data.products);
            })
    }, []);
    return <>
        <header className="container-fluid">
            <Link to="/">Главная</Link>
            <Link to="Catalog">Каталог</Link>
        </header>
        <main>
            {/* Col:
                xs - сколько столбцов от 1 до 12  занимает элемент по ширине для мобильного устройства
                sm - большой телефон или маленький планшет
                md - планшет, ноутбук
                xl - компьютер
                xxl - увеличенный монитор
            */}
            
                    {/* <Col xs={6} sm={4} md={3}>
                        <MyCard name="1" txt="Один думаешь?"/>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <MyCard name="2" txt="А вот и два"/>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <MyCard name="Три" txt="Потри"/>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <MyCard name="=)" txt="Несмешно..."/>
                    </Col> */}
                    {/* <Catalog goods={goods}/> */}
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog goods={goods}/>}/>
                </Routes>
            </Container>

        </main>
        <footer className="container-fluid">footer</footer>
    </>
}
