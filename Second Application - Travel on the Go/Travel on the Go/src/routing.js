import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from './Footer';
import Home from './Component/Home/Home'

import Details from './Component/Details/restDetails'
import trainDetails from './Component/Details/trainDetails'
import busDetails from './Component/Details/busDetails'
import flightListing from './Component/Listing/flight_listing';
import trainListing from './Component/Listing/train_listing';
import busListing from './Component/Listing/bus_listing';
import hotelListing from './Component/Listing/hotel_listing';
import HotelDetails from './Component/Details/hotelDetails';
import TripIdeas from './Component/TripIdeas/tripIdea';
import HotelReviewDetails from './Component/Details/hotel_reviewDetails';
import holidayListing from './Component/Listing/holiday_listing';
import HolidayDetails from './Component/Details/holidayDetails';
import HolidayReviewDetails from './Component/Details/holiday_reviewDetails';
import Login from './Component/login/login';
import Register from './Component/login/register'
import PlaceOder from './Component/bookings/placeOrder';
import ViewOrders from './Component/bookings/viewOrder';

const Router = () =>{
    return (
        <BrowserRouter>
        <div>
            
            <Route exact path ="/" component= {Home} />
            <Route path="/flight_listing/:category_id" component={flightListing}/>
            <Route path="/train_listing/:category_id" component={trainListing}/>
            <Route path="/bus_listing/:category_id" component={busListing}/>
            <Route path="/hotel_listing/:category_id" component={hotelListing}/>
            <Route path="/reviewdetail/:category_id" component={Details}/>
            <Route path="/reviewdetail_train/:category_id" component={trainDetails}/>
            <Route path="/reviewdetail_bus/:category_id" component={busDetails}/>
            <Route path="/detail_hotel/:category_id" component={HotelDetails}/>
            <Route path="/reviewdetail_hotel/:category_id" component={HotelReviewDetails}/>
            <Route path="/reviewdetail_holiday/:category_id" component={HolidayReviewDetails}/>
            <Route path="/holiday_listing/:category_id" component={holidayListing}/>
            <Route path="/detail_holiday/:category_id" component={HolidayDetails}/>
            <Route path="/trip_Ideas/:type" component={TripIdeas}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/viewBooking" component={ViewOrders}/>
            <Route path="/placeOrder/:categoryid" component={PlaceOder}/>
          
            
           
        </div>
        </BrowserRouter>
    )
}

export default Router