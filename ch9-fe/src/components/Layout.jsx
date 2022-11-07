import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getBiodataById } from "../action/biodata";

const Layout = (props) => {
    const { user } = props;

    const [biodata, setBiodata] = useState({
        email: "Loading...",
        fullname: "Loading...",
        username: "Loading...",
    });

    const getUserBiodata = async () => {
        const id = user.user_id;
        const resp = await getBiodataById(id);
        setBiodata(resp);
    };

    const handleLogout = () => {
        let ans = window.confirm(`Are you sure want to logout?`);
        if (ans) {
            localStorage.removeItem("jwt-token");
            alert(`Thanks for coming`);
            window.location.href = "/login";
        }
    };

    useEffect(() => {
        getUserBiodata();
    }, []);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Kelompok 2</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/game">Game</Nav.Link>
                        </Nav>
                        <Nav>
                            {!user ? (
                                <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">
                                        Register
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/profile">
                                        Hello, {biodata.username}
                                    </Nav.Link>
                                    <Nav.Link onClick={handleLogout}>
                                        Logout
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
};

export default Layout;
