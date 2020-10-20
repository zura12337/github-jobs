import React, { useEffect, useState } from "react";
import List from "./List";

import { animateScroll as scroll } from "react-scroll";
import axios from "axios";
import ScrollToTop from "./common/ScrollToTop";
import Button from "./common/Button";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [yPos, setYPos] = useState(0);

  const getJobs = async () => {
    setLoading(true);
    const result = await axios.get(
      "https://jobs.github.com/positions.json?&page=" + page
    );
    setLoading(false);
    setPage(page + 1);

    if (result.status !== 200) console.log("Error From Server Side");

    window.scrollTo({ x: 0, y: window.pageYOffset });
    setJobs(jobs.concat(result.data));
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading && jobs.length <= 0) {
    return (
      <div className="loading">
        <img src={require("../assets/loading.svg")} alt="loading" />
      </div>
    );
  } else {
    return (
      <>
        <ScrollToTop />
        <div className="container">
          <List jobs={jobs} />
          {loading && (
            <div className="loading">
              <img src={require("../assets/loading.svg")} alt="loading" />
            </div>
          )}
          <Button title="Load More" onClick={getJobs} />
        </div>
      </>
    );
  }
}
