// Import necessary dependencies and styles
import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../hooks/useAuth";
import "./LeafTrackForm.scss";

// LeafTrackForm component
export function LeafTrackForm() {
  // Access user authentication status
  const auth = useAuth();

  return (
    // Form container
    <div className="form">
      <div className="form__container">
        <div className="form">
          {/* Form title */}
          <h1>Get monitored</h1>

          {/* Main form */}
          <form className="form-form">
            {/* Container for form elements */}
            <div className="form-form__container">
              {/* Public Address Information Box */}
              <div className="form-form-box">
                <div className="form-form-box__container">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="form-form-box__exclamation"
                  />
                  <div className="form-form-box__head">
                    {/* Display Public Address */}
                    <p>Public Address</p>
                    <p style={{ color: "#69a6ce" }}>
                      {auth.user.walletAddress}
                    </p>
                  </div>
                </div>
                <p>
                  {/* Public Address Information */}
                  To improve your privacy, we recommend using an address which
                  is already public or a new one seeded through tornado.cash.
                </p>
              </div>

              {/* Advice Box */}
              <div className="form-form-box" style={{ marginBottom: "2rem" }}>
                <div className="form-form-box__container">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="form-form-box__exclamation"
                  />
                  <div className="form-form-box__head">
                    {/* Advice Title */}
                    <p>Advice</p>
                  </div>
                </div>
                <p>
                  {/* Advice Information */}
                  Submissions are final and cannot be edited. Be sure to follow
                  all submission rules to not lose your deposit.
                </p>
              </div>

              {/* Input Fields */}
              <div>
                <span>
                  <input
                    placeholder="Name of the reserve manager"
                    style={{ background: "transparent" }}
                  />
                </span>
                <span>
                  <input
                    placeholder="Name of the nature reserve"
                    style={{ background: "transparent" }}
                  />
                </span>
                <span>
                  <input
                    placeholder="Email address"
                    style={{ background: "transparent" }}
                  />
                </span>
                <span>
                  <input
                    placeholder="Contact number"
                    style={{ background: "transparent" }}
                  />
                </span>
                <span>
                  <input
                    placeholder="Mailing address"
                    style={{ background: "transparent" }}
                  />
                </span>
                <span>
                  <input
                    placeholder="Project Name"
                    style={{ background: "transparent" }}
                  />
                </span>
                <span>
                  <textarea
                    placeholder="Any additional notes or comments."
                    style={{ background: "transparent" }}
                  />
                </span>
              </div>

              {/* Reserve Layout */}
              <span>
                <p>Reserve Layout</p>
                <div className="form-form-box-logo">
                  <div className="form-form-box-logo__container">
                    <div className="form-form-box-logo__head">
                      {/* Information about the maximum size and allowed file types */}
                      <p>{"(Max Size: 2 MB | *.jpg, *.jpeg, *.png)"}</p>
                    </div>
                  </div>
                  {/* Upload Button */}
                  <div className="form-form-box__upload">
                    <label htmlFor="inputTag">
                      <input id="inputTag" type="file" />
                    </label>
                  </div>
                </div>
              </span>

              {/* Submission Button */}
              <div className="form-form__create">
                <button>Submit</button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
