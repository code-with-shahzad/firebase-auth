import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Authcontext/authContext';
import { Link, useNavigate  } from 'react-router-dom';

export const LogIn = () => {
    const {logIn} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const nevigate = useNavigate();

    const hadleSubmit  = async e=> {
        e.preventDefault();
        try {
            setLoading(true);
            setErrorMsg('');
           const response = await logIn(emailRef.current.value, passwordRef.current.value);
           const token = response?._tokenResponse?.idToken;
           localStorage.setItem('token', token);
            nevigate('/');
            } catch(e) {
                setErrorMsg(e.message?.split(':')[1]);
            }
            setLoading(false);
        }
    return (
        <>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
                    <Form onSubmit={hadleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email </Form.Label>
                            <Form.Control ref={emailRef} type='email' required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type='password' required />
                        </Form.Group>
                        <Button loading={loading} disabled={loading} className='btn-primary mt-5 w-100' type='submit'>Log in</Button>
                        <Button loading={loading} disabled={loading} className='btn-primary mt-2 w-100' type='submit'>Sign In with Google</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>Don't have an account? <Link to='/signup'>Singup</Link></div>
        </>
    )
};
