import React from "react";
import { useParams } from "react-router-dom";
import jobData from "./Careers/jobData.json";
import ContactBanner from "../assets/Contact/ContactBanner.svg";

import CalendarSVG from "../assets/Careers/CareersMainPage/CalendarSVG.svg";
import LocationSVG from "../assets/Careers/CareersMainPage/LocationSVG.svg";
import TimeSVG from "../assets/Careers/CareersMainPage/TimeSVG.svg";

function JobDetails() {
  const { jobTitle } = useParams(); 

  const job = jobData.find(
    (job) => job.title.replace(/\s+/g, "_") === jobTitle 
  );

  if (!job) {
    return <div>Job not found</div>; 
  }

  return (
    <div className="jobDetailsPage">
      <div className="contactBanner">
        <img src={ContactBanner} alt="Contact Banner"></img>
        <div className="contactBannerContent">
          <h1>{job.title}</h1>
        </div>
      </div>
      <div className="jobDetails">
        <div className="jobDetailsContainer">
          <div className="jobPostedDate">
            <img src={CalendarSVG}></img>
            <p>{job.postedDate}</p>
          </div>
          <div className="jobDetailsInfoContainer">
            <div className="careersJobInfo">
              <div className="careersJobInfoText">
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
            <div className="jobDetailsInfo">
              <div className="jobDetailsAboutCompany">
                <h4>About the Company</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem tempus mattis
                  amet urna amet eros. Aliquam pretium quam arcu aenean.
                  Ultrices massa massa arcu amet vel posuere. Mauris fringilla
                  nam vel amet neque quisque non risus pulvinar.Lorem ipsum
                  dolor sit amet consectetur. Lorem tempus mattis amet urna amet
                  eros. Aliquam pretium quam arcu aenean. Ultrices massa massa
                  arcu amet vel posuere. Mauris fringilla nam vel amet neque
                  quisque non risus pulvinar.
                </p>
              </div>
              <div className="jobDescription">
                <h4>Job Description</h4>
                <ul>
                  {job.jobDescription.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
