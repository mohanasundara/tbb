import React from 'react'
import './BloodDonor.css';
import { useState } from 'react'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BloodDonor() {

  

  


  ///get the user value
  const [name, username] = useState("");
  const [age, userage] = useState("");
  const [bloodgroup, userbloodgroup] = useState("");
  const [distic, userdistic] = useState("");
  const [blooddate, userblooddate] = useState("");
  const [phonenumber, userphonenumber] = useState("");
  const [email, useremalil] = useState("");
  const [createpassword, usercreatepassword] = useState("");
  const createdata ={Name:name,Age:age,BloodGroup:bloodgroup,Distic:distic,BloodDate:blooddate,PhoneNumber:phonenumber,
  Email:email,CreatePassword:createpassword}

  // const notify = () => toast("Wow so easy!");
const createfun =(event)=>{
  var url = window.location.origin;
  event.preventDefault();
  axios.post( `${url}/api/register`,createdata)
    .then(res => {
     
     
      
      if (res.data==="success") {
        toast.success("God sent an angel in the form of you. Thank you for this active blood donation")
        
      } else if(res.data==="mail alredy exist"){
        toast.error("This email is already associated with an account.")
      }
     
    } ) 
    .catch(err =>{
      console.log("error data");
    })

}

    
 


  return <div>
    <div className="container w-85 ">
      <div className="card ">
        <div className="card-header cd">“Donating Money Is Great, But Donating Blood Is Even Better.”</div>

        <div className="card-body">
          <form method="post" 
          onSubmit={createfun  }
         
           >
            <ToastContainer/>
            {/*   Name */}
            <div className="input-groups ">
              <label htmlFor="name" className="form-label">Name</label>

              <input type="text "
                id="name"
                name="Name"
                pattern="[A-z a-z]{2,32}"
                className=" form-control w-100"
                placeholder="Enter Your Name"
                onChange={(event) => username(event.target.value)}
                required title="Enter Your Name"></input>

            </div>



            {/*   age */}
            <div className=" input-groups">
              <label htmlFor="age"
                className="form-label" >Age</label>

              <input type="Number"
                name="Age"
                id="age"
                className=" form-control w-100"
                placeholder="Enter Your Age"
                onChange={(event) => userage(event.target.value)}
                required title="Enter Your Age"
              ></input>
            </div>

            {/* Blood Group Selected */}
            <div className="input-groups">
              <label htmlFor="blood" className="form-label"> Blood Group</label>
              <select className=" form-select form-control w-100"
                name="Bloodgroup"
                id="blood"
                placeholder="Enter your Blood Group"
                onChange={(event) => userbloodgroup(event.target.value)}
                required title="Enter Your BloodGroup">

                <option value="">Selecte Your Blood Group</option>
                <option value="A RhD Positive (A+)">A RhD Positive (A+)</option>
                <option value="A RhD Negative (A-)">A RhD Negative (A-)</option>
                <option value="B RhD Positive (B+)">B RhD Positive (B+)</option>
                <option value="B RhD Negative (B-)">B RhD Negative (B-)</option>
                <option value="O RhD Positive (O+)">O RhD Positive (O+)</option>
                <option value="O RhD Negative (O-)">O RhD Negative (O-)</option>
                <option value="AB RhD Nositive (AB+)">AB RhD Positive (AB+)</option>
                <option value="AB RhD Negative (AB-)">AB RhD Negative (AB-)</option>
              </select>
            </div>

            {/* distic */}
            <div className="input-groups">
              <label htmlFor="distic" className="form-label"> Distic</label>
              <select className=" form-select form-control w-100"
                name="Distic"
                id="distic"
                placeholder="Enter your Distic"
                onChange={(event) =>  userdistic(event.target.value)}
                
                required title="Enter Your Distic">

                <option value="">Selecte your Distic</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chengalpattu">Chengalpattu</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kallakurichi">Kallakurichi</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Mayiladuthurai">Mayiladuthurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Ranipet">Ranipet</option>
                <option value="Salem">Salem</option>
                <option value="Sivagangai">Sivagangai</option>
                <option value="Tenkasi">Tenkasi</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thiruvallur">Thiruvallur</option>
                <option value="Thiruvarur">Thiruvarur</option>
                <option value="Thoothukud">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tiruchirappalli">Thirunelveli</option>
                <option value="Tirupathur">Tirupathur</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="The Nilgiris">The Nilgiris</option>
                <option value="Vellore">Vellore</option>
                <option value="Viluppuram">Viluppuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
                <option value="Other">Other</option>


              </select>
            </div>

            {/* Blood Donotion date */}
            <div className="input-groups">
              <label htmlFor="blooddate" className="form-label"> Last Blood Donation</label>
              <select className=" form-select form-control w-100"
                name="BloodDate"
                id="blooddate"
                placeholder="Enter your Blood Group"
                onChange={(event) => userblooddate(event.target.value)}
                required title="Enter Your BloodDate">

                 
                <option value="Never Donated">Never Donated</option>
                <option value="3 Months Finished">3 Months Finished</option>
                <option value="3 Months Not Finished">3 Months Not Finished</option>
                 
              </select>
            </div>


            {/* phone number */}
            <div className="input-groups">
              <label htmlFor="phone" className="form-label" >Phone number</label>
              <input className=" w-100 form-control"
                type="text"
                title="Enter 10 Digit Mobile Number"
                pattern="[0-9]{10}"
                name="Phonenumber"
                id="phone"
                placeholder="Enter your Phone Number"
                onChange={(event) =>   userphonenumber(event.target.value)}
                required></input>
            </div>

            {/* Email */}
            <div className="input-groups">
              <label htmlFor="eamil" className="form-label"> Email</label>
              <input className="w-100 form-control"
                type="email"
                name="Email"
                id="email"
                placeholder="Enter your Email"
                onChange={(event) =>   useremalil(event.target.value)}
                required title="Enter Your Email"></input>
            </div>

            {/* create password */}
            <div className="input-groups">
              <label htmlFor="password" className="form-label">Create Password</label>
              <input className="w-100 form-control"
                type="password"
                name="Password"
                pattern="[0-9]{}"
                id="password"
                placeholder="Create your Password"
                onChange={(event) =>  usercreatepassword(event.target.value)}
                required title="Enter Your Password"></input>
            </div>


            {/*   Gender */}
            {/* <div className="">

              <div className="input-groups row  ">
                <label htmlFor="gender" className="form-label">Gender</label>
                <div class="form-check col-1  ">
                  <div className="container">
                    <input class="form-check-input"
                      type="radio" n
                      ame="Gender"
                      id="female"
                      required></input>
                    <label class="form-check-label" htmlFor="female"> Female</label>

                    <input id="male"
                      class="form-check-input"
                      type="radio"
                      name="Gender"
                      value="Male"  ></input>
                    <label class="form-check-label" htmlFor="male">  Male</label>
                  </div>
                </div>
              </div>
            </div> */}

            {/* submit */}
            <div className="btn-group me-end float-end">
              <input type="reset" className="center btn btn-danger"  ></input>
              <input type="submit" className="center btn btn-success" ></input>
              
            </div>


            {/* submit */}
            <div >
            </div>
          </form>
        </div>
      </div>

    </div>
    </div>
}

export default BloodDonor;