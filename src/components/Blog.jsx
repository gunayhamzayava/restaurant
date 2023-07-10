import React, { useEffect, useState } from "react";
import "./Blog.css";
import "./Responsive__.css";
import { Link, useParams } from "react-router-dom";

function Blog() {
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
    <div className="mains">
      <div className="zomato-header-img">
        <img src="photos/blog.webp" />
        <ul>
          <li style={{ borderBottom: "1px solid rgb(255,0,45)" }}>
            <Link to={"/blog"}>All Categories</Link>
          </li>
          <li>
            <Link to={"/community"}>Community</Link>
          </li>
          <li>
            <Link to={"/company"}>Company</Link>
          </li>
          <li>
            <Link to={"/culture"}>Culture</Link>
          </li>
          <li>
            <Link to={"/technology"}>Technology</Link>
          </li>
        </ul>
      </div>
      <div className="blog-map">
        {data.map((a) => (
          <>
            <Link to={`/blog/${a.id}`}>
              <div key={a.id} className="blogs">
                <img src={a.image} />
                <span>{a.time}</span>
                <h4>{a.title}</h4>
                <p>{a.description}</p>
                {/* <h6>{a.content}</h6> */}
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Blog;
