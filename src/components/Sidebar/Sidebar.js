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
  const [state, setState] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let options = [
    {title: "Home", icon: HomeIcon, link: "/"},
    {title: "Publish", icon: PublishIcon, link: "/publish"},
    {title: "Users", icon: UsersIcon, link: "/users"},
    {title: "Songs", icon: SongsIcon, link: "/songs"},
    {title: "Playlist", icon: PlaylistIcon, link: "/playlist"},
    {title: "Profile", icon: ProfileIcon, link: "/profile"},
    {title: "Logout", icon: LogoutIcon, link: "/logout"},
  ];

  return (

    <>
      <aside className="sidebar">
        <div className="nav-collapse-button">
          {sidebar ? (
            <FaIcons.FaAngleLeft onClick={showSidebar} size={30} />
          ) : (
            <FaIcons.FaAngleRight onClick={showSidebar} size={30} />
          )}

          {/* Implement collapse button */}
          <Link to="/">{/* <IoIcons.IoChevronBackOutline /> */}</Link>
        </div>
        <div className="sidebar-nav" style={{ width: sidebar ? "250px" : "80px" }}>
          {
            options.map((option, index) => (
              <Option 
                  key={index}
                  title={option.title} 
                  icon={option.icon} 
                  link={option.link} 
                  active={sidebar} 
                  state={state} 
                  setState={setState}
                  id={index}/>
            ))
          }

        </div>
      </aside>
    </>
  );
}

const Option = ({icon, title, active, link, state, setState, id}) => {



	return(
		<>
			<NavLink onClick={(e) => setState(e.target.id)} style={{backgroundColor: state == id ? "var(--surface)" : ""}} className="nav-item" id={id} to={link} >
				<div
					style={{ marginLeft: active ? "50px" : "30px" }}
					className="nav-item-content p-none"
				>
					<img src={icon} alt="" className="nav-icon" />
					<div style={{ display: active ? "block" : "none" }}>{title}</div>
				</div>
          	</NavLink>

		</>
	);
}

export default Sidebar;
