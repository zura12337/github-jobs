import React, { useEffect } from "react";
import Button from "./common/Button";
import { PrimaryText, SecondaryText } from "./common/Text";
import Url from "url-parse";

export default function Job({ getJob, job }) {
  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    getJob(id);
  }, []);

  const redirectToCompanySite = (redirectToCompanySite) => {
    window.location.href = redirectToCompanySite;
  };

  if (job) {
    const company_url = new Url(job.company_url);
    return (
      <div className="container custom-container">
        <div className="upper">
          {job.company_logo && (
            <img src={job.company_logo} className="details-company-logo" />
          )}
          <div className="company-details">
            <PrimaryText className="h2">{job.company}</PrimaryText>
            {company_url && <SecondaryText>{company_url.host}</SecondaryText>}
          </div>
          <Button
            title="Company Site"
            className="company-site-button"
            onClick={() => redirectToCompanySite(job.company_url)}
          />
        </div>
        <div className="job-body">
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="loading">
          <img src={require("../assets/loading.svg")} alt="loading" />
        </div>
      </>
    );
  }
}
