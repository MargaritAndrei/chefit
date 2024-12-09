import React from 'react'
import "./Navbar.css"
import Chefit from '../../assets/chefitsmall.svg';

const Navbar = () => {
  return (
    <nav>
      <cra href="#" className="logo">
        <li>
          <img src={Chefit}/>
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

export default Navbar