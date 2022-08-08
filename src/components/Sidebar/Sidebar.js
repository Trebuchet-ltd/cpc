import React from "react";
import { Link } from "react-router-dom";
// Import SVG files
import HomeIcon from "../../assets/svg/home.svg";
import PublishIcon from "../../assets/svg/publish.svg";
import UsersIcon from "../../assets/svg/users.svg";
import SongsIcon from "../../assets/svg/songs.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import LogoutIcon from "../../assets/svg/logout.svg";

import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="nav-collapse-button">
          {/* Implement collapse button */}
          <Link to="/">{/* <IoIcons.IoChevronBackOutline /> */}</Link>
        </div>
        <div className="sidebar-nav">
          <Link to="/" className="nav-item">
            <div className="nav-item-content">
              <img src={HomeIcon} alt="" className="nav-icon" />
              Home
            </div>
          </Link>
          <Link to="/publish" className="nav-item">
            <div className="nav-item-content">
              <img src={PublishIcon} alt="" className="nav-icon" />
              Publish
            </div>
          </Link>
          <Link to="/users" className="nav-item">
            <div className="nav-item-content">
              <img src={UsersIcon} alt="" className="nav-icon" />
              Users
            </div>
          </Link>
          <Link to="/songs" className="nav-item">
            <div className="nav-item-content">
              <img src={SongsIcon} alt="" className="nav-icon" />
              Songs
            </div>
          </Link>
          <Link to="/profile" className="nav-item">
            <div className="nav-item-content">
              <img src={ProfileIcon} alt="" className="nav-icon" />
              Profile
            </div>
          </Link>
          <Link to="/logout" className="nav-item">
            <div className="nav-item-content">
              <img src={LogoutIcon} alt="" className="nav-icon" />
              Logout
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
