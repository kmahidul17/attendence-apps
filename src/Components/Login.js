import React, { useState } from "react";
import logSign from '../images/logSign.jpg';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import { auth } from '../Config/config';
import { useHistory } from 'react-router-dom'
import { Button, Col, Form, Row } from "react-bootstrap";

export const Login = () => {

   const history = useHistory();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [errorMsg, setErrorMsg] = useState('');
   const [successMsg, setSuccesMsg] = useState('');


   const handleLogin = (e) => {
      e.preventDefault();
      // console.log(email, password);
      auth.signInWithEmailAndPassword(email, password).then(() => {
         setSuccesMsg('Login Successfull, You will now autometically get redirected to Home Page')
         setEmail('');
         setPassword('');
         setErrorMsg('');
         setTimeout(() => {
            setSuccesMsg('');
            history.push('/');
         }, 3000)
      }).catch(error => setErrorMsg(error.message));
   }



   return (
      <>
         <div className="logo1">
            <img src={Logo} />
         </div>
         <div className="marge">
            <Row className="d-flex p-2 justify-content-center">
               <Col className="mt-10" md={10} lg={10} sm={12} xs={12}>
                  <Row className="text-center d-flex justify-content-center">

                     <Col className="p-0 slider-img m-0" md={6} lg={6} sm={12} xs={12}>
                        <img className="modi7" src={logSign} alt=""/>
                     </Col>
                     <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                        {successMsg && <>

                           <div className='success-msg'>{successMsg}</div>
                           <br></br>

                        </>}
                        <Form className="onboardForm" autoComplete="off" onSubmit={handleLogin}>
                           <h1>
                              Log in Form
                           </h1>
                           <Form.Group>
                              <Form.Control className="form-control" type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                           </Form.Group>
                           <Form.Group>
                              <Form.Control className="form-control mt-2" type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                           </Form.Group>

                           <Button className="btn btn-block mt-2 site-btn pure-material-button-contained w-100" type="submit">Login</Button>
                           
                              <span>Don't Have an account Signup<Link to="signup">Here</Link></span>
                           
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