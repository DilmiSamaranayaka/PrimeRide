// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehicleManagementTableView from './pages/vehicleManagement';
import VehicleManagementCreate from './components/vehicleManagement/vehicleManagementCreate/vehicleManagementCreate'
import DriverTableView from './pages/driver';
import DriverCreate from './components/driver/driverCreate/driverCreate';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/vehicleManagement" element={<VehicleManagementTableView />} />
          <Route path="/Vehiclemanagementcreate" element={<VehicleManagementCreate />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;