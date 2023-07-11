import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/WhoWeAre.css";
import "./Responsive__.css";
import Carousel from "react-bootstrap/Carousel";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>;
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 800);
};

function WhoWeAre() {
  const [selectedPage, setselectedPage] = useState("whoweare");
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:3131/all-catogories", {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => setData(a));
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="main">
      <div className="image-with-text">
        <div className="text-with-img">
          <h2>Better food for more people</h2>
          <p onClick={handleClick}>scroll for more</p>
        </div>
        <div className="ul__nav">
          <ul>
            <Link to={"/"}>
              <li
                className={selectedPage === "home" ? "active" : ""}
                onClick={() => setselectedPage("home")}
              >
                Home
              </li>
            </Link>
            <Link to={"/who-we-are"}>
              <li
                className={selectedPage === "whoweare" ? "active" : ""}
                onClick={() => setselectedPage("whoweare")}
              >
                Who We Are
              </li>
            </Link>
            <Link to={"/work-with-us"}>
              <li
                className={selectedPage === "workwithus" ? "active" : ""}
                onClick={() => setselectedPage("workwithus")}
              >
                Work With Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="zomato-logo">
          <img src="/photos/zomatologo-removebg-preview.png" />
        </div>
      </div>
      <div className="sliders">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/photos/slide-1.avif"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Assortment</h3>
              <p>
                Driving the force of <span>assortment</span>
              </p>
              <p>
                For over a decade now, we’ve been empowering our customers in
                discovering new tastes and experiences across countries. By
                putting together meticulous information for our customers, we
                enable them to make an informed choice.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/photos/slide-2.avif"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Affordability</h3>
              <p>
                Focusing on <span>affordability</span>
              </p>
              <p>
                The benefits of providing an interesting choice are embodied by
                the success of Zomato Pro. We are leaving no stone unturned when
                it comes to making food more affordable without compromising on
                the profitability of a given restaurant.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/photos/slide-3.avif"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Accessibility</h3>
              <p>
                Boosting <span>accessibility</span> for customers
              </p>
              <p>
                Our delivery service is reaching more and more cities. We are
                actively growing our services - table reservation, Zomato for
                Enterprise and are continuing to power Feeding India.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/photos/slide-4.avif"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Quality</h3>
              <p>
                Improving <span>quality</span> of food
              </p>
              <p>
                We are committed to nurturing a neutral platform and are helping
                food establishments maintain high standards through Hyperpure.
                Food Hygiene Ratings is a coveted mark of quality among our
                restaurant partners.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="whoarewe">
        <div className="whoarewe-text">
          <h1>Who are we?</h1>
          <br />
          <div className="red-line"></div>
          <br />
          <p>
            Launched in 2010, Our technology platform connects customers, <br />{" "}
            restaurant partners and delivery partners, serving their multiple{" "}
            <br /> needs. Customers use our platform to search and discover{" "}
            <br /> restaurants, read and write customer generated reviews and
            view <br /> and upload photos, order food delivery, book a table and
            make <br /> payments while dining-out at restaurants. On the other
            hand, we <br /> provide restaurant partners with industry-specific
            marketing tools <br /> which enable them to engage and acquire
            customers to grow their <br /> business while also providing a
            reliable and efficient last mile <br /> delivery service. We also
            operate a one-stop procurement solution, <br /> Hyperpure, which
            supplies high quality ingredients and kitchen <br /> products to
            restaurant partners. We also provide our delivery <br /> partners
            with transparent and flexible earning opportunities.
          </p>
        </div>
        <div className="whoweare-img">
          <img src="/photos/who-are-we.avif" alt="" />
        </div>
      </div>
      <div className="from-our-blog">
        <div className="form-blog">
          <h3>From our blog</h3>
          <p>
            Explore our blog for insightful articles, personal reflections,
            impactful resources, and ideas that inspire us at Zomato
          </p>
        </div>
        <div className="container_blog">
          {data.slice(0, 3).map((a) => (
            <div className="blog-images" key={a.id}>
              <div className="blog__wwa">
                <Link to={`/blog/${a.id}`}>
                  <img src={a.image} />
                  <br />
                  <span>{a.time}</span>
                  <h4>{a.title}</h4>
                  <p>{a.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="img-collage">
        <div className="header-img">
          <h2>Glimpses of life at Zomato</h2>
        </div>
        <br />

        <div className="row">
          <div className="column">
            <img src="/photos/img-1.avif" />
            <img src="/photos/img-2.avif" />
            <img src="/photos/img-3.avif" />
          </div>
          <div className="column">
            <img src="/photos/img-4.avif" />
            <img src="/photos/img-5.avif" />
            <img src="/photos/img-6.avif" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
