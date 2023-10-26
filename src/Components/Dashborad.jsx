import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../Authcontext/authContext';
import { useNavigate } from 'react-router-dom';

export const Dashborad = () => {
    const {logout, currentUser} = useAuth();
    const nevigate = useNavigate();

    const handleLogout = async ()=> {
        try {
            await logout();
            localStorage.removeItem('token');
            nevigate('/login');
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Container>
            <Card>
                User: {currentUser ? currentUser?.email : ''}
            </Card>
                <Button variant='link' onClick={handleLogout}>Logout</Button>
        </Container>
    )
}
