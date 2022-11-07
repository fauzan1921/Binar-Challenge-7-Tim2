import { Component } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import GameLeaderboard from "../components/GameLeaderboard";
import ScissorGame from "../components/ScissorGame";
import "../css/game_detail.css";
import { getBiodataById } from "../action/biodata";
import {
    getLeaderboardById,
    insertLeaderboard,
    updateLeaderboard,
    getAllLeaderboard,
} from "../action/game";

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
        user: {},
        leaderboardById: {},
        leaderboard: [],
    };

    handleLogout = () => {
        localStorage.removeItem("jwt-token");
        alert("YOU ARE LOGOUT");
        window.location.href = "/";
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

    getUserData = async () => {
        const id = this.props.user.user_id;
        const resp = await getBiodataById(id);

        this.setState({
            user: resp,
        });
    };

    getLeaderboardData = async () => {
        const id = this.props.user.user_id;
        const resp = await getLeaderboardById(id);

        this.setState({
            leaderboardById: resp,
        });
    };

    handleWriteLeaderboard = () => {
        if (this.state.result === "PLAYER WIN") {
            if (this.state.leaderboard === null) {
                insertLeaderboard(
                    this.state.user.username,
                    this.props.user.user_id
                );
            } else {
                const updateWin = this.state.leaderboardById.win + 1;

                updateLeaderboard(
                    this.state.user.username,
                    updateWin,
                    this.props.user.user_id
                );
            }
        }
    };

    getAllLeaderboardData = async () => {
        const resp = await getAllLeaderboard();

        this.setState({
            leaderboard: resp,
        });
    };

    componentDidMount() {
        this.getUserData();
        this.getLeaderboardData();
        this.getAllLeaderboardData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.comChoice !== this.state.comChoice) {
            this.compareChoice();
        }

        if (prevState.result !== this.state.result) {
            this.handleWriteLeaderboard();
        }
    }

    render() {
        console.log(localStorage.getItem("jwt-token"));

        if (localStorage.getItem("jwt-token") === null) {
            window.location.href = "/login";
        }

        console.log(this.state.user);

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
                    <GameLeaderboard leaderboard={this.state.leaderboard} />
                    <div className=" text-center gap-2 mt-4">
                        <Button
                            variant="danger"
                            type="submit"
                            onClick={this.handleLogout}
                        >
                            LOGOUT
                        </Button>
                        ;
                    </div>
                </Row>
            </div>
        );
    }
}

export default Game;
