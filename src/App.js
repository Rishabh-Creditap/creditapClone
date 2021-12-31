import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import NewForm from './components/Form/NewForm'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicDetails from './Profile/BasicDetails/BasicDetails';
import BankDetails from './Profile/BankDetails/BankDetails';
import AddressDetails from './Profile/AddressDetails/AddressDetails';
import Documents from './Profile/Documents/Documents';
import Profile from './Profile/Profile';

function App() {



  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <BasicDetails />
      <BankDetails />
      <AddressDetails />
      <Documents /> */}
      {/* <Profile /> */}
      
    </div>
  );
}

export default App;
