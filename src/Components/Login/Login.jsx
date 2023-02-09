import React from "react";
import "./Login.css";

import { BrowserRouter as Router,  Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-5">

            <div className="card p-5">
              <h3 className="d-logo text-center p-2 fw-1">
                <Router>
                  <Link to="/Dashboard">D</Link>
                </Router>
                
              </h3>
              <p className="text-center">Dashboard Kit</p>
              <h5 className="text-center p-2">Log In to Dashboard Kit</h5>
              <p className="text-center text-size text-secondary">Enter your email and password below</p>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input type="email" class="form-control" placeholder="email" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control" placeholder="password" />
                </div>

                <button type="submit" class="btn btn-primary text-center form-control">
                  Submit
                </button>

                <p className="pt-4">Don’t have an account? <Router><Link href="#">Sign up</Link></Router></p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
