import React, { Component } from "react";
import { ReactDOM } from "react-router-dom";
import './Offers.css'

class Offers extends Component{
    render(){
        return(
            <>
          <div className="searchCategory" style ={ { backgroundImage: "https://i.ibb.co/yF2MPKr/Travelbackground.jpg"}}>
         
          <div id="heading" >
            <h1>Discover the World</h1>
            <br/>
           <h3 >Create your memorable vacations with us!!</h3>
          </div>
          </div>
              
       
      
        <div id="mainContainer" >
          <div className="container-fluid">

          
          <center>
            <div id="offer" style={{marginTop:'20%'}}>
              <h2 style={{marginTop:'20%'}}> </h2>
            <br/>
              <center>

              <h2 style={{marginTop:'25%'}}> Best Deals and Offers</h2>
   
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://i.ibb.co/XZrzhkW/Offer-flight.png" className="d-block h-50 w-50" alt="flight offers"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/pJ5qTxZ/offer-train.jpg" className="d-block h-50 w-50" alt="flight offers currently unavailable"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/9cfphmw/offer-flight1.jpg" className="d-block h-50 w-50" alt="holiday package offers"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/5vLJKbx/offer-hotel.png" className="d-block h-50 w-50" alt="hotel offers currently unavailable"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/RNWvWfF/offer-holiday.png" className="d-block h-50 w-50" alt="hotel offers currently unavailable"/>
                  </div>
                 
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/bNBrbd8/offer-bus.jpg" className="d-block h-50 w-50" alt="bus booking offers currently unavailable"/>
                  </div>
               
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </center>
            </div>
          </center>
   </div>
   </div>
            </>
        )
    }
}

export default Offers 