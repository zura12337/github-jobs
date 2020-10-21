import React, { useEffect } from "react";
import List from "./List";

import ScrollToTop from "./common/ScrollToTop";
import Button from "./common/Button";
import { PrimaryText } from "./common/Text";
import Search from "./Search";

export default function Jobs({ jobs, loading, getJobs, jobsError }) {
  useEffect(() => {
    getJobs();
  }, []);

  if (loading && jobs.length <= 0) {
    return (
      <>
        <div className="loading">
          <img src={require("../assets/loading.svg")} alt="loading" />
        </div>
      </>
    );
  } else {
    if (jobs.length === 0) {
      return (
        <>
          <PrimaryText className="text-center h1">
            There Are No Jobs
          </PrimaryText>
        </>
      );
    } else {
      return (
        <>
          <ScrollToTop />
          <div className="container">
            <Search />
            <List jobs={jobs} />
            {loading && (
              <div className="loading">
                <img src={require("../assets/loading.svg")} alt="loading" />
              </div>
            )}
            {}
            {jobs.length < 50 || jobsError ? (
              <PrimaryText className="text-center">
                There Are No More Jobs
              </PrimaryText>
            ) : (
              <Button title="Load More" onClick={getJobs} />
            )}
          </div>
        </>
      );
    }
  }
}
