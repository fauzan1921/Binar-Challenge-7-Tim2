import "../App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Component } from "react";
import authFirebase from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AlertDismissible from "../function/function";

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
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR", errorMessage);
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
                <input
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  onChange={this.handleOnChange}
                ></input>
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  onChange={this.handleOnChange}
                ></input>
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
