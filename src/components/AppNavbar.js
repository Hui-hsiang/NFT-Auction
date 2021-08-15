import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/logo-notext-color.png";
import Logo2 from "../assets/logos.png";
import FaucetButton from "./reach/FaucetButton";
import Balance from "./reach/Balance";

const AppNavbar = () => {
    return (
        <Navbar style={{backgroundColor:"rgb(87,87,87)"}} >
            <Container>
                <Nav className=" col-4 ml-2">
                    <Navbar.Brand >
                        <img style={{marginLeft:"2%"}}
                            src={Logo2}
                            width="190"
                            className="d-inline-block align-top"
                            alt="Reach Logo" />
                    </Navbar.Brand>
                </Nav>
                <Nav className="col-4">
                    <p style={{color:"#fff", fontSize:"2rem",marginTop:"8px"}} className="auto">NFT Auction</p>
                </Nav>
                <Nav className="col-1"></Nav>
                <Nav className=" col-4 ">
                    <Nav variant="tabs" className=" ml-4">
                        <Nav.Item >
                            <Nav.Link href="/" style={{color:"#fff"}} eventKey="link-1">Home</Nav.Link>
                        </Nav.Item>
                        <FaucetButton />
                    </Nav>
                    <Nav>
                        <Balance />
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
