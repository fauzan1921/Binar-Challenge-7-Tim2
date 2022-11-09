import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ProfileCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body className="text-center">
                    {!this.props.user.profileImg ? (
                        <>
                            <img
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                alt=""
                                style={{
                                    borderRadius: "50%",
                                    width: "150px",
                                    height: "150px",
                                    boxShadow:
                                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <img
                                src={this.props.user.profileImg}
                                alt=""
                                style={{
                                    borderRadius: "50%",
                                    width: "150px",
                                    height: "150px",
                                    boxShadow:
                                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                }}
                            />
                        </>
                    )}

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

                    {!this.props.param ? (
                        <>
                            <Button
                                variant="primary"
                                onClick={this.props.showModal}
                            >
                                Edit Profile
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
