import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";
import GameHistory from "../components/GameHistory";
import GamePoint from "../components/GamePoint";
import { Component } from "react";
import EditProfileModal from "../components/EditProfileModal";
class Profile extends Component {
    state = {
        show: false,
    };

    handleShow = () => {
        this.setState({
            show: !this.state.show,
        });
    };

    check = () => {
        alert(`click`);
        console.log(this.props.user);
    };

    componentDidMount() {
        this.check();
    }

    render() {
        if (localStorage.getItem("jwt-token") === null) {
            window.location.href = "/login";
        }
        return (
            <Container fluid="md" bg="dark" className="my-mt">
                <Row>
                    <Col sm={4}>
                        <Container>
                            <ProfileCard
                                showModal={this.handleShow}
                                user={this.props.user}
                            />

                            <EditProfileModal
                                show={this.state.show}
                                handleClose={this.handleShow}
                            />
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
    }
}

export default Profile;
