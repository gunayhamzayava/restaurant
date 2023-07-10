import React, { useEffect, useState } from "react";
import "../components/Blog.css";
import { Link, useParams } from "react-router-dom";
import "./Article.css";
import "./Responsive__.css";

function Article() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`http://localhost:3131/all-catogories/${id}`, {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => setData(a));
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <div className="article">
        <img src={data.image} />
        <span>{data.time}</span>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.ques1}</p>
        <p>{data.ques2}</p>
        <p>{data.ques3}</p>
        <p>{data.trends}</p>
        <h5>{data.comments}</h5>
        <ul>
          <li>
            We were able to run the cluster on smaller machines resulting in{" "}
            <b>~75%</b> reduction in individual instances’ <b>CPU</b> and{" "}
            <b>Memory</b> requirements.
          </li>
          <li>
            We observed significant improvement in average and tail latencies.
          </li>
          <li>
            Smaller index per shard also improved <b>scale-up</b> time by{" "}
            <b>~20%</b>.
          </li>
        </ul>
        <div className="social__media">
          <a href="https://www.facebook.com" target="_blank">
            <div className="face">
              <img src="photos/face.avif" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fblog.zomato.com%2Ffrom-the-streets-of-bharat"
            target="_blank"
          >
            <div className="linkedin">
              <img src="photos/linkedin.avif" />
            </div>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <div className="twitter">
              <img src="photos/tvit.avif" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Article;
