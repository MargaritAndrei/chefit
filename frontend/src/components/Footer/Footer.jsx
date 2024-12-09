import React from 'react'
import "./Footer.css"
import Foo from '../../assets/footer.jpeg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/insta.svg';
import Youtube from '../../assets/youtube.svg';
import Twitch from '../../assets/twitch.svg';

const Footer = () => {
  return <footer>
    
    <br/>
    <br/>
    <div class="contact">
          Contact us
    </div>
    <br/>
    <br/>

    <fp>
      <fr>
          <form>
              <input type="text" name="name" placeholder="First Name"/>
          </form>
          <br/>
          <br/>
          <form>
              <input type="text" name="name" placeholder="Last Name" />
          </form>
          <br/>
          <br/>
          <form>
              <input type="email" name="email" placeholder="Email" />
          </form>
      </fr>
      <msg>
        <form>
            <input type="message" name="message" placeholder="Message"/>
        </form>
        <br/>
        <div class="sub">
          <form>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </msg>
    </fp>
    <br/>
    

    <div class="imag2">
      <a href="https://www.instagram.com/andrei.margarit123/">
        <img src = {Instagram}/>
      </a>
      <a href="https://www.facebook.com/LsacBucuresti/?locale=ro_RO">
        <img src = {Facebook}/>
      </a>
      <a href="https://www.youtube.com/andyandrei123">
        <img src = {Youtube}/>
      </a>
      <a href="https://www.twitch.tv/lsac_bucuresti">
        <img src = {Twitch}/>
      </a>
      
    </div>
  </footer>
 
  
}

export default Footer