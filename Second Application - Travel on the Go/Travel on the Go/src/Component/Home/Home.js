import React, { Component } from 'react';
import Offers from './Offers';
import TripIdeas from './TripIdeas';
import QuickLinks from './QuickLinks'
import Header from '../../Header';
import '../../Component/Home/Offers';


const Home =  () => {
    return(
        <>
        <Header/>
           
            <Offers/>
            
            <TripIdeas/> 

            <QuickLinks/> 

        </>
    )
}



export default Home