import React from "react";
import { SecondaryText, PrimaryText } from "./common/Text";

import moment from "moment";

const List = ({ jobs }) => {
  return (
    <div className="jobs">
      {jobs &&
        jobs.map((job) => {
          var offset = moment(job.created_at).fromNow();
          return (
            <div key={job.id} className="job">
              <div className="image">
                {job.company_logo ? (
                  <img
                    src={job.company_logo}
                    alt="logo"
                    className="company-logo"
                  />
                ) : (
                  <div className="company-logo">n/a</div>
                )}
              </div>
              <div className="job-upper mt-4">
                <SecondaryText className="m-1">{offset}</SecondaryText>
                <SecondaryText className="m-1">•</SecondaryText>
                <SecondaryText className="m-1">{job.type}</SecondaryText>
              </div>
              <div className="job-main m-1">
                <PrimaryText className="">{job.title}</PrimaryText>
                <SecondaryText className="">{job.company}</SecondaryText>
              </div>
              <div className="job-footer">
                <SecondaryText className="location-text">
                  {job.location}
                </SecondaryText>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default List;
