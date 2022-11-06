import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ProfileCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body className="text-center">
                    <img
                        src="https://picsum.photos/150/150"
                        alt=""
                        style={{ borderRadius: "50%" }}
                    />
                    <Card.Title>
                        <i class="fa-solid fa-user "></i>
                        {"   "}
                        <h4 className="my-inline-display">
                            {this.props.user.fullname}
                        </h4>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary ">
                        <h5>@{this.props.user.username}</h5>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        <i class="fa-solid fa-envelope"></i>
                        {"   "}
                        <h6 className="my-inline-display">
                            {this.props.user.email}
                        </h6>
                    </Card.Subtitle>
                    <Button variant="primary" onClick={this.props.showModal}>
                        Edit Profile
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
