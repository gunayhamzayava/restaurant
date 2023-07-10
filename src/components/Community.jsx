import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Community() {
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
          <li>
            <Link to={"/blog"}>All Categories</Link>
          </li>
          <li style={{ borderBottom: "1px solid rgb(255,0,45)" }}>
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
        {data.slice(10, 20).map((a) => (
          <>
            <Link to={`/blog/${a.id}`}>
              <div key={a.id} className="blogs">
                <img src={a.image} />
                <span>{a.time}</span>
                <h4>{a.title}</h4>
                <p>{a.description}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Community;
