import React from "react";
import { NavLink, Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// Import SVG files
import HomeIcon from "../../assets/svg/home.svg";
import PublishIcon from "../../assets/svg/publish.svg";
import UsersIcon from "../../assets/svg/users.svg";
import SongsIcon from "../../assets/svg/songs.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import PlaylistIcon from "../../assets/svg/playlist.svg";

import "./Sidebar.css";



function Sidebar() {
  const [sidebar, setSidebar] = React.useState(true);
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
          <Option title="Home" icon={HomeIcon} active={sidebar} link="/"/>
          <Option title="Publish" icon={PublishIcon} active={sidebar} link="/publish"/>
          <Option title="Users" icon={UsersIcon} active={sidebar} link="/users"/>
          <Option title="Songs" icon={SongsIcon} active={sidebar} link="/songs"/>
          <Option title="Playlist" icon={PlaylistIcon} active={sidebar} link="/playlist"/>
          <Option title="Profile" icon={ProfileIcon} active={sidebar} link="/profile"/>
          <Option title="Logout" icon={LogoutIcon} active={sidebar} link="/logout"/>
        </div>
      </aside>
    </>
  );
}

const Option = ({icon, title, active, link}) => {

	return(
		<>
			<NavLink className="nav-item" to={link} >
				<div
					style={{ marginLeft: active ? "50px" : "30px" }}
					className="nav-item-content"
				>
					<img src={icon} alt="" className="nav-icon" />
					<div style={{ display: active ? "block" : "none" }}>{title}</div>
				</div>
          	</NavLink>

		</>
	);
}

export default Sidebar;
