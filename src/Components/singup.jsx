import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Authcontext/authContext';
import { Link } from 'react-router-dom';

export const SingnUp = () => {
    const {signUp} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const hadleSubmit  = async e=> {
        e.preventDefault();
        if (passwordRef.current.value === confirmPasswordRef.current.value) {
            setErrorMsg('');
            setLoading(true);
            try {
                await signUp(emailRef.current.value, passwordRef.current.value)
            } catch(e) {
                console.log(e)
                setErrorMsg(e.message?.split(':')[1]);
            }
            setLoading(false);
        } else {
            setErrorMsg('Password does not match');
        }
    }
    return (
        <>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
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
                        <Form.Group id='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={confirmPasswordRef} required />
                        </Form.Group>
                        <Button loading={loading} disabled={loading} className='btn-primary mt-5 w-100' type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>Already have an account ? <Link to='/login'>Login</Link></div>
        </>
    )
};
