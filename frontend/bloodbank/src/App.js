 
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter ,Routes,Route}  from 'react-router-dom'
import Home from './padge/Home';
import BloodDonor from './padge/BloodDonor';
import BloodRecipient from './padge/BloodRecipient';
import Profile from './padge/Profile';
import Login from './padge/Login';
import Edit from './update/Edit';
import Protect from './padge/Protect';
 

function App() {
  
  
   
  return    <div  >
      
      {/* <h1>hello redux{user.name}</h1>
      <h1>hello updated{updatee.uname}</h1>
      <h1>hello updated{updatee.uage}</h1> */}
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blooddonor' element={<BloodDonor/>}/>
          <Route path='/bloodrecipient' element={<BloodRecipient/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/edit' element={<Edit/>}/>

          <Route  element={<Protect/>}>
          <Route path='/profile' element={<Profile/>}/>
          </Route>
         
        </Routes>
        </BrowserRouter>
        
    </div>
  
}

export default App;
