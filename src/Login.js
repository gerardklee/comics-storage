import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Login() {
    const [show, setShow] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = () => {

      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const data = { 
        email: email,
        password: password
      };
      
      var xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://localhost:4000/login');
      xhr.withCredentials = true;
      xhr.setRequestHeader("Access-Control-Allow-Origin","http://localhost:3000");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
          var data = JSON.parse(xhr.responseText);
          if (data.success) {
            handleClose();
          } else {
            alert("Incorrect credentials");
          }
        } else {
          alert("status is 0");
        }
      }
      console.log("status not 200");
      xhr.send(JSON.stringify(data));
    }
    
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Login
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleLogin}>
                Log in
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
} 

export default Login;