import React from 'react'
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react'
import axios from 'axios'
 import{Link} from 'react-router-dom';
import { valueset } from '../features/update'
import {useDispatch} from 'react-redux'
import './Profile.css';
import Cookies from 'universal-cookie';
import { json } from 'react-router-dom';
 
 
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cook = new Cookies();
 
function Profile() {
  const navigate=useNavigate();
   
  const dispatch =useDispatch();
 
  const [getalldata, setnewalldata] = useState([]);
  const [filterdata, newfilterdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const  updatee = useSelector(state=>state.updatee.value);
  

 
  //delete account

  const del = () =>{
    
    let answer = window.confirm(`${updatee.uname} Are you sure you want to delete this?`);
    if (answer===true) {
      var url = window.location.origin;
      axios.delete(`${url}/api/delete/${updatee.uid}`).then(
      
      res=>{
        
          localStorage.clear();
          cook.remove("auth")
          navigate('/login')
        
      }

    )
      
    } else {
      console.log("no");
      
    }
   
  }






  //logout
  const logout = () =>{
    localStorage.clear();
    cook.remove("auth");
    toast.success("hello");
   
  }
//fuction to get all data mongodb
  const getm =()=>{
    const tt = cook.get("auth")
    const tts = JSON.stringify(tt)
    var url = window.location.origin;
    axios.get(`${url}/api/getdata`, { headers: { "auth": tts } }
    )
      .then(res => {

         
        setnewalldata(res.data);

         
       
      })

  }


  
  //use effect use get data mongo db
  useEffect(() => {

    getm();
    
  
  }, [getalldata&filterdata]);
  


 
  //use effect use filter value find to store use effect
  useEffect(() => {
    
    {
      getalldata.filter(e => {
        if (e.Email ===user.name) {
          dispatch(valueset({uid:e._id,uname:e.Name,
            ublood:e.BloodGroup,udistic:e.Distic,
            uphone:e.PhoneNumber,uage:e.Age}))
          return newfilterdata(e);
          
        }
        else {
           
        }
      })
    }




    
    


  }, [getalldata]);
  
   

   
  return <div>
   
   
   
    <div className="card">
      <div className="card-header  cardhead">
        <h5 className="ws">{"Name  :  "}{updatee.uname}</h5>
      </div>
      <div className="card-body">
        <h6 className="ws">{"Blood Group  : "}{updatee.ublood}</h6>
        <h6 className="ws">{"Distic              : "}{updatee.udistic}</h6>
        <h6 className="ws">{"Phone Numb  : "}{updatee.uphone}</h6>
        <h6 className="ws">{"Age  : "}{updatee.uage}</h6>
        <h1>  </h1>
        {/* submit */}
        <div className="btn-group me-end float-end">
 

        <Link to="/edit" > 
        <input type="submit" className="center btn btn-success"  value="Edit" >
        </input>
        </Link>
             

     <Link to="/login">
              <input type="submit" className="center btn btn-info"  value="Logout"
              onClick={logout}>
              </input>
              <ToastContainer />
              </Link>


         
              <input type="submit" className="center btn btn-danger" value="Delete"  onClick={del}>
              </input>
            
         
        


            </div>
      </div>
    </div>
  </div>

}

export default Profile;