import "../App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Component } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import authFirebase from "../config/firebase";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleLogin = () => {
    // TODO
    console.log(this.state);

    signInWithEmailAndPassword(
      authFirebase,
      this.state.email,
      this.state.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("SUCCES LOGIN");
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
      <Container fluid className="login_register-body">
        <Row className="justify-content-md-center">
          <Col md="auto" className="login_register-login">
            <div className="mb-4 text-center">
              <h3>ACCOUNT LOGIN</h3>
            </div>
            <div>
              <div>
                <Form.Control
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
              </div>

              <div className="d-grid gap-2 mt-4">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleLogin}
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

export default Login;
