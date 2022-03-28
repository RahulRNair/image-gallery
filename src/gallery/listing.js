/****** Image Listing Component ******* */
import { Pagination,Spinner } from "react-bootstrap";
import { get_images } from "../services/gallery";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Error from "./error";
import Loading from "./loading";

function Listing() {
  const navigate = useNavigate();
  const params = useParams();
  const page = params?.pagenumber ? parseInt(params?.pagenumber) : 1;
  const [records, setrecords] = useState([]);
  const [currentPage, setcurrentPage] = useState(page);
  const [totalrecords, setTotalRecords] = useState(0);
  const [error, setError] = useState(0);
  useEffect(() => {
    get_images(currentPage)
      .then((res) => {
        setTotalRecords(res.data.totalHits);
        setrecords(res.data.hits);
      })
      .catch((err) => {
        setError(1);
      });
  }, []);
  /**
   *
   * @returns : UI content for the pagination
   */
  function renderPagination() {
    let items = [];
    let start = 1;
    let end = 5;
    let maxpage = totalrecords / 20 + 1;
    if (currentPage <= 3) {
      start = 1;
      end = start + 4;
    } else if (currentPage > maxpage - 4) {
      start = maxpage - 4;
      end = maxpage;
    } else {
      start = currentPage - 2;
      end = currentPage + 2;
    }
    for (let number = start; number <= end; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Pagination size="sm" className="justify-content-center">
        {items}
      </Pagination>
    );
  }
  /**
   *
   * @param {*} selectedPage : selected page number from UI
   * once user clicks navigate page to router and set the totalrecords and set the current page record
   * setTotalRecords is using here because if there any content added total records will be increased this is handling using setTotalRecords
   */
  function paginate(selectedPage) {
    setcurrentPage(selectedPage);
    get_images(selectedPage)
      .then((res) => {
        navigate(`/page/${selectedPage}`);
        setTotalRecords(res.data.totalHits);
        setrecords(res.data.hits);
      })
      .catch((err) => {
        setError(1);
      });
  }
  // Once record has data display the content
  if (records.length > 0) {
    return (
      <div className="content">
        <h1>Image Gallery</h1>
        <div className="gallery">
          {records.map((item, index) => {
            let imageUrl = item?.userImageURL
              ? item?.webformatURL
              : item?.previewURL;
            return (
              <figure className="galleryItem" key={index}>
                <Link to={"/details/" + item?.id}>
                  <img src={imageUrl} alt={item?.tags} />
                </Link>
                <figcaption>{item?.tags}</figcaption>
              </figure>
            );
          })}
        </div>
        <div className="margin-bottom-4">{renderPagination()}</div>
      </div>
    );
  } else if (error) {
    // Error Content for listing page if there is any error
    return (
      <Error/>
    );
  } else {
    return (<Loading/>);
  }
}
export default Listing;
