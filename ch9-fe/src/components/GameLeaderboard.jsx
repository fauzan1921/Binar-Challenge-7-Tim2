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
        )
    }
}

export default GameLeaderboard