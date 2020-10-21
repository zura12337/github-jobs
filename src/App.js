import React, { useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";

import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [jobsError, setJobsError] = useState(false);

  const getJobs = async () => {
    setLoading(true);
    let result;
    if (window.location.search) {
      if (page === 1) {
        setJobs([]);
      }
      const url =
        "https://jobs.github.com/positions.json?&page=" +
        page +
        "&" +
        window.location.search;
      result = await axios.get(url);
    } else {
      result = await axios.get(
        "https://jobs.github.com/positions.json?&page=" + page
      );
    }
    setLoading(false);
    setPage(page + 1);

    if (result.status !== 200) console.log("Error From Server Side");

    if (result.data.length === 0) {
      setJobsError(true);
    } else {
      setJobsError(false);
      if (window.location.search) {
        setJobs(jobs.concat(result.data));
      } else {
        window.scrollTo({ x: 0, y: window.pageYOffset });
        setJobs(jobs.concat(result.data));
      }
    }
  };

  return (
    <>
      <Header handleSubmit={getJobs} />
      <Jobs
        jobs={jobs}
        loading={loading}
        jobsError={jobsError}
        getJobs={getJobs}
      />
    </>
  );
}

export default App;
