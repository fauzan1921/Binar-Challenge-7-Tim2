import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";
import GameHistory from "../components/GameHistory";
import GamePoint from "../components/GamePoint";

import EditProfileModal from "../components/EditProfileModal";
import { getBiodataById, updateBiodataById } from "../action/biodata";

const UserProfile = (props) => {
  const { user } = props;

  const [biodata, setBiodata] = useState({
    email: "Loading...",
    fullname: "Loading...",
    username: "Loading...",
  });

  const [inputs, setInputs] = useState({
    username: "",
    fullname: "",
    email: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setInputs((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const getUserBiodata = async () => {
    const id = user.user_id;
    const resp = await getBiodataById(id);
    setBiodata(resp);
    setInputs(resp);
  };

  const updateUserData = () => {
    updateBiodataById(user.user_id, inputs.username, inputs.fullname);
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
              user={biodata}
              show={show}
              handleClose={handleClose}
              handleOnChange={handleOnChange}
              handleUpdate={updateUserData}
            />
          </Container>
        </Col>
        <Col sm={8}>
          <Container>
            <GameHistory id={user.user_id} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
