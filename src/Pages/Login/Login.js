import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>


            <Form className='container w-50 mx-auto my-3'>
                <h1 className='text-center'>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>
                <p>New to Take A Trip? <span><Link to="/signup"> <button className='btn btn-link text-decoration-none'>Please Sign up</button></Link> </span> </p>
                <p className='text-center'>Or</p>
                <button className='w-50 d-block mx-auto'>Sign Up with Google</button>
            </Form>
        </div>
    );
};

export default Login;
