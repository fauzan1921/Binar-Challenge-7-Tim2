import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";
import GameHistory from "../components/GameHistory";
import GamePoint from "../components/GamePoint";
import { Component } from "react";
import EditProfileModal from "../components/EditProfileModal";
import { getBiodataById } from "../action/biodata";

class Profile extends Component {
    state = {
        show: false,
        username: "",
        fullname: "",
        email: "",
    };

    handleShow = () => {
        this.setState({
            show: !this.state.show,
        });
    };

    getUserData = async () => {
        const id = this.props.user.user_id;
        const resp = await getBiodataById(id);

        this.setState({
            username: resp.username,
            fullname: resp.fullname,
            email: resp.email,
        });
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    check = () => {
        alert(`click`);
        console.log(this.state);
    };

    componentDidMount() {
        this.getUserData();
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
                                handleOnChange={this.handleOnChange}
                                check={this.check}
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
