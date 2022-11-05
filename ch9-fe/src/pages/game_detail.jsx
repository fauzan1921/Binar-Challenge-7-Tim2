import { Component } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import GameLeaderboard from "../components/GameLeaderboard";
import ScissorGame from "../components/ScissorGame";
import "../css/game_detail.css";

class Game extends Component {
  state = {
    playerBackgroundColor: {
      kertas: false,
      batu: false,
      gunting: false,
    },
    comBackgroundColor: {
      kertas: false,
      batu: false,
      gunting: false,
    },
    isCLick: false,
    playerChoice: "",
    comChoice: "",
    result: "VS",
  };

  handleLogout = () => {
    localStorage.removeItem("jwt-token");
    alert("YOU ARE LOGOUT");
    window.location.href = "/";
  };

  logout = () => {
    <Button variant="danger" type="submit" onClick={this.handleLogout}>
      LOGOUT
    </Button>;
  };

  handlingMouseEnter = (event) => {
    this.setState({
      playerBackgroundColor: { [event.target.id]: true },
    });
  };

  handlingMouseLeave = (event) => {
    this.setState({
      playerBackgroundColor: { [event.target.id]: false },
    });
  };

  handlingOnClick = (event) => {
    this.setState({
      isCLick: true,
      playerChoice: event.target.id,
    });
    this.generateRandom();
  };

  generateRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      this.setState({
        comBackgroundColor: { gunting: true },
        comChoice: "gunting",
      });
    } else if (randomNumber === 1) {
      this.setState({
        comBackgroundColor: { kertas: true },
        comChoice: "kertas",
      });
    } else {
      this.setState({
        comBackgroundColor: { batu: true },
        comChoice: "batu",
      });
    }
  };

  compareChoice = () => {
    console.log(this.state.playerChoice);
    console.log(this.state.comChoice);

    if (this.state.comChoice === this.state.playerChoice) {
      this.setState({
        result: "DRAW",
      });
    } else if (
      this.state.comChoice === "gunting" &&
      this.state.playerChoice === "batu"
    ) {
      this.setState({
        result: "PLAYER WIN",
      });
    } else if (
      this.state.comChoice === "gunting" &&
      this.state.playerChoice === "kertas"
    ) {
      this.setState({
        result: "COM WIN",
      });
    } else if (
      this.state.comChoice === "batu" &&
      this.state.playerChoice === "kertas"
    ) {
      this.setState({
        result: "PLAYER WIN",
      });
    } else if (
      this.state.comChoice === "batu" &&
      this.state.playerChoice === "gunting"
    ) {
      this.setState({
        result: "COM WIN",
      });
    } else if (
      this.state.comChoice === "kertas" &&
      this.state.playerChoice === "gunting"
    ) {
      this.setState({
        result: "PLAYER WIN",
      });
    } else if (
      this.state.comChoice === "kertas" &&
      this.state.playerChoice === "batu"
    ) {
      this.setState({
        result: "COM WIN",
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comChoice != this.state.comChoice) {
      this.compareChoice();
    }
  }

  render() {
    console.log(localStorage.getItem("jwt-token"));

    if (localStorage.getItem("jwt-token") === null) {
      window.location.href = "/login";
    }

    return (
      <div className="game-detail">
        <Row>
          <ScissorGame
            handlingMouseEnter={this.handlingMouseEnter}
            handlingMouseLeave={this.handlingMouseLeave}
            playerBackgroundColor={this.state.playerBackgroundColor}
            comBackgroundColor={this.state.comBackgroundColor}
            handlingOnClick={this.handlingOnClick}
            isCLick={this.state.isCLick}
            result={this.state.result}
          />
          <GameLeaderboard />
          <div className=" text-center gap-2 mt-4">logout={this.logout}</div>
        </Row>
      </div>
    );
  }
}

export default Game;
