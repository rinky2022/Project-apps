import React,{ Component } from "react";
import { Link  } from "react-router-dom";
import '../../Header.css'
class QuickLinks extends Component{
    render(){
        return(
            <>
             <div id="moreInfo" style={{marginTop:'10%'}}>
          <h5>QUICK LINKS</h5>
          <div id="quicklinks">                
           <Link to={`/flight_listing/1`} target="_blank" >Flight Search</Link>
           <Link to={`/train_listing/2`} target="_blank" >Train Search</Link>
           <Link to={`/bus_listing/3`} target="_blank" >Bus Search</Link>
           <Link to={`/hotel_listing/4`} target="_blank" >Hotel Search</Link>
           <Link to={`/holiday_listing/5`} target="_blank" >Holiday Search</Link>
          </div>
        </div>
        <div id="desc">
          <h5>Booking with Travel on the go</h5>
          <div id="bookings">
            Booking with Travel on the go offers you the best of the deals and cheap tickets at your convenience.
            We provide 24/7 booking service with customized experience at affordable rates. 
          </div>
        </div>

        <div id="desc">
          <h5>About Us</h5>
          <div id="bookings">
            Established on 2022, Travel on the Go offers you the best experience in booking your flights, hotel stays, holidays packages,trains, and buses.
            Brings you the competitive airfares, exclusive discounts and best deals of all the bookings at your fingertips. We also provide you the trip ideas 
            and the most rated destinations to visit.
          </div>
          <hr/>
        <br/>
        </div>
       
       
            </>
        )
    }
}

export default QuickLinks