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
          <a href="#">Recipes</a>
          <a href="#">Add Recipe</a>
        </acra>
      </cra>
     
      <lr>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </lr>
    </nav>
  )
}

export default Navbar