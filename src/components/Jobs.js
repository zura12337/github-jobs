import React, { useEffect, useState } from "react";
import List from "./List";

import { animateScroll as scroll } from "react-scroll";
import axios from "axios";
import ScrollToTop from "./common/ScrollToTop";
import Button from "./common/Button";
import Header from "./Header";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [filter, setFilter] = useState(false);

  const getJobs = async () => {
    setLoading(true);
    let result;
    if (search || location || fullTimeOnly) {
      setJobs([]);
      const url =
        "https://jobs.github.com/positions.json?search=" +
        (search ? search : "") +
        ("&full_time=" + fullTimeOnly) +
        "&location=" +
        (location ? location : "");
      result = await axios.get(url);
      setFilter(true);
    } else {
      result = await axios.get(
        "https://jobs.github.com/positions.json?&page=" + page
      );
      setFilter(false);
    }
    setLoading(false);
    setPage(page + 1);

    if (result.status !== 200) console.log("Error From Server Side");

    if (search || location || fullTimeOnly) {
      setJobs(result.data);
    } else {
      window.scrollTo({ x: 0, y: window.pageYOffset });
      setJobs(jobs.concat(result.data));
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading && jobs.length <= 0) {
    return (
      <>
        <Header
          setSearch={setSearch}
          setLocation={setLocation}
          setFullTimeOnly={setFullTimeOnly}
          handleSubmit={getJobs}
        />
        <div className="loading">
          <img src={require("../assets/loading.svg")} alt="loading" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header
          setSearch={setSearch}
          setLocation={setLocation}
          setFullTimeOnly={setFullTimeOnly}
          handleSubmit={getJobs}
        />
        <ScrollToTop />
        <div className="container">
          <List jobs={jobs} />
          {loading && (
            <div className="loading">
              <img src={require("../assets/loading.svg")} alt="loading" />
            </div>
          )}
          {!filter && <Button title="Load More" onClick={getJobs} />}
        </div>
      </>
    );
  }
}
