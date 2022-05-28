import React from 'react';
import { Bounce, Fade, Rotate } from 'react-reveal';
import profile from '../../img/hossain.jpg'

const Portfolio = () => {
  return (
    <>
      <section className="home">
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" style={{ marginRight: "30px" }} className="image">
          <img src={profile} alt="" />
        </div>

        <Fade right> <div className="content">
          <h3 style={{ color: "blue" }}>Name: Rabbi Hossain</h3>
          <h5>Email:rabbihossain@gmail.com</h5>
          <h5>Address: East Hazi Nagar, Sarulia, Demra, Dhaka-1361</h5>
          <h5>Educational Qualification: BBA, from Ashanullah university</h5>
          <h5>Development Skills: HTML5, CSS3, Tailwind CSS, bootstrap, React, NodeJS,ExpressJS,MongoDB</h5>

          <span style={{ fontSize: '25px', color: "blue" }}>Web developer</span>
          <p>
            As a leader or team member, I want to flourish in a demanding workplace that promotes new ideas and provides growth chances and a good environment. Working on real-time web applications with JavaScript (ES6, React, Next) and Node is my passion. Backend technology in js is fantastic, and I always prefer it.
          </p>

        </div></Fade>
      </section>
      <section className="portfolio">
        <Rotate><Bounce top cascade> <h1 className="heading feature">My Working Website</h1></Bounce></Rotate>

        <div style={{ textAlign: 'center', justifyContent: 'center' }} className="box-container">
          <button style={{ fontSize: '30px', width: '200px' }} ><a style={{ color: 'green', textDecoration: "none" }} href="https://grocery-service-5e808.web.app/">WEBSITE 1</a></button>

          <button style={{ fontSize: '30px', width: '200px' }} ><a style={{ color: 'green', textDecoration: "none" }} href="https://independent-service-prov-34818.web.app/">WEBSITE 2</a></button>

          <button style={{ fontSize: '30px', width: '200px' }} ><a style={{ color: 'green', textDecoration: "none" }} href="https://cocky-jepsen-a00f17.netlify.app/">WEBSITE 3</a></button>
        </div>


      </section>


    </>
  );
};

export default Portfolio;