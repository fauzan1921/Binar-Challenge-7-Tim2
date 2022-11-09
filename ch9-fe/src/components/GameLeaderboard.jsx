import { Component } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class GameLeaderboard extends Component {
    render() {
        return (
            <Col sm={4} className="game-leaderboard">
                <h1 class="leaderboard-text">GAME LEADERBOARD</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Win</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leaderboard.map((e) => (
                            <tr>
                                <td>
                                    <Link to={`/player/${e.id}`}>
                                        {e.data.username}
                                    </Link>
                                </td>
                                <td>{e.data.win}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default GameLeaderboard;
