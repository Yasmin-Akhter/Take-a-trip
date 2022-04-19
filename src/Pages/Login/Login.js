import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    // const [user] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/checkOut');
    }
    if (error) {
        console.log(error);
    }
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);

    }


    return (
        <div>


            <Form onSubmit={handleSignIn} className='container w-50 mx-auto my-3'>
                <h1 className='text-center'>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
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
