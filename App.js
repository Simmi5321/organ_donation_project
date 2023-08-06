
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Myadmin from "./cpanel/admin";
import Logout from './cpanel/logout';
import Resetpass from './cpanel/resetpass';
import ViewDonar from './cpanel/viewdonar';
import DonorRegistration from './donarreg';
import Home from "./home";
import Adminlogin from "./log";
import ReceiverRegistration from './receiverreg';
import ViewReceiver from './cpanel/viewreceiver';
import OrganChart from './cpanel/organchart';
import ViewOrgan from './cpanel/vieworgan';
import Enquiry from './enquiry';
import ViewEnquiry from './cpanel/viewenquiry';
import AboutUs from './about';
import EditOrgan from './cpanel/editorgan';



function App() {
  return<>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/log' element={<Adminlogin/>}></Route>
    <Route path='/admin' element={<Myadmin/>}></Route>
    <Route path='/resetpass' element={<Resetpass/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    <Route path='/donarreg' element={<DonorRegistration/>}></Route>
    <Route path='/viewdonar' element={<ViewDonar/>}></Route>
    <Route path='/receiverreg/:oname' element={<ReceiverRegistration/>}></Route>
    <Route path='/viewreceiver' element={<ViewReceiver/>}></Route>
    <Route path='/organchart' element={<OrganChart/>}></Route>
    <Route path='/vieworgan' element={<ViewOrgan/>}></Route>
    <Route path='/enquiry' element={<Enquiry/>}></Route>
    <Route path='/viewenquiry' element={<ViewEnquiry/>}></Route>
    <Route path='/editorgan/:oid1' element={<EditOrgan/>}></Route>
    <Route path='/about' element={<AboutUs/>}></Route>

    










    


  </Routes>
</Router>
  </>
}

export default App;