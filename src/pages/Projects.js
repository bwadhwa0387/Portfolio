import React from "react";
import Data from "./Data";
const Projects = () => {
  return (
    <section className="container my-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 mb-5">
            <h1 className="section-title">Projects</h1>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div class="col-md-6 px-4">
            <div data-aos="zoom-in-up">
              <img
                src="./assets/landing.jpg"
                alt="Avatar"
                class="image "
                style={{ width: "100%" }}
              />
              <div class="p-2 mt-2">
                <div class="text">The Steaming Cup</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-4">
            <div data-aos="zoom-in-up">
              <img
                src="./assets/travelling.jpg"
                alt="Avatar"
                class="image"
                style={{ width: "100%" }}
              />
              <div class="p-2 mt-2">
                <div class="text">The Travelling Mantra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
