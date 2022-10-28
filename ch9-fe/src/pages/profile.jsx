import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";
import GameHistory from "../components/GameHistory";
import GamePoint from "../components/GamePoint";

const Profile = () => {
    return (
        <Container fluid="md" bg="dark" className="my-mt">
            <Row>
                <Col sm={4}>
                    <Container>
                        <ProfileCard />
                    </Container>
                    <Container className="my-mt">
                        <GamePoint />
                    </Container>
                </Col>
                <Col sm={8}>
                    <Container>
                        <GameHistory />
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
