import React from 'react';
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HolidayDetails from './holidayDetails';
import './details.css';

      

const HolidayDetailsDisplay = (props) => {


    const renderData = ({listData}) => {
        console.log("listdata",listData)
        if(listData){
          
            if(listData?.length > 0 ){
                return listData?.map((item) => {
                    return(
                       <>
                       <div>
                  <div className ="container" style={{marginTop:'4%'}}>
               
                
               <h3><b>{item.name}</b></h3>
               <div className="col md 6" style={{fontSize:'medium', color:'white',backgroundColor:'black'}}>
                           
               <b>{item.duration}</b>   
          
              </div>  
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                   <div className="carousel-indicators">
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                   </div>
                   <div className="carousel-inner">
                       <div className="carousel-item active">
                       <img src={item.Images[0]} className="d-block w-100" style={{height:'60%',width:'50%'}} alt="..."/>
                       </div>
                       <div className="carousel-item">
                       <img src={item.Images[1]} className="d-block w-100" style={{height:'60%',width:'50%'}}alt="..."/>
                       </div>
                       <div className="carousel-item">
                       <img src={item.Images[2]} className="d-block w-100" style={{height:'60%',width:'50%'}} alt="..."/>
                       </div>
                   </div>
                   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Previous</span>
                   </button>
                   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Next</span>
                   </button>
                   </div>          
                                                       
             </div>
                 
                       <div className="about" style={{color:'black',fontFamily:'georgia',border:'1px solid gray',marginTop:'2%',padding:'3%'}}>
                       <h4><b>Whats in for you</b></h4>
                       <hr/>
                       
                       <h6 style={{fontFamily:'georgia'}}>"{item.desc}"</h6>
                       </div>
             </div>

         <div className='container-fluid'>
             <div className="itinerary" >
           
                   <Tabs style={{backgroundColor:'rgb(201 221 201)',marginBottom:'2%'}}>
                                <TabList>
                                    <Tab style={{backgroundColor:'rgb(16 147 7)',color:'white',width:'25%',paddingLeft:'10%'}}>Day Plan</Tab>
                                    <Tab style={{backgroundColor:'rgb(16 147 7)',color:'white',width:'25%',paddingLeft:'10%'}}>Flights</Tab>
                                    <Tab style={{backgroundColor:'rgb(16 147 7)',color:'white',width:'25%',paddingLeft:'10%'}}>Hotels for Stay</Tab>
                                    <Tab style={{backgroundColor:'rgb(16 147 7)',color:'white',width:'25%',paddingLeft:'10%'}}>Places you'll explore</Tab>
                                </TabList>

                                <TabPanel>
                                <div id="plan" className="tabcontent" style={{marginLeft:'5%', color:'rgb(0 38 26)',paddingBottom:'2%'}}>
                                    <h3 style={{color:'rgb(30 30 66)',fontFamily:'Georgia'}}><b>Day Plan</b></h3>
                                    <hr/>
                                    <br/>
                                    <p> <b>Day 1 ---------------------- {item.Day_plan[0].day_1}</b></p>
                                    <p> <b>Day 2 ---------------------- {item.Day_plan[0].day_2}</b></p>
                                    <p> <b>Day 3 ---------------------- {item.Day_plan[0].day_3}</b></p>
                                    <p> <b>Day 4 ---------------------- {item.Day_plan[0].day_4}</b></p> 
                                </div>
                                </TabPanel>
                                <TabPanel>
                                <div id="flight" className="tabcontent" style={{marginLeft:'5%',color:'rgb(0 38 26)',paddingBottom:'2%'}}>
                       
                                    <h3 style={{color:'rgb(30 30 66)',fontFamily:'Georgia'}}><b>{item.travel_mode}</b></h3>
                                    <hr/>
                                    <br/>
                                    <p><b>Depart Time    ------------------- {item.departtime}</b></p>
                                    <p><b>Return Time    ------------------- {item.returntime}</b></p>
                                    <p><b>Hours of travel------------------- {item.hours}</b></p>
                                </div>
                                </TabPanel>
                                <TabPanel>
                                <div id="hotel" className="tabcontent" style={{marginLeft:'5%',color:'rgb(0 38 26)',paddingBottom:'2%'}}>
                                    <h3 style={{color:'rgb(30 30 66)',fontFamily:'Georgia',display:'flex'}}><b>Hotels for stay</b></h3>
                                    <hr/>
                                    <br/>
                                    <p><b>Hotel      -------------------------------------------- {item.Stay[0].Hotel}</b></p>
                                    <p><b>Room Type  -------------------------------------------- {item.Stay[0].room_type}</b></p>
                                    <p><b>Amenities  -------------------------------------------- {item.Stay[0].ammenites}</b></p>
                                    <br/>
                                    <p><b>Vehicle    -------------------------------------------- {item.Road_type[0].name}</b></p>

                                </div>

                                </TabPanel>
                                <TabPanel>
                                <div id="activity" className="tabcontent" style={{marginLeft:'5%',color:'rgb(0 38 26)',paddingBottom:'2%'}}>
                                    <h3 style={{color:'rgb(30 30 66)',fontFamily:'Georgia'}}><b>Places you'll explore</b></h3>
                                    <hr/>
                                    <br/>
                                    <p><b>{item.Activity}</b></p>
                                </div>

                                </TabPanel>
                                
                    </Tabs>  
              </div>                      

               <div className="card w-50" style={{marginLeft:'5%',marginTop:'2%'}} >
               <div className="card-body">
               <div className="content" style={{padding:'2%'}}>   
               <div className="row">
           
               <div className="col-lg-12 col-md-12">
               
               <h4 className="card-title" style={{color:'Navy',fontFamily:'Georgia'}}><b>Booking Details</b></h4>
               </div>
               </div>
               </div>
               <div className="card-left">
                                               
                   <h5><b>{item.class} class</b></h5>
               </div> 
              
              
           
                 <p className="card-text">
                   <div className="row" style={{padding:'2%'}}>
                       <div className="col md 6" style={{fontSize:'small', color:'white',backgroundColor:'black'}}>
                           
                        <b>{item.guests}</b>   
                   
                       </div>  
                       
                     <div className="col md 6" style={{fontSize:'medium', color:'green'}}>
                       
                     <b>{item.to} | {item.from}</b>   
                  
                     </div>                     
                     
                   </div>
                   <div className="row">
                   <div className="col md 6" style={{fontSize:'large', color:'#cf6e19', float:'right'}}>
                    
                       <b>Rs.{item.price} per Adult</b>
                   </div>
                 
                   <div className="col md 6">
                
                    <Link to={`/reviewdetail_holiday/${item.category_id}?id=${item.id}`}><button className="btn btn-primary" style={{marginLeft:'2%',fontSize:'large',float:'right',textDecoration:'none'}}>Book Now</button> </Link>
  
                   </div>
                   </div>
              
               </p>
              
             </div>
             </div>
             </div>
               

             
                       </>
                    )
                })
            }else{
                return(
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }
        }else{
            return(
                <>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h1>Loading.....</h1>
                </>
                
            )
        }
    }

    return(
        <div id="filtercontent">
            {renderData(props)}
        </div>
    )

    

}

   
export default HolidayDetailsDisplay