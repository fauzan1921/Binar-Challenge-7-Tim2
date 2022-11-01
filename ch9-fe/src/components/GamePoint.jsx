import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GamePoint() {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">
                    <h4>Recently Played</h4>
                </Card.Title>
                <hr />
                <Row>
                    <Col>
                        <h6>Game Title</h6>
                    </Col>
                    <Col className="text-secondary">
                        <h6>Total Points</h6>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default GamePoint;
