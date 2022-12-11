import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import { auth } from '../Config/config';
import { useHistory } from 'react-router-dom'

export const Navber = ({ user }) => {

    const history = useHistory();

    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('./login')
        })

    }

    return (
        <>

            <div className='navbar'>


                <div className='leftside'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>

                </div>


                <div className='rightside'>


                    {!user && <>
                        <div><Link className='navlink' to="signup">Sign Up</Link></div>
                        <div><Link className='navlink' to="login">Login</Link></div>

                    </>}

                    {user && <>
                        <div><Link className='navlink' to='/'>{user}</Link></div>
                       
                        <div className='btn btn-danger btn-md'

                            onClick={handleLogout}>LOGOUT</div>

                    </>}

                </div>

            </div>



        </>
    )

}