import { Component } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import "../css/game_detail.css";

class Game extends Component {
  handleLogout = () => {
    localStorage.removeItem("jwt-token");
    alert("YOU ARE LOGOUT");
    window.location.href = "/";
  };

  render() {
    console.log(localStorage.getItem("jwt-token"));

    if (localStorage.getItem("jwt-token") === null) {
      window.location.href = "/login";
    }

    return (
      <div className="game-detail">
        <Row>
          <Col sm={8} className="game-main">
            <div class="header">
              <a href="/landing" class="back-bt">
                {" "}
                Back{" "}
              </a>
              <img src={require("../assets/logo 1.png")} alt="" class="logo" />
              <h1 class="header-text">ROCK PAPER SCISSORS</h1>
            </div>
            <div class="content">
              <div class="player">
                <h1 class="content-text">PLAYER 1</h1>
                <img
                  src={require("../assets/batu.png")}
                  alt=""
                  class="batu"
                  id="batu-player"
                />
                <img
                  src={require("../assets/kertas.png")}
                  alt=""
                  class="kertas"
                  id="kertas-player"
                />
                <img
                  src={require("../assets/gunting.png")}
                  alt=""
                  class="gunting"
                  id="gunting-player"
                />
              </div>
              <div id="result-vs" class="result-vs">
                <h1 class="vs-text" id="vs-text">
                  VS
                </h1>
              </div>
              <div class="com">
                <h1 class="content-text">COM</h1>
                <img
                  src={require("../assets/batu.png")}
                  alt=""
                  class="batu"
                  id="batu-com"
                />
                <img
                  src={require("../assets/kertas.png")}
                  alt=""
                  class="kertas"
                  id="kertas-com"
                />
                <img
                  src={require("../assets/gunting.png")}
                  alt=""
                  class="gunting"
                  id="gunting-com"
                />
              </div>
            </div>
            <div class="refresh">
              <a href="#">
                <img
                  src={require("../assets/refresh.png")}
                  alt=""
                  class="refresh-bt"
                />
              </a>
            </div>
          </Col>
          <Col sm={4} className="game-leaderboard">
            <h1 class="leaderboard-text">GAME LEADERBOARD</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Win</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <div className=" text-center gap-2 mt-4">
          <Button variant="danger" type="submit" onClick={this.handleLogout}>
            LOGOUT
          </Button>
        </div>
      </div>
    );
  }
}

export default Game;
