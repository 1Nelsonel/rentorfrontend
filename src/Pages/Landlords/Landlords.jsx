import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Landlords = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
          Landlord
        </div>
      </div>
    </div>
  )
}

export default Landlords
