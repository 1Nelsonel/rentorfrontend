import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
          <div className="conatiner p-3">
            <div className="row">
              <div className="col-sm-3">
                <div className="card p-4">
                  <h5 className="">
                    <span className="p-1 text-primary">2</span>Landloards
                  </h5>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="card p-4">
                  <h5 className=""><span className="p-1 text-primary">2</span>Landloards</h5>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="card p-4">
                  <h5 className=""><span className="p-1 text-primary">2</span>Landloards</h5>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="card p-4">
                  <h5 className=""><span className="p-1 text-primary">2</span>Landloards</h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
