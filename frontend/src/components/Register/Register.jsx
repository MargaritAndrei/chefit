import React from 'react'
import "./Register.css"
import NavbarRegister from '../NavbarRegister/NavbarRegister'
import ChefitBig from '../../assets/chefitbig.svg';

const Register = () => {
  return <header>
        <NavbarRegister />
        <div className="wrapper">
            <img src={ChefitBig}/>
        </div>
    </header>
  
}

export default Register