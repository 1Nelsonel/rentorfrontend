import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';

const Properties = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
          Properties
        </div>
      </div>
    </div>
  )
}

export default Properties;
