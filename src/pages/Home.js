import React from "react";
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import AOS from "aos";
const Home = () => {
  AOS.init();
  return (
    <>
      <section className="container my-5 py-4">
        <div className="row">
          <div className="col-md-5  mt-5">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h1 className="home_title display-5 mb-4">
                Hi,
                <br />
                I'am <span className="home_title-color">Bhavesh</span>
              </h1>
              <Typical
                steps={[
                  "Front End Developer",
                  1000,
                  "React Developer",
                  1000,
                  "Passionate Learner",
                  1000,
                ]}
                loop={Infinity}
                wrapper="p"
                className="font-size"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <NavLink to="/contact" className="button m-4">
                Contact Me
              </NavLink>

              <a
                href="Bhavesh_Wadhwa_SVVV_Resume.pdf"
                className="button m-4"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                src="./assets/about1.jpg"
                alt="profile"
                width="450px"
                height="450px"
              />
            </div>
          </div>
          <div className="home_social py-5">
            <a
              href="https://www.facebook.com/bhavesh.wadhwa2"
              className="home_social-icon"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-wadhwa-3806a6189/"
              className="home_social-icon"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/bwadhwa0387"
              className="home_social-icon"
            >
              <i class="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/bhavesh_wadhwa6599/"
              className="home_social-icon"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" className="home_social-icon">
              <i class="bx bxl-google"></i>
            </a>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
