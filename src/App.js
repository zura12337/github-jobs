import React, { useEffect, useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

import axios from "axios";
import Job from "./components/Job";

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState();
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
    if (result.status !== 200) console.log("Error From Server Side");
    setLoading(false);
    setPage(page + 1);

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

  const getJob = async (id) => {
    const result = await axios.get(
      "https://jobs.github.com/positions.json?&page=" + page
    );
    if (result.data.status != 200) console.log("Server Error");
    result.data.forEach((job) => {
      if (job.id === id) {
        setJob(job);
      }
    });
  };

  return (
    <>
      <Header handleSubmit={getJobs} />
      <Switch>
        <Route path="/jobs/:id">
          <Job getJob={getJob} job={job} loading={loading} />
        </Route>
        <Route path="/jobs">
          <Jobs
            jobs={jobs}
            loading={loading}
            jobsError={jobsError}
            getJobs={getJobs}
          />
        </Route>
        <Route exact path="/">
          <Jobs
            jobs={jobs}
            loading={loading}
            jobsError={jobsError}
            getJobs={getJobs}
          />
        </Route>
        <Route path="*" exact>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
