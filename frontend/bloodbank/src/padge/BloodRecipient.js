import React from 'react'
import axios from 'axios'
import './BloodRecipient.css'
import {useState,useEffect} from 'react'

function BloodRecipient() {
const [alldata,newdata] = useState([]);

const [bloodgroup,bloodgrouponvalue] = useState ("");
const [distic,disticonvalue] = useState ("");



useEffect(()=>{
  var url = window.location.origin;
 
  axios.get(`${url}/api/recipient`).then(res =>{
     
     
  
    newdata(res.data)
     
  })

},[])

   


return <div>

<div className="container w-85 ">
        <div className="card">
          <div className="card-header card-mainh">

            “The Blood Donor of today may be recipient of tomorrow.”

            {/* Search start */}
            <div className="row">


              {/* bloo group search start */}

              <div className="col-6">
                <select className=" form-select form-control w-100" name="blood" id="blood" 
                placeholder="Enter your Blood Group" onChange={(event)=>bloodgrouponvalue(event.target.value)}
                     >

                  <option value="">Blood Group</option>
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
              {/* bloo group search end */}


              {/* distic search start */}

              <div className="col-6">
                <select className=" form-select form-control w-100" 
                name="distic" id="distic" 
                placeholder="Enter your Blood Distic"
                onChange={(event)=>disticonvalue(event.target.value)}
                    required>

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
              {/* distic group search end */}


            </div>
            {/* Search end */}


          </div>

          <div className="card-body card-b">



            {/* MIDDLE CONTAINER START */}
             {/* cardbody */}
    <div> 
   <h1> {alldata
   .filter(e => {
    const Bs = e.BloodGroup.toLowerCase().includes(bloodgroup.toLowerCase());
    const Ds = e.Distic.toLowerCase().includes(distic.toLowerCase());
    const Bd = Bs && Ds;
     
     try {
      if(Bd){
        return  Bd;
      }
     
      
     } catch (error) {
      return console.log("no records");
      
     }
     
   
     
     
  })
   .map(e=> 
    <div className="container w-100 smap ">

    <div className="card">
      <div className="card-header  cardhead">
        <h5 className="ws">{"Name  :  "}{e.Name}</h5>
      </div>
      <div className="card-body">
        <h6 className="ws">{"Blood Group  : "}{e.BloodGroup}</h6>
        <h6 className="ws">{"Distic              : "}{e.Distic}</h6>
        <h6 className="ws">{"Phone Numb  : "}{e.PhoneNumber}</h6>
        <h6 className="ws">{"Age  : "}{e.Age}</h6>
        <h1>  </h1>
      </div>
    </div>

  </div>
    
    
    )}  
    
    </h1>


    </div>


            {/* //MIDDLE CONTAINER END */}

            {/* data notfound */}
 


          </div>




        </div>

      </div>
       



  </div>
}

export default BloodRecipient;