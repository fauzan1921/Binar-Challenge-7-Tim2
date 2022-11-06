import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function EditProfileModal(props) {
    const { show, handleClose, handleOnChange, check } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Profile Setting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Fullname
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="string"
                                placeholder="fullname"
                                id="fullname"
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Username
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="string"
                                placeholder="username"
                                id="username"
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Email
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                disabled
                                type="email"
                                placeholder="email@example.com"
                                id="email"
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Password
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                disabled
                                type="password"
                                placeholder="******"
                                id="password"
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        handleClose();
                        check();
                    }}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditProfileModal;
