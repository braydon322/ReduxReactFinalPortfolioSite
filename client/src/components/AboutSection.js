import React, { Component } from 'react';
import '../App.css';
import BNT from '../images/profCircle.png'
import FB from '../images/social-01.svg'
import IG from '../images/social-02.svg'
import IN from '../images/social-03.svg'
import Particles from 'react-particles-js';


class AboutSection extends Component {

  render() {

    return (
      <div>
        <div className="aboutBackground">
          <Particles
          params={{
        		particles: {
              number: {
                value: 100,
                },
        			line_linked: {
        				shadow: {
        					enable: true,
        					color: "#3CA9D1",
        					blur: 5
        				}
        			},
              size: {
              value: 10,
              random: true,
              anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false
              }
              }
            },
            opacity: {
            value: 0.2,
            random: false,
            anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
            }
            }
        		}
        	}/>
        </div>
          <div className="about">
          <div id="aboutText">
            <div className="left">
              <img id="profPic" src={BNT} alt=""></img>
            </div>
            <div className="right">
            <div>
              <h1>Hello, Im Braydon</h1>
              <small><em><b>Designer & Developer</b></em></small><br></br><br></br>
                <p>Full stack web developer with a passion for good design. With both graphic design and web development experience, I pride myself in my knowledge of Ruby on Rails, JavaScript and Object Oriented Programming, as well as fluency in the Adobe Creative Suite. I bring strong leadership and technical skills that strengthen teams and drive project excellence.</p>
                <a href="http://www.instagram.com/bwzyco"><img src={IG} className="social" alt=""></img></a>
                <a href="http://www.linkedin.com/in/braydonwhitmarsh"><img src={IN} className="social" alt=""></img></a>
                <div>
                <br></br>
                Height: 6'5'<br></br>
                Weight: 275<br></br>
                Fighting-Style: Southpaw<br></br><br></br>
                <u><b><em>Technical Skills:</em></b></u> <br></br>
                Javascript,  jQuery, HTML, CSS, SQL, OOP, jQuery, Ruby, Rails, Sinatra, ReactJS, Redux, Adobe Creative Suite
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutSection
