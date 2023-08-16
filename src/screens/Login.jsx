import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/usersApiSlices';
import { setCredentials } from '../slices/authSlice';
import supabase from '../supabase/setUp';
import { toast } from 'react-toastify';
import Loader from '../components/spinner';
import '../assets/css/LoginRegister.css'
import { createClient } from '@supabase/supabase-js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        // try {
        //     const res = await login({ email, password }).unwrap();
        //     console.log(res);
        //     dispatch(setCredentials({ ...res }));
        //     navigate('/');
        // } catch (err) {
        //     alert(err?.data?.message || err.error);
        //     // console.log(err?.data?.message || err.error);
        // }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
              })

            if (error) {
                if(error.status == 400){
                    alert('Credential Error');
                }
            } else {
                dispatch(setCredentials({ ...data.user,access_token:data.session.access_token}));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
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

                                        <Button type='submit' variant='dark' className='mt-3 w-100' disabled={isLoading}>
                                            Sign In
                                        </Button>
                                    </Form>
                                    <div className="my-2">
                                        Dont't you  have an account? <Link to={`/register`}>Sign Up</Link> for free
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>

                {/* <h1>Sign In</h1>

                
                {
                    isLoading && <Loader />
                }
                <Row className='py-3'>
                    <Col>
                        New Customer? <Link to={`/register`}>Register</Link>
                    </Col>
                </Row> */}
            </Container>

        </>
    );
};

export default Login;