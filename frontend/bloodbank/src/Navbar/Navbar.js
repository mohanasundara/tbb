import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom';
 
 
 

function Navbar() {

  const [showon,showoff] = useState(true)
  return (
    <div>
 

      <nav className="navbar  navbar-expand-lg navbar-light text-light bg-success   ">
        <div >
          <marquee className='text-dark ' scrollamount='5'><a className="navbar-brand text-dark marq" href="#">TAMILNADU BLOOD BANK</a></marquee>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
         onClick={() => showoff(!showon)} >
          
          {showon ?<MenuIcon/>:<CloseIcon/>}
        </button>
        <div className={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'} id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item active">
              <Link to="/home"  className="nav-link psedo " onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>Home</Link>
              
            </li>

           <li className="nav-item">
            <Link to="/blooddonor" className="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>BloodDonor</Link>
            </li>
            <li className="nav-item">
            <Link to="/bloodrecipient" className="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>BloodRecipient</Link>
            </li>


            {/* <li className="nav-item">
            <Link to="/login" className="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>Login</Link>
            </li>   */}


            <li className="nav-item">
            <Link to="/profile" className="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>Profile</Link>
            </li>  

            <li className="nav-item">
            <Link to="/privacy" className="nav-link psedo" onClick={ showon ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}>PrivacyPolicy</Link>
            </li>  

          </ul>
        </div>
      </nav>

<Outlet/>
    </div>
  )
}

export default Navbar;