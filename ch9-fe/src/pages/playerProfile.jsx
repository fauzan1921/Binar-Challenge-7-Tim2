import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";
import GameHistory from "../components/GameHistory";
import GamePoint from "../components/GamePoint";
import { getBiodataById } from "../action/biodata";

const PlayerProfile = (props) => {
    const { id } = useParams();

    const [biodata, setBiodata] = useState({
        email: "Loading...",
        fullname: "Loading...",
        username: "Loading...",
    });

    const getPlayerBiodata = async () => {
        const playerId = id;
        const resp = await getBiodataById(playerId);
        setBiodata(resp);
    };

    useEffect(() => {
        getPlayerBiodata();
    }, []);

    if (localStorage.getItem("jwt-token") === null) {
        window.location.href = "/login";
    }
    return (
        <Container fluid="md" bg="dark" className="my-mt">
            <Row>
                <Col sm={4}>
                    <Container>
                        <ProfileCard user={biodata} param={id} />
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

export default PlayerProfile;
