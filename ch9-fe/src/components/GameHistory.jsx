import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { getLeaderboardById } from "../action/game";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GameHistory(props) {
  const [leader, setLeader] = useState({
    game: "Loading...",
    win: "Loading...",
    username: "Loading...",
  });

  const leaderboard = async () => {
    const resp = await getLeaderboardById(props.id);
    setLeader(resp);
  };

  useEffect(() => {
    leaderboard();
  }, []);

  //   const [history, sethistory] = useState({
  //     gametitle: "Loading...",
  //     score: "Loading...",
  //   });

  //   const getHistory = async () => {
  //     const HistoryId = id;
  //     const resp = await getLeaderboardById(HistoryId);
  //     setHistory(resp);
  //   };

  //   useEffect(() => {
  //     getPlayerBiodata();
  //   }, []);

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
