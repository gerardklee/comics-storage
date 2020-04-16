import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Register() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let emailRef = useRef();
    let passwordRef1 = useRef();
    let passwordRef2 = useRef();
    const handleRegister = () => {
        const email = emailRef.current.value;
        const password1 = passwordRef1.current.value;
        const password2 = passwordRef2.current.value;
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Register
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                        </Form.Group>
                        <Form.Group controlId="formEnterPassword">
                            <Form.Label>Enter password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" ref={passwordRef1}/>
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" ref={passwordRef2}/>
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleRegister}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>  
        </>
    )
}

export default Register;