import React from 'react'
import AdsComponent from '../googleads/AdsComponent';
 
import Image2 from './image/B2.jpg';
import Image3 from './image/B3.jpg';
 
 

function Home() {
  return (
    <div>
 
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={Image2} className="d-block w-100" alt="..."/>
    </div>
    {/* <div className="carousel-item" data-bs-interval="1000">
      <img src={Image2} className="d-block w-100" alt="..."/>
    </div> */}
    <div className="carousel-item" data-bs-interval="5000">
      <img src={Image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


{/* div ads */}
<div className="container">
  
  <AdsComponent dataAdSlot='8453184679'/>
</div>
    </div>
  )
}

export default Home;   