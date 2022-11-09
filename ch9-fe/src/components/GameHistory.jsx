import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { getLeaderboardById } from "../action/game";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GameHistory(props) {
  const [leader, setLeader] = useState({
    game: "Loading...",
    win: "Loading...",
    username: "Loading...",
  });

  const histories = async () => {
    const resp = await getLeaderboardById(props.id);
    setLeader(resp);
    console.log(resp);
    if (resp === null) {
      setLeader("");
      // {win} "0"
    }
  };

  useEffect(() => {
    histories();
  }, []);

  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th className="my-red-color">Game</th>
            <th>Win</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{leader.game}</td>
            <td className="text-center">{leader.win}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default GameHistory;
