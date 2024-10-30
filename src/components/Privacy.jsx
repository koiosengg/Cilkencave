import React from "react";

function Privacy() {
  return (
    <div className="privacy">
      <div className="contactBanner">
        <div className="contactBannerContent">
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <div className="jobDetails">
        <div className="jobDetailsContainer">
          <div className="privacyHeading">
            <h2>Introduction</h2>
            <p className="privacyPara">
              Cilkencave ("we," "us," or "our") is committed to protecting the
              privacy of our clients, users, and visitors ("you," "your"). This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your personal information when you interact with our
              services related to silicon engineering, system design, artificial
              intelligence (AI), embedded solutions, and automotive solutions.
              <br />
              <br />
              Please read this Privacy Policy carefully to understand our views
              and practices regarding your personal data and how we will treat
              it. By using our services, you agree to the terms of this Privacy
              Policy.
            </p>
          </div>
          <div className="privacyHeading">
            <div className="heading">
              <h2>Information We Collect</h2>
              <p className="privacyPara">
                We may collect and process the following types of information:
              </p>
            </div>
            <div className="privacySubSection">
              <div className="privacySub">
                <h3>A. Personal Information</h3>
                <ul>
                  <li>
                    Contact Information: Name, email address, phone number,
                    mailing address.
                  </li>
                  <li>
                    Professional Information: Job title, company name, industry,
                    and other details related to your professional background.
                  </li>
                </ul>
              </div>
              <div className="privacySub">
                <h3>B. Other Information</h3>
                <ul>
                  <li>
                    Feedback and Inquiries: If you contact us, we may keep
                    records of your correspondence and any feedback or inquiries
                    you provide
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="privacyHeading">
            <div className="heading">
              <h2>How We Use Your Information:</h2>
              <p className="privacyPara">
                We use the collected information for the following purposes:
              </p>
            </div>
            <ul>
              <li>
                Providing Services: To deliver our silicon engineering, system
                design, AI, embedded solutions, and automotive solutions
                services.
              </li>
              <li>
                Customer Support: To respond to your requests, inquiries, and
                support needs.
              </li>
              <li>
                Service Improvement: To analyze trends, usage, and activities to
                enhance and improve our services and technology offerings.
              </li>
            </ul>
          </div>
          <div className="privacyHeading">
            <h2>Data Security</h2>
            <p className="privacyPara">
              We take appropriate security measures to protect against
              unauthorized access, alteration, disclosure, or destruction of
              your personal information. However, please note that no method of
              transmission over the internet or method of electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
          <div className="privacyHeading">
            <h2>Data Retention</h2>
            <p className="privacyPara">
              We retain your information only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required by law. Once your information is no longer needed, we
              will securely delete or anonymize it.
            </p>
          </div>
          <div className="privacyHeading">
            <h2>Your Rights and Choices:</h2>
            <p className="privacyPara">
              You have the right to request: (i) access to your personal data;
              (ii) an electronic copy of your personal data; or (iii) correction
              of your personal data if it is incomplete or inaccurate. These
              rights are not absolute. Where we have obtained your consent for
              the processing of your personal data, you have the right to
              withdraw your consent at any time.
              <br />
              <br /> If you like would to request a copy of your personal data
              or exercise any of your other rights, please email us at
              hr@cilkencave.com
            </p>
          </div>
          <div className="privacyHeading">
            <h2>Changes to This Privacy Policy:</h2>
            <p className="privacyPara">
              We may update this Privacy Policy periodically to reflect changes
              in our practices, technology, or legal obligations. When we make
              changes, we will update the "Last Updated" date and notify you if
              significant changes are made.
            </p>
          </div>
          <div className="privacyHeading privacyContact">
            <h2>Contact Us</h2>
            <p className="privacyPara">
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us at: <br /> Email:{" "}
              <a href="mailto:hr@cilkencave.com" target="_blank">
                hr@cilkencave.com{" "}
              </a>
              <br /> Phone: {" "}
              <a href="tel:7981120625">7981120625</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
