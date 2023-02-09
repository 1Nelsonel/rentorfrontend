import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className='body'>
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
          <h1>Overview</h1>
        </div>
      </div>      
    </div>
  )
}

export default Dashboard
