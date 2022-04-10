import './App.css';
import About from './components/Common/About';
import Navbar from './components/Common/Navbar';
import React, { useState } from 'react';
import Contact from './components/Common/Contact';
import Alert from './components/Alert';
import Home from './components/Common/Home';
import Login from './components/Common/Login';
import GenerateID from './components/GenerateID';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // BrowserRouter
} from "react-router-dom";
import Footer from './components/Footer';
import CreateHospital from './components/Create/CreateHospital';
import CreateUser from './components/Create/CreateUser';
import CreateRecord from './components/Create/CreateRecord';
import CreateDoctor from './components/Create/CreateDoctor';
import ViewUser from './components/ViewUser';
import AdminPage from './components/AdminPage';
// import CreateRecord1 from './components/CreateRecord1';
import UserPage from './components/UserPage';
import UserViewPage from './components/UserViewPage';
// import ViewHospital from './components/ViewHospital';
import HospitalList from './components/lists/HospitalList';
import DoctorList from './components/lists/DoctorList';
import UserList from './components/lists/UserList';
import RecordList from './components/lists/RecordList';
import AdminUserList from './components/lists/AdminUserList';
import UserRecord from './components/UserRecord';


export default function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(36 74 104)';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled!", "success");
      // document.title = 'Dark Mode | HIMS';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      showAlert("Light Mode has been enabled!", "success");
      // document.title = 'Light Mode | HIMS';
    }
  }

  return (
    <>
      < Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/" mode={mode} component={Home} />
            <Route exact path="/login" mode={mode} component={Login} />
            <Route exact path="/generate" mode={mode} component={GenerateID} />
            <Route exact path="/about" mode={mode} component={About} />
            <Route exact path="/contact" mode={mode} component={Contact} />
            <Route exact path="/hospital-list" mode={mode} component={HospitalList} />
            <Route exact path="/doctor-list" mode={mode} component={DoctorList} />
            <Route exact path="/user-list" mode={mode} component={UserList} />
            <Route exact path="/record-list" mode={mode} component={RecordList} />
            <Route exact path="/add-hosp/:id" mode={mode} component={CreateHospital} />
            <Route exact path="/add-user/:id" mode={mode} component={CreateUser} />
            <Route exact path="/view-user/:id/:name/:address/:dob" mode={mode} component={ViewUser} />
            <Route exact path="/admin-page" mode={mode} component={AdminPage} />
            <Route exact path="/user-page" mode={mode} component={UserPage} />
            <Route exact path="/admin-user-list" mode={mode} component={AdminUserList} />
            <Route exact path="/add-record/:id" mode={mode} component={CreateRecord} />
            <Route exact path="/user-view-user" mode={mode} component={UserViewPage} />
            {/* <Route exact path="/view-hosp/:id" mode={mode} component={ViewHospital} /> */}
            <Route exact path="/add-doctor/:id" mode={mode} component={CreateDoctor} />
            <Route exact path="/user-record" mode={mode} component={UserRecord} />


          </Switch>
        </div>
        <Footer mode={mode} />
      </ Router>

    </>
  );
}
  {/* <Route exact path="/contact">
              <Contact mode={mode} />
            </Route> */}
            {/* <Route exact path="/">
              <Home mode={mode} />
            </Route> */}
            {/* <Route exact path="/about">
              <About mode={mode} />
            </Route> */}
            {/* <Route exact path="/generate">
              <GenerateID mode={mode} />
            </Route> */}
            {/* <Route exact path="/login">
            <Login mode={mode}/>
          </Route> */}
            {/* <Route exact path="/admin-page">
            <AdminPage mode={mode}/>
          </Route> */}