
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error

    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (googleUser) {
        navigate(from, { replace: true });
    }
    if (error) {
        console.log(error);
    }
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
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

                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>
                <p>New to Take A Trip? <span><Link to="/signup"> <button className='btn btn-link text-decoration-none'>Please Sign up</button></Link> </span> </p>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '1px' }} className="bg-primary w-50 mb-3" > </div>
                    <p className='px-3'> Or </p>
                    <div style={{ height: '1px' }} className='bg-primary w-50 mb-3' >  </div>
                </div>


                <button className='w-50 d-block mx-auto mb-3' onClick={handleGoogleSignIn}> Sign in with Google</button>

            </Form>

        </div>
    );
};

export default Login;
