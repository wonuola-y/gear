import React from "react";
import logo from './tools/logo.svg'
import search from './tools/search.svg'
import twitter from './tools/twitter.svg'
import facebook from './tools/facebook.svg'
import arrow from './tools/arrow.svg'
function Home() {
  return (
    <div className="container">
      <div className="main">
       
       <div className="header-contain">
       <div className="header">
          <img src={logo} alt="logo" className="logo"/>
          <img src={search} alt="search" className="search " />
        </div>
       </div>
      <div className="sub-container">
      <div className="sub-section">
           
           <ul>
             <li><b>Gear VR</b></li>
             <li>Design</li>
             <li>Display</li>
             <li>Experience</li>
             <li>Spec</li>
             <li>Gallery</li>
           </ul>

           <div className="text">
                 <h1>Gear VR</h1>
                 <p>It's easy to get lost in the world of virtual reality because the Gear VR
 is engineered to feel lighter.</p>
 <button>Find out more <img src={arrow} alt="arrow" /></button>
             </div>
         </div>
      </div>
        <div>
          <div className="footer">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      </div>
     
    </div>
  );
}

export default Home;
