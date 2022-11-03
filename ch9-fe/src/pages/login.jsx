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
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
              {/* <div>
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
              </div> */}

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

              {/* <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  onChange={this.handleOnChange}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  onChange={this.handleOnChange}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleLogin}
                  >
                    Submit
                  </Button>
                </div>
              </Form> */}
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
