import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import ChefitBig from '../../assets/chefitbig.svg';

const Header = () => {
  return <header>
        <Navbar />
        <div className="wrapper">
            <img src={ChefitBig}/>
        </div>
    </header>
  
}

export default Header