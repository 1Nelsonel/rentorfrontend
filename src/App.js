
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Landlords from './Pages/Landlords/Landlords';
import Locations from './Pages/Locations/Locations';
import Properties from './Pages/Properties/Properties';
import Tenants from './Pages/Tenants/Tenants';


function App() {
  return (
    <div className="">
     
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard/" element={<Dashboard />} />
          <Route path="/Landlords/" element={<Landlords />} />
          <Route path="/Locations/" element={<Locations />} />
          <Route path="/Properties/" element={<Properties />} />
          <Route path="/Tenants/" element={<Tenants />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

