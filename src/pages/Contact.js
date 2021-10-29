import React, { useState } from "react";

const Contact = () => {
  const [data, updateData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const eventHandler = (event) => {
    updateData({ ...data, [event.target.name]: event.target.value });
  };
  console.log(data);
  return (
    <div>
      <section className="container my-5 py-4">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center py-4 mb-5">
              <h1 className="section-title">Contact</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 mb-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="contact_input"
                    id="exampleInputPassword1"
                    name="name"
                    onChange={eventHandler}
                    value={data.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="contact_input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={eventHandler}
                    value={data.email}
                  />
                </div>

                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label "
                  >
                    Example textarea
                  </label>
                  <textarea
                    class=" contact_input"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    onChange={eventHandler}
                    value={data.msg}
                  ></textarea>
                </div>

                <button type="submit" className="contact_button button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-light footer_edit">
        <div className="home_social text-light pt-3">
          <a
            href="https://www.facebook.com/bhavesh.wadhwa2"
            className="home_social-icon text-light"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bhavesh-wadhwa-3806a6189/"
            className="home_social-icon text-light"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/bwadhwa0387"
            className="home_social-icon text-light"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/bhavesh_wadhwa6599/"
            className="home_social-icon text-light"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#" className="home_social-icon text-light">
            <i class="bx bxl-google"></i>
          </a>
        </div>
        <div class="text-center">
          © 2020 Copyright :
          <a className="text-light" href="https://mdbootstrap.com/">
            bwadhwa0387
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
