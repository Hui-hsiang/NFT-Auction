import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { LinkContainer } from "react-router-bootstrap";

import Logo from "../assets/logos.png";
import FaucetButton from "./reach/FaucetButton";
import Balance from "./reach/Balance";

import ConnectWallet from "./reach/ConnectWallet";
const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img    
                        src={Logo}
                        width="190"
                        className="d-inline-block align-top"
                        alt="Reach Logo" />
                    
                    {' '}
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <font color="white" size="80"><b>NFT&nbsp;&nbsp;Auction</b></font>
                </Nav>
                    

                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    
                    {/* <LinkContainer to="/about">
                        <Nav.Link><font color="white" size="40"><b>About</b></font></Nav.Link>
                    </LinkContainer> */}
                    
                    <ConnectWallet />
                    <FaucetButton />
                    <Balance />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;