import React, { useState } from "react";
import logSign from '../images/logSign.jpg';
import { auth, fs } from '../Config/config';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import { useHistory } from 'react-router-dom'
import { Button, Col, Form, Row } from "react-bootstrap";

export const Signup = () => {

    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phonNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccesMsg] = useState('');


    const handleSignup = (e) => {
        e.preventDefault();
        // console.log(firstName,lastName,phonNum,email,password);

        auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
            console.log(credentials)
            fs.collection('employes').doc(credentials.user.uid).set({
                fast_name: firstName,
                last_name: lastName,
                phone: phonNum,
                email: email,
                password: password
            }).then(() => {
                setSuccesMsg('Signup Successfull, You will now autometically get redirected to Login')
                setFirstName('');
                setLastName('');
                setPhoneNum('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(() => {
                    setSuccesMsg('');
                    history.push('/login');
                }, 3000)
            }).catch(error => setErrorMsg(error.message));

        }).catch((error) => {
            setErrorMsg(error.message)
        })
    }
    return (
        <>


            <div className="logo1">
                <img src={Logo} />
            </div>
            <div className="marge">
                <Row className="d-flex p-2 justify-content-center">
                    <Col className="mt-16" md={10} lg={10} sm={12} xs={12}>
                        <Row className="text-center d-flex justify-content-center">
                            <Col className="p-0 slider-img m-0" md={6} lg={6} sm={12} xs={12}>
                                <img className="modi7" src={logSign} alt="" />
                            </Col>
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                                {successMsg && <>

                                    <div className='success-msg'>{successMsg}</div>
                                    <br></br>

                                </>}
                                <Form className="onboardForm1" autoComplete="off" onSubmit={handleSignup}>
                                    <h1>
                                        Sign Up Form
                                    </h1>
                                    <Form.Group>
                                        <Form.Control className="form-control" type="text" placeholder="Fast Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className="form-control mt-2" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className="form-control mt-2" type="phone" placeholder="Phone Number" onChange={(e) => setPhoneNum(e.target.value)} value={phonNum} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className="form-control mt-2" type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className="form-control mt-2" type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </Form.Group>

                                    <Button className="btn btn-block mt-2 site-btn pure-material-button-contained w-100" type="submit">Sign Up</Button>

                                    <span>Already Have an account Login<Link to="login">here</Link></span>

                                </Form>

                                {errorMsg && <>

                                    <div className='error-msg'>{errorMsg}</div>
                                    <br></br>

                                </>}
                            </Col>

                        </Row>
                    </Col>
                </Row >
            </div>


        </>
    )

}