import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocationSVG from "../../assets/Careers/CareersMainPage/LocationSVG.svg";
import TimeSVG from "../../assets/Careers/CareersMainPage/TimeSVG.svg";
import jobData from "./jobData.json";
function CareersJob() {
  const [selectedJobType, setSelectedJobType] = useState("View all");

  const handleJobTypeClick = (type) => {
    setSelectedJobType(type);
  };

  const filteredJobs =
    selectedJobType === "View all"
      ? jobData
      : jobData.filter((job) => job.type === selectedJobType);

  return (
    <div className="homeContainer careersJob">
      <div className="homeContainerHeading">
        <p>
          Where Talent Meets
          <br /> Opportunity
        </p>
        <div className="homeContainerHeadingH2">
          <h2>Join Our Team</h2>
        </div>
      </div>
      <div className="careersJobContainer">
        <div className="careersJobHeading">
          <div
            className={`jobTypeOption ${
              selectedJobType === "View all" ? "activeJobTypeOption" : ""
            }`}
            onClick={() => handleJobTypeClick("View all")}
          >
            View all
          </div>
          <div
            className={`jobTypeOption ${
              selectedJobType === "Designer" ? "activeJobTypeOption" : ""
            }`}
            onClick={() => handleJobTypeClick("Designer")}
          >
            Designer
          </div>
          <div
            className={`jobTypeOption ${
              selectedJobType === "Engineer" ? "activeJobTypeOption" : ""
            }`}
            onClick={() => handleJobTypeClick("Engineer")}
          >
            Engineer
          </div>
        </div>

        <div className="careersJobList">
          {filteredJobs.map((job, index) => (
            <div className="careersJobSet" key={index}>
              <div className="careersJobInfo">
                <div className="careersJobInfoText">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
                <div className="careersJobInfoTabContainer">
                  <div className="careersJobInfoTab">Exp: {job.experience}</div>
                  <div className="careersJobInfoTab">
                    <img src={LocationSVG} alt="Location" /> {job.location}
                  </div>
                  <div className="careersJobInfoTab">
                    <img src={TimeSVG} alt="Time" /> {job.jobType}
                  </div>
                </div>
              </div>

              <Link
                to={`/careers/${job.title.replace(/\s+/g, "_")}`}
                className="careersJobLink"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g>
                    <path
                      d="M13.4798 10.8333H3.33398V9.16658H13.4798L8.81315 4.49992L10.0007 3.33325L16.6673 9.99992L10.0007 16.6666L8.81315 15.4999L13.4798 10.8333Z"
                      fill="#4DB122"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareersJob;
