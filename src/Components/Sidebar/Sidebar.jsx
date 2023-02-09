import React from 'react'

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='body'>
        <div className="container">
            <div className="title">
                <h3><span>D</span>Dashboard Kit</h3>
            </div>
            <div className="links">
              
                <ul>
                  <li>Overview</li>
                  <li>Tickets</li>
                  <li>Ideas</li>
                  <li>Contacts</li>
                  <li>Agents</li>
                  <li>Articles</li>
                </ul>
              
            </div>
            <div className="divider"></div>
        </div>      
    </div>
  )
}

export default Sidebar;
