import { Component } from "react";
import { Col, Row, Table } from 'react-bootstrap';


class GameLeaderboard extends Component {
    render(){
        return(
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
                        {
                        this.props.leaderboard.map(e => (
                            <tr>
                            <td>{e.data.username}</td>
                            <td>{e.data.win}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </Col>
        )
    }
}

export default GameLeaderboard