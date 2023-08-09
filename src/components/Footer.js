import React from "react";
import "./footer.css"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedinSqure,
} from "react-icons/fa";

const Footer =  () => {
    return (
      <>
    <footer>
    <div class="content">
      <div class="left box">
        <div class="upper">
          <div class="topic">About us</div>
          <p>We are providing to graphic related files and design only one click simply download very useful to biginner designer.</p>
        </div>
        <div class="lower">
          <div class="topic">Contact us</div>
          <div class="phone">
            <a href="#"><i class="fas fa-phone-volume"></i>+91 78170 76137</a>
          </div>
          <div class="email">
            <a href="#"><i class="fas fa-envelope"></i>kansaramilan@ezygraphic.online</a>
          </div>
        </div>
      </div>
      <div class="middle box">
        <div class="topic">Disclaimer</div>
        <div><a href="/termsandcondition.html">Terms And Condition</a></div>
        
      </div>
      <div class="right box">
        <div class="topic">Follow us</div>
       
          <div class="media-icons">
            {/* <a href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/accounts/login/"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"><i class="fab fa-twitter"></i></a>
            <a href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558718_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9061769&mcid=6844056167778418689&cid=&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDjE4ikrkVuo735LhkA3VWvrU0_lSNDu-dvR5gBXYblG3r3UavUzfeYaArfWEALw_wcB&gclsrc=aw.ds"><i class="fab fa-linkedin-in"></i></a> */}
          <a
                href="https://www.facebook.com/login/"
                target="_ezygraphic">
                <FaFacebookSquare className="facebook" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_ezygraphic">
                <FaInstagramSquare className="instagram" />
                </a>
                <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
                target="_ezygraphic">
                <FaTwitterSquare className="twitter" />
                </a>
                
              
          </div>
      </div>
      </div>
   
    <div class="bottom">
      <p>Copyright © 2023 <a href="#">EzyGraphic</a> All rights reserved</p>
    </div>
  </footer>
      </>
    );
  };
  
  export default Footer