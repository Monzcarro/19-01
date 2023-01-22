import React from "react";
import {Heart, Bag, Person} from "react-bootstrap-icons";
import {Container, Image, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import pic from "../assets/logo.svg";

const Header = () => {
    return <header className="container-fluid bg-warning">
        <Container className="h-100">
            <div className="d-flex align-items-center h-100 justify-content-between">
                <nav className="d-flex align-items-center">
                    <Link to="/" className="text-dark text-decoration-none">
                        <Image src={pic} alt="Dogfood" height="40"/>
                    </Link>
                    <Link to="catalog" className="text-dark text-decoration-none">Каталог</Link>
                </nav>
                <Form>
                    <Form.Control type="search" placeholder="Поиск"/>
                </Form>
                <nav className="d-flex align-items-center" style={{gap: "1rem"}}>
                    <Link to="/" className="fs-4 text-dark"><Heart/></Link>
                    <Link to="/" className="fs-4 text-dark"><Bag/></Link>
                    <Link to="/" className="fs-3 text-dark"><Person/></Link>
                </nav>
            </div>
        </Container>
    </header>
}

export default Header;