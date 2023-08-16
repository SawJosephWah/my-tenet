import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlices';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import '../assets/css/LoginRegister.css'
import supabase from '../supabase/setUp'

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const [register, { isLoading }] = useRegisterMutation();

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);



    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
                const { data, error } = await supabase.auth.signUp(
                    {
                        email: email,
                        password: password,
                        options: {
                            data: {
                                user_name: name
                            }
                        }
                    }
                )
                if(error){
                    if(error.status == 429){
                        alert("Email rate limit exceeds");
                    }
                }else{
                    dispatch(setCredentials({
                        id: data.user.id,
                        email: data.user.email,
                        user_metadata: data.user.user_metadata
                    }));
                    navigate('/');
                }    
        }
    };

    return (
        <>
            <Container fluid>
                <div className="custom-container">
                    <Row>
                        <Col md={6} className="background-container">
                            <div className="blur-overlay"></div>
                            <div className="h-100vh d-flex justify-content-center align-items-center">
                                <div className="left-box">
                                    <h2 className="text-white">Online Campus</h2>
                                    <h2 className="text-dark">for</h2>
                                    <h2 className="text-white">Students and</h2>
                                    <h2 className="text-white">Teachers</h2>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="h-100vh d-flex justify-content-center align-items-center">
                                <div className="right-box">
                                    <h4 className="mb-5">Welcome to TENET</h4>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group className='my-2' controlId='name'>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type='name'
                                                placeholder='Enter name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group className='my-2' controlId='email'>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control
                                                type='email'
                                                placeholder='Enter email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group className='my-2' controlId='password'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Enter password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='my-2' controlId='confirmPassword'>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Confirm password'
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Button type='submit' variant='dark' className='mt-3 w-100'>
                                            Register
                                        </Button>

                                    </Form>
                                    <div className="my-2">
                                        Already have an account? <Link to={`/login`}>Login</Link>
                                    </div>

                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default RegisterScreen;