import React from 'react'
import "./Login.css"
import Navbar from '../Navbar/Navbar'
import ChefitBig from '../../assets/chefitbig.svg';

const Login = () => {
  return <header>
        <Navbar />
        <div className="wrapper">
            <img src={ChefitBig}/>
        </div>
    </header>
  
}

export default Login