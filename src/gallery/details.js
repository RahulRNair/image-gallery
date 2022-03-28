/****** Image Details Component ******* */
import { get_image_details } from "../services/gallery";
import { React, useState, useEffect } from "react";
import {
  EyeFill,
  CloudArrowDownFill,
  HandThumbsUpFill,
  PersonCircle,
  ChatFill,
} from "react-bootstrap-icons";
import { useParams, useNavigate } from "react-router-dom";
import Error from "./error";
import Loading from "./loading";

function Details() {
  let params = useParams(); // useParams hook for url parameter
  let history = useNavigate(); // UseNavigate hook for history parameter
  const id = params.id;
  const [records, setrecords] = useState([]);
  const [error, setError] = useState(0);
  useEffect(() => {
    // Once page load call the image details api function and store the data in state
    get_image_details(id)
      .then((res) => {
        setrecords(res.data.hits);
      })
      .catch((err) => {
        setError(1);
      });
  }, []);

  if (records.length > 0) {
    return (
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-8">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img
                      src={records[0]?.largeImageURL}
                      alt={records[0]?.tags}
                    />
                  </div>
                </div>
              </div>
              <div className="details col-md-4">
                <h3 className="product-title">{records[0]?.tags}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <EyeFill />
                  <span className="review-no mx-2">{records[0]?.views}</span>
                  <CloudArrowDownFill />
                  <span className="review-no mx-2">
                    {records[0]?.downloads}
                  </span>
                  <HandThumbsUpFill />
                  <span className="review-no mx-2">{records[0]?.likes}</span>
                </div>
                <p className="product-description">
                  <PersonCircle />
                  <span className="review-no mx-2">{records[0]?.user}</span>
                </p>
                <p className="product-description">
                  <ChatFill />
                  <span className="review-no mx-2">
                    {records[0]?.comments} Comments
                  </span>
                </p>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary mx-2"
                    onClick={() => history(-1)}
                  >
                    Back
                  </button>
                  <a href={records[0]?.pageURL} className="btn btn-secondary" target="_blank" rel="noreferrer">Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return <Error />;
  } else {
    return <Loading />;
  }
}

export default Details;
