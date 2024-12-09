import React from 'react'
import "./NavbarRegister.css"
import Chefit from '../../assets/chefitsmall.svg';

const NavbarRegister = () => {
  return (
    <nav>
      <cra href="#" className="logo">
        <li>
          <a href = "/">
            <img src={Chefit}/>
          </a>
          
        </li>
        <acra>
          <a href="/recipes">Recipes</a>
          <a href="/add">Add Recipe</a>
        </acra>
      </cra>
     
      <lr>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </lr>
    </nav>
  )
}

export default NavbarRegister