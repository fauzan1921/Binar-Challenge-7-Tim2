import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";
import GameHistory from "../components/GameHistory";
import GamePoint from "../components/GamePoint";

import EditProfileModal from "../components/EditProfileModal";
import { getBiodataById } from "../action/biodata";

const UserProfile = (props) => {
    const { user } = props;

    const [biodata, setBiodata] = useState({
        email: "Loading...",
        fullname: "Loading...",
        username: "Loading...",
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    const getUserBiodata = async () => {
        const id = user.user_id;
        const resp = await getBiodataById(id);
        setBiodata(resp);
        // console.log(resp);
    };

    const check = () => {
        alert(`click`);
    };

    useEffect(() => {
        getUserBiodata();
    }, []);

    if (localStorage.getItem("jwt-token") === null) {
        window.location.href = "/login";
    }
    return (
        <Container fluid="md" bg="dark" className="my-mt">
            <Row>
                <Col sm={4}>
                    <Container>
                        <ProfileCard showModal={handleShow} user={biodata} />

                        <EditProfileModal
                            show={show}
                            handleClose={handleClose}
                            handleOnChange={handleOnChange}
                            check={check}
                        />
                    </Container>
                    <Container className="my-mt">
                        <GamePoint />
                    </Container>
                </Col>
                <Col sm={8}>
                    <Container>
                        <GameHistory />
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;
