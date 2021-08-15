import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="heading">Watch</div>
            <div className="footerLink">Speedlight</div>
            <Link to="/movies" style={{ textDecoration: "none" }}>
              <div className="footerLink">Movies</div>
            </Link>
            <Link to="/tv" style={{ textDecoration: "none" }}>
              <div className="footerLink">TV</div>
            </Link>
            <div className="footerLink">Free</div>
          </div>
          <div className="column">
            <div className="heading">My Account</div>
            <div className="footerLink">My Vidu</div>
            <div className="footerLink">Account</div>
            <div className="footerLink">Settings</div>
            <div className="footerLink">Manage Devices</div>
          </div>
          <div className="column">
            <div className="heading">Features</div>
            <div className="footerLink">Links</div>
            <div className="footerLink">FamBy</div>
            <div className="footerLink">Dic to Digital</div>
            <div className="footerLink">InstaWatch</div>
            <div className="footerLink">Movies Anywhere</div>
          </div>
          <div className="column">
            <div className="heading">Help</div>
            <div className="footerLink">About Us</div>
            <div className="footerLink">Devices</div>
            <div className="footerLink">Support</div>
            <div className="footerLink">Contact Us</div>
            <div className="footerLink">Jobs</div>
          </div>
        </div>
      </div>
      <div className="row" style={{ float: "right", display: "inline-flex" }}>
        <LinkedInIcon style={{ color: "#2867B2" }} />
        <FacebookIcon style={{ color: "#3b5998" }} />
        <TwitterIcon style={{ color: "#1DA1F2" }} />
        <YouTubeIcon style={{ color: "#c4302b " }} />
      </div>
    </div>
  );
};

export default Footer;
