import React, { useState } from "react";
import "./Contact.css";
import "./Responsive__.css";
import { Link } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleemail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }
  };

  return (
    <div className="main">
      {/* <nav className="delivery-nav">
        <div className="container">
          <div className="delivery-img">
            <Link to={`/`}>
              <img src="photos/zomato.webp" alt="" />
            </Link>

            <div className="delivery-search">
              <div className="searchbox">
                <div className="search-city-delivery">
                  <i className="fa-solid fa-location-dot"></i>
                  <input type="text" placeholder="Connaught Place, New Delhi" />
                  <i className="fa-solid fa-sort-up"></i>|
                </div>
                <div className="search-restaurant-delivery">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                  />
                </div>
              </div>
              <div className="loginregister">
                <p><a onClick={openLoginModal}>Daxil ol</a></p>
                <p><a onClick={openSignupModal}>Qeydiyyatdan keç</a></p>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <section>
        <div className="bg-img">
          <div className="img-textt">
            <p>We would love to hear from you!</p>
          </div>
        </div>
      </section>

      <div className="submit-and-report">
        <div className="contact-form">
          <div className="selectBox">
            <select className="select-contact">
              <option className="contact-option">How can we help you?</option>
              <option className="contact-option">
                I need help with my Zomato online order.
              </option>
              <option className="contact-option">
                I found incorrect/outdated information on a page.
              </option>
              <option className="contact-option">
                There is a photo/review that is bothering me and I would like to
                report it.
              </option>
              <option className="contact-option">
                The website/app are not working the way they should.
              </option>
              <option className="contact-option">
                I would like to give feedback/suggestions.
              </option>
              <option className="contact-option">
                I need some help with my blog.
              </option>
              <option className="contact-option">Other</option>
            </select>
            <p className="star-select">*</p>
            <div className="icon-container">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="inputBox">
            <input
              type="text"
              className="name"
              name="name"
              value={name}
              onChange={handleName}
              required="requried"
            />
            <span>Full Name</span>
            <p className="star-1">*</p>
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              className="email"
              value={email}
              onChange={handleemail}
              required="requried"
            />
            <span>Email Address</span>
            <p className="star-2">*</p>
          </div>
          <div className="inputBox">
            <input type="text" className="num" name="num" required="required" />
            <span>Mobile Number (optional)</span>
          </div>
          <div className="inputBox">
            <textarea
              name="text"
              cols="70"
              rows="40"
              value={message}
              onChange={handleMessage}
              required="requried"
            ></textarea>
            <span>Type text</span>
            <p className="star-3">*</p>
          </div>
          <Link to={"/feedback"}>
            <div className="button_feedback">
              <button onClick={handleSubmit} type="submit">
                Submit feedback
              </button>
            </div>
          </Link>
        </div>
        <div className="report">
          <div className="report-safety">
            <h2>Report a Safety Emergency</h2>
            <p>
              We are committed to the safety of <br /> everyone using Zomato.
            </p>
            <a href="https://www.zomato.com/contact/emergency" target="_blank">
              Report here
            </a>
          </div>
          <div className="report-issue">
            <h2>Issue with your live order?</h2>
            <p>
              Click on the 'Support' or 'Online <br /> ordering help' section in
              your app to <br /> connect to our customer support <br /> team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
