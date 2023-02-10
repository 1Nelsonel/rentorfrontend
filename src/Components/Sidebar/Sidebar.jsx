// import React, { useState } from "react";

// import { BrowserRouter as Router, Link } from "react-router-dom";
// import overview from "../../Assets/Sidebar/overview.svg";
// import { RiBuilding2Fill, RiLayoutGridFill, RiMenuLine, RiTeamFill, RiUserFill, RiMapPin5Line } from "react-icons/ri";
// import { BiCategory,BiLogOut } from "react-icons/bi";
// import { FiSettings} from "react-icons/fi";

// import "./Sidebar.css";

// const Sidebar = () => {
//   const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
//   const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

//   const handleToggler = () => {
//     if (isExpanded) {
//       setIsExpanded(false);
//       localStorage.setItem('sidebar-collapsed', true);
//       return;
//     }
//     setIsExpanded(true);
//     localStorage.removeItem('sidebar-collapsed');
//     };

//   return (
//     <div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
//       <div className="sidebar-header">
//         <RiMenuLine className="sidebar-icon" onClick={handleToggler} />
//         <h1 className="sidebar-logo">RENTOR</h1>
//       </div>
//       <div className="sidebar-items">
//         <Link to="/Dashboard/" className="item active">
//           <RiLayoutGridFill className="sidebar-icon" />
//           <span className="sidebar-text active">Dashboard</span>
//         </Link>
//         <Link to="/LandLords/" className="item">
//           <RiTeamFill className="sidebar-icon" />
//           <span className="sidebar-text">LandLords</span>
//         </Link>
//         <Link to="/Properties/" className="item">
//           <RiBuilding2Fill className="sidebar-icon" />
//           <span className="sidebar-text">Properties</span>
//         </Link>
//         <Link to="/Locations/" className="item">
//           <RiMapPin5Line className="sidebar-icon" />
//           <span className="sidebar-text">Locations</span>
//         </Link>
//         <div className="item">
//           <BiCategory className="sidebar-icon" />
//           <span className="sidebar-text">Property-Category</span>
//         </div>
//         <Link to="/" className="item">
//           <FiSettings className="sidebar-icon" />
//           <span className="sidebar-text">Settings</span>
//         </Link>
//         <Link to="/" className="item">
//           <BiLogOut className="sidebar-icon" />
//           <span className="sidebar-text">Logout</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { BiLogOut } from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <div className="main-container">
      <CDBSidebar className="sidebar">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Rentor
        </CDBSidebarHeader>
        
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to="/Dashboard/" className="item">
              <CDBSidebarMenuItem icon="th-large">
                <span className="sidebar-text active">Dashboard</span>
              </CDBSidebarMenuItem>
            </Link>

            <Link to="/Landlords/" className="item">
              <CDBSidebarMenuItem icon="users">
                <span className="sidebar-text active">Landlords</span>
              </CDBSidebarMenuItem>
            </Link>

            <Link to="/Properties/" className="item">
              <CDBSidebarMenuItem icon="building">
                <span className="sidebar-text active">Properties</span>
              </CDBSidebarMenuItem>
            </Link>

            <Link to="/Locations/" className="item">
              <CDBSidebarMenuItem icon="map">
                <span className="sidebar-text active">Locations</span>
              </CDBSidebarMenuItem>
            </Link>

            <Link to="/Tenants/" className="item">
              <CDBSidebarMenuItem icon="credit-card">
                <span className="sidebar-text active">Tenants</span>
              </CDBSidebarMenuItem>
            </Link>

            <Link to="/Tenants/" className="item">
              <CDBSidebarMenuItem icon="tools">
                <span className="sidebar-text active">Settings</span>
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "" }}>
        <Link to="/" className="item">
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          <BiLogOut className="sidebar-icon" /> Logout
          </div>
          </Link>
        </CDBSidebarFooter>
      </CDBSidebar>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
