import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function GameHistory() {
    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="text-center">
                        <th className="my-red-color">Game</th>
                        <th>Play Time</th>
                        <th>Point</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Game Title</td>
                        <td className="text-center">5</td>
                        <td className="text-center">30</td>
                    </tr>
                    <tr>
                        <td>Game Title</td>
                        <td className="text-center">2</td>
                        <td className="text-center">9</td>
                    </tr>
                    <tr>
                        <td>Game Title</td>
                        <td className="text-center">4</td>
                        <td className="text-center">16</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default GameHistory;
