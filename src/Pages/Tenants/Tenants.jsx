import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';

const Tenants = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-sm-3">
          <Sidebar/>
        </div>
        <div className="col-sm-8">
          <h2>Tenant</h2>
        </div>
      </div>
    </div>
  )
}

export default Tenants;
