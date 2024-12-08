import React from 'react'
import "./Footer.css"

const Footer = () => {
  return <footer>
    <contact>
      <co>
        Contact us
      </co>
      
    </contact>
    <form>
        <input type="text" name="name" placeholder="First Name"/>
    </form>
      <br/>
    <form>
        <input type="text" name="name" placeholder="Last Name" />
    </form>
      <br/>
    <form>
        <input type="email" name="email" placeholder="Email" />
    </form>
      <br/>
    <form>
        <input type="text" name="message" placeholder="Message"/>
    </form>
    <br/>
    <form>
      <input type="submit" value="Submit" />
    </form>
  </footer>
 
  
}

export default Footer