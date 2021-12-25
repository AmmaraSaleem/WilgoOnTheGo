import logo from './logo.svg';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';

import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
// import MasterLayout from './layout/admin/MasterLayout';
import Navbar from './layout/admin/Navbar';
import './assets/admin/css/styles.css'
import './assets/admin/js/scripts';
import MasterLayout from './layout/admin/MasterLayout';
import UserMangement from './components/UserMangement';
import UserRecord from './components/UserRecord';
import DriverManagment from './components/DriverManagement';
import DriverRecord from './components/DriverRecord';
import RidesManagement from './components/RidesManagement';
import RidesRecord from './components/RidesRecord';
import AddUser from './components/AddUser';
import EditedUser from './components/EditedUser';
import FareManagement from './components/FareManagemant';
import ActivateUser from './components/ActivateUser';
// import userMangement from './components/serMangement';
// import Dashboard from './components/admin/Dashboard';
// import Profile from './components/admin/Profile';
const App=()=> {
return (
  <div className="App">

    
      <Routes>
        <Route  exact path="/WilgoOnTheGo" element={<MasterLayout/>}></Route>
        <Route  exact path="/userManagament" element={<UserMangement/>}></Route>
        <Route  exact path="/userRecord" element={<UserRecord/>}></Route>
        <Route  exact path="/EditedUser" element={<EditedUser/>}></Route>
        <Route  exact path="/ActivatedUser" element={<ActivateUser/>}></Route>
        <Route  exact path="/AddUser" element={<AddUser/>}></Route>
        <Route  exact path="/driverManagement" element={<DriverManagment/>}></Route>
        <Route  exact path="/FareMangement" element={<FareManagement/>}></Route>
        <Route  exact path="/driverRecord" element={<DriverRecord/>}></Route>
        <Route  exact path="/ridesManagement" element={<RidesManagement/>}></Route>
        <Route  exact path="/ridesRecord" element={<RidesRecord/>}></Route>
       
       
          
      </Routes>
  
    
  </div>
);

};

  

export default App;
