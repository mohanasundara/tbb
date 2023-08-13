
import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { login } from '../features/User';
import {Link} from 'react-router-dom';
import  Cookies, {Cookie} from 'universal-cookie'
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
axios.defaults.withCredentials=true;
const cookies =  new Cookies();

 
function Login() {
  const dispatch =useDispatch();
  const user = useSelector(state => state.user.value);
  const  updatee = useSelector(state=>state.updatee.value);

    const navigate=useNavigate();
    const [email,useremail] = useState("babum");
    const [password,userpassword] = useState("");
    const logdata = {Email:email,Password:password}
    const dname =()=>dispatch(login({name:email}))
    const logfn = (event) => {
        event.preventDefault();
        var url = window.location.origin;
        axios.post( `${url}/api/login`,logdata,{withCredentials:true})
        .then(res => {
          const tokestring = JSON.stringify(res.data)
          
         
         
         navigate("/profile")
         toast.success("success");
         
        } ) 
        .catch(err =>{
          
          toast.error(err.response.data);
        })
          
         
       }
  return (
    <div> 
        <form onSubmit={logfn} >
         
        <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white"  >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email"
                 id="typeEmailX"
                  className="form-control form-control-lg" 
                  onChange={(event)=>useremail(event.target.value)}/>
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" 
                id="typePasswordX" 
                className="form-control form-control-lg" 
                onChange={(event)=>userpassword(event.target.value)}/>
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              

              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={dname}>Login</button>
              <ToastContainer />
              {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div> */}

            </div>

            <div>
              <p className="mb-0">Don't have an account?
              <Link to="/blooddonor" className="nav-link "  >Sign Up</Link>
                
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
    </div>
  )
}

export default Login