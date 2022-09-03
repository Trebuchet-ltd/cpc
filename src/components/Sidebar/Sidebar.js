import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// Import SVG files
import HomeIcon from "../../assets/svg/home.svg";
import PublishIcon from "../../assets/svg/publish.svg";
import UsersIcon from "../../assets/svg/users.svg";
import SongsIcon from "../../assets/svg/songs.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import LogoutIcon from "../../assets/svg/logout.svg";

import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <aside style={{ width: sidebar ? "250px" : "80px" }} className="sidebar">
        <div className="nav-collapse-button">
          {sidebar ? (
            <FaIcons.FaAngleLeft onClick={showSidebar} size={30} />
          ) : (
            <FaIcons.FaAngleRight onClick={showSidebar} size={30} />
          )}

          {/* Implement collapse button */}
          <Link to="/">{/* <IoIcons.IoChevronBackOutline /> */}</Link>
        </div>
        <div className="sidebar-nav">
          <Link to="/" className="nav-item">
            <div
              style={{ marginLeft: sidebar ? "50px" : "30px" }}
              className="nav-item-content"
            >
              <img src={HomeIcon} alt="" className="nav-icon" />
              <div style={{ display: sidebar ? "block" : "none" }}>Home</div>
            </div>
          </Link>
          <Link to="/publish" className="nav-item">
            <div
              style={{ marginLeft: sidebar ? "50px" : "30px" }}
              className="nav-item-content"
            >
              <img src={PublishIcon} alt="" className="nav-icon" />
              <div style={{ display: sidebar ? "block" : "none" }}>Publish</div>
            </div>
          </Link>
          <Link to="/users" className="nav-item">
            <div
              style={{ marginLeft: sidebar ? "50px" : "30px" }}
              className="nav-item-content"
            >
              <img src={UsersIcon} alt="" className="nav-icon" />
              <div style={{ display: sidebar ? "block" : "none" }}>Users</div>
            </div>
          </Link>
          <Link to="/songs" className="nav-item">
            <div
              style={{ marginLeft: sidebar ? "50px" : "30px" }}
              className="nav-item-content"
            >
              <img src={SongsIcon} alt="" className="nav-icon" />
              <div style={{ display: sidebar ? "block" : "none" }}>Songs</div>
            </div>
          </Link>
          <Link to="/profile" className="nav-item">
            <div
              style={{ marginLeft: sidebar ? "50px" : "30px" }}
              className="nav-item-content"
            >
              <img src={ProfileIcon} alt="" className="nav-icon" />
              <div style={{ display: sidebar ? "block" : "none" }}>Profile</div>
            </div>
          </Link>
          <Link to="/logout" className="nav-item">
            <div
              style={{ marginLeft: sidebar ? "50px" : "30px" }}
              className="nav-item-content"
            >
              <img src={LogoutIcon} alt="" className="nav-icon" />
              <div style={{ display: sidebar ? "block" : "none" }}>Logout</div>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
