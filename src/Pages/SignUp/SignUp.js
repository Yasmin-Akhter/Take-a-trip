import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/');
    }


    return (
        <div>


            <Form onSubmit={handleCreateUser} className='container w-50 mx-auto my-3'>
                <h1 className='text-center'>Please Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" name=' confirm-password' placeholder=" Confirm Password" required />
                </Form.Group>

                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Signout
                </Button>

                <p>Already Registered? <span><Link to="/login"> <button className='btn btn-link text-decoration-none'>Please Login</button></Link> </span> </p>

            </Form>

        </div>
    );
};

export default SignUp;