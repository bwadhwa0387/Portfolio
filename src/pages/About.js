import React from "react";

const About = () => {
  return (
    <div>
      <section className="container my-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-4 mb-5">
              <h1 className="section-title">About</h1>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <img
                  src="./assets/about1.jpg"
                  alt="Bhavesh"
                  height="400px"
                  width="400px"
                />
              </div>
            </div>

            <div className="col-md-6 my-5">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <h1 className="display-4 mb-4 home_title-color">
                  Bhavesh Wadhwa
                </h1>
                <p className="lead mb-5">
                  A passionate Software Developer having an experience of
                  building Web applications with React / JavaScript / HTML/CSS /
                  MySQLs / Java and some other libraries and frameworks.
                </p>
                <div class="progress my-4">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    Html/Html 5
                  </div>
                  <span className="pro"></span>
                </div>
                <div class="progress my-4">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  >
                    CSS
                  </div>
                  <span className="pro"></span>
                </div>
                <div class="progress my-4">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  >
                    JavaScript
                  </div>
                  <span className="pro"></span>
                </div>
                <div class="progress my-4">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  >
                    MySQL
                  </div>
                  <span className="pro"></span>
                </div>
                <div class="progress my-4">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  >
                    React
                  </div>
                  <span className="pro"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
