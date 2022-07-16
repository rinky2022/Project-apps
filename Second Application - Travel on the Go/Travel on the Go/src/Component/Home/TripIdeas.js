import React,{ Component } from "react"
import { ReactDOM,Link } from "react-router-dom"
import '../../Header.css'
import './Offers.css'

class TripIdeas extends Component{
    render(){
        return(
            <>
            <div className="container-fluid">
<div id="tripDestinations">
  <h2>Trip Ideas - Discover Places and  Plan Your Vacations With Us!</h2>
  <i>Explore top tourist places and plan your next holiday trip with us. Check out places for beach places, hill stations, honeymoon places and many more within your budget to make your holiday memorable.</i>

  <div id="cardContainer">
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card ">
        <img src="https://i.ibb.co/56q9Rfg/hillstations.jpg" className="card-img-top" alt="Hill Stations"/>
        <div className="card-body" >                      
          <h5 className="card-title">Hill Stations</h5>
          <p className="card-text">Discover the nature lover in you by diving deep into the hill stations and create an epic out of the adventure.</p>
          <div id="explore">

          <Link to={`/trip_Ideas/1`}><button className="btn btn-dark">Explore</button> </Link>
               
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card " >
        <img src="https://i.ibb.co/M8gW4P8/beach.jpg" className="card-img-top" alt="Beaches" /> 
        <div className="card-body" >
          <h5 className="card-title">Beaches</h5>
          <p className="card-text">Does Beach sport activities enthrall you? discover pristine beaches with relishing seafood. See for yourself the mesmerizing view.</p>
          <Link to={`/trip_Ideas/2`}><button className="btn btn-dark">Explore</button> </Link>
          </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card">
        <img src="https://i.ibb.co/6yJBbQy/historical-places.jpg" className="card-img-top" alt="Historical_places"/>
        <div className="card-body">                      
          <h5 className="card-title">Historical monuments</h5>
          <p className="card-text">Visit the famous historically significant heritage sites recognised by UNESCO. With Museums, Ancient caricatures.</p>
          <div id="explore">
          <Link to={`/trip_Ideas/3`}><button className="btn btn-dark">Explore</button> </Link>
               
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card">
        <img src="https://i.ibb.co/ZKpyNTT/honeymoon.jpg" className="card-img-top" alt="Honeymoon Destinations"/>
        <div className="card-body">
          <h5 className="card-title">HoneyMoon places</h5>
          <p className="card-text">Cherish your honeymoon to be the best vacation ever! Explore this beautiful destinations having picturesque hills,solitary beaches, relaxing resorts.</p>
       
          <Link to={`/trip_Ideas/4`}><button className="btn btn-dark">Explore</button> </Link>
               
    
        </div>
      </div>
    </div>
 
  
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card">
        <img src="https://i.ibb.co/gj8qT9K/holyplaces.jpg" className="card-img-top" alt="holyplaces"/>
        <div className="card-body">
          <h5 className="card-title">Holy Places</h5>
          <p className="card-text">Take a break from your busy routine and seek divine blessings.</p>
          <div id="explore">
          <Link to={`/trip_Ideas/5`}><button className="btn btn-dark">Explore</button> </Link>
               
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card">
        <img src="https://i.ibb.co/99MTF9C/adventure.jpg" className="card-img-top" alt="Adventure places"/>
        <div className="card-body">
          <h5 className="card-title">Adventure Places</h5>
          <p className="card-text">Explore the adventure sports, offering you camping,rafting,trekking and much more.</p>
          <Link to={`/trip_Ideas/6`}><button className="btn btn-dark">Explore</button> </Link>
               
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card">
        <img src="https://i.ibb.co/68WsFB2/restaurants.jpg" className="card-img-top" alt="Restaurants"/>
        <div className="card-body">
          <h5 className="card-title">Restaurants</h5>
          <p className="card-text">Hungry and want to enjoy the best foods from highly rated restaurants. then this one's for you.</p>
          <Link to={`/trip_Ideas/7`}><button className="btn btn-dark">Explore</button> </Link>
               
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <div className="card">
        <img src="https://i.ibb.co/HFqWkqx/peaceful-places.jpg" className="card-img-top" alt="peaceful_places"/>
        <div className="card-body">
          <h5 className="card-title">Peaceful destinations</h5>
          <p className="card-text">Love serene beauty? spend your me time. Enjoy gifted nature at a closer view. </p>
          <div id="explore">
          <Link to={`/trip_Ideas/8`}><button className="btn btn-dark">Explore</button> </Link>
               
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

            </>
        )
    }
}

export default TripIdeas

