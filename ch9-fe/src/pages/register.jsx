import "../App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Component } from "react";
import { authFirebase } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleRegister = () => {
    console.log(this.state);

    createUserWithEmailAndPassword(
      authFirebase,
      this.state.email,
      this.state.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("SUCCCES", user);
        localStorage.setItem("jwt-token", user.accessToken);
        alert("SUCCESS REGISTER");
        window.location.href = "/game";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR", errorMessage);
        alert(errorMessage);
      });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <Container fluid className="register-body">
        <Row className="justify-content-md-center">
          <Col md="auto" className="register-login">
            <div className="mb-4 text-center">
              <h3>ACCOUNT REGISTER</h3>
            </div>
            <div>
              <div>
                <Form.Control
                  className="mt-3"
                  placeholder="Email"
                  id="email"
                  onChange={this.handleOnChange}
                />
                <Form.Control
                  className="mt-3"
                  placeholder="Password"
                  id="password"
                  type="password"
                  onChange={this.handleOnChange}
                />
                <Form.Control
                  className="mt-3"
                  placeholder="User Name"
                  id="name"
                  type="text"
                  onChange={this.handleOnChange}
                />
                <Form.Control
                  className="mt-3"
                  placeholder="Full Name"
                  id="user"
                  type="text"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleRegister}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
