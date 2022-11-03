import "../App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <Container fluid className="login_register-body">
        <Row className="justify-content-md-center">
          <Col md="auto" className="login_register-login">
            <div className="mb-4 text-center">
              <h3>ACCOUNT LOGIN</h3>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <div className="mt-5 align-right">
                <a href="/Register">Register ?</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
