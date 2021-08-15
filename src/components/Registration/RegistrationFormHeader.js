import React from "react";
import "./RgForm.css";

const RegistrationFormHeader = () => {
  return (
    <>
      <div className="parent">
        <div className="one">Limited Time Offer</div>
        <div className="two">
          New User Sign Up Offer
          <br />
          Rent it. Buy it. Get 30% Off
        </div>
        <div className="three">
          Watch for{" "}
          <b
            style={{
              padding: "1px",
              backgroundColor: "#fff",
              color: "#3f51b5"
            }}
          >
            Free
          </b>
          <br />
          10,000+ Movies & TV Shows
        </div>
      </div>
    </>
  );
};

export default RegistrationFormHeader;
