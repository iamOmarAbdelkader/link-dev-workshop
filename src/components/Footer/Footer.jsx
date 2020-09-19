import React from 'react';
import './Footer.style.sass'
function Footer() {
  return (
    <footer id={'app-footer'}>
            <div className={'footer-inner'}>
               <div className={'upper'}>
                  <div className={'container-fluid'}>
                   <div className={'upper-inner'}>
                     <div className={'row'}>
                      <div className={'col-md-2 item'}>
                        <h2>Who We Are</h2>
                        <ul>
                          <li>About Us</li>
                          <li>Mission, Vission & Goals</li>
                          <li>Our Message</li>
                          <li>Board of Trustees</li>
                          <li>Board of Directors</li>
                          <li>FAQ’s</li>
                        </ul>
                      </div>
                      <div className={'col-md-2 item'}>
                        <h2>What we do</h2>
                        <ul>
                          <li>Research</li>
                          <li>Programmes</li>
                          <li>Collaborations</li>
                          <li>in2Hc</li>
                        </ul>  
                      </div>  
                      <div className={'col-md-2 item'}>
                          <h2>Get Involved</h2>
                          <ul>
                            <li>Donate</li>
                            <li>Partners</li>
                          </ul>   
                      </div>  
                      <div className={'col-md-2 item'}>
                          <h2>Media Center</h2>
                          <ul>
                            <li>Photo Gallery</li>
                            <li>Social Media Hub</li>
                            <li>Events</li>
                          </ul>    
                      </div>  


                      <div className={'col-md-4 item'}>
                          <h2>Contact Us</h2>
                          <ul>
                            <li>Contact Details</li>
                            <li>Careers</li>
                          </ul> 
                          <div className={'form'}>
                            <h2>Subscribe to our Newsletter</h2>
                            <div className={'form-group'}>
                              <input placeholder={'Enter Your email address'} type={'text'} name={'email'}/>
                              <button>Subscribe</button>
                            </div>
                          </div>   

                          </div>
                          {/* ./row */}
                      </div>

                   </div>
                  </div>        
                </div>  
                     {/* ./upper */}

                <div className={'lower'}>
                  <div className={'container-fluid'}>
                    <div className={'lower-inner'}>
                        <div className={'left'}>
                            <span>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                            <span>User Agreement</span>
                            <span>Sitemap</span>
                        </div>  
                        <div className={'right'}>
                            <p className={'copy-rights'}>Copyright 2016 LinkDev. All Rights Reserved.</p>
                          </div>  
                    </div>  
                  </div>        
                </div>  
                     {/* ./lower */}
            </div>
    </footer>
  );
}

export default Footer;
