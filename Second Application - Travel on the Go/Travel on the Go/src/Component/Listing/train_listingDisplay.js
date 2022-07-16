import React from 'react';
import {Link} from 'react-router-dom'
import trainListing from './train_listing';
import './flight_listing.css'

const TrainListingDisplay = (props) => {

    const renderData = ({listData}) => {
        
        if(listData){
          
            if(listData?.length > 0 ){
                return listData?.map((item) => {
                    return(
                       <>
                         <div className="card w-100">
                <div className="card-body">
               
                  <h4 className="card-title"><b>{item.name}</b></h4>
                  <p className="card-text">
                    <div className="row">
                     
                      <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                        
                      {item.train_no} | departs on :{item.departs_on}                   
                   
                      </div>
                      
                    </div>
                    <br/>
                    <div className="row" style={{fontSize:'small', color:'black'}}>
                     
                      <div className="col md 2">
                                             
                        {item.departTime}
                      </div>
                      <div className="col md 2">
                       {item.hours}
                      </div>
                      <div className="col md 2">
                                              
                        {item.returntime}
                      </div>
                      
                    </div>
                    <div className="row" style={{fontSize:'small', color:'gary'}}>
                     
                        <div className="col md 2">
                                            
                        {item.departstation}
                        </div>
                        <div className="col md 2">
                         ------------
                        </div>
                        <div className="col md 2">
                                             
                        {item.returnstation}
                        </div>
                    
                  </div>
                  <br/>
                  <div className="row" style={{fontSize:'medium', color:'black',fontWeight:'bold'}}>
                     
                        <div className="col md 2" >
                                            
                        {item.class}
                        </div>
                        <div className="col md 2">
                        Rs.{item.price}
                        </div>
                        <div className="col md 2" style={{color:'green', fontSize:'small'}}>
                                             
                        AVAILABLE {item.seats}
                        </div>
                    
                  </div>

                  <div className="row">
                  <div className="col md 2">
                    <Link to={`/reviewdetail_train/${item.category_id}?id=${item.id}`}><button className="btn btn-success">Book Ticket</button> </Link>
                  
                  
                  </div>
                  </div>
                  </p>
                 
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

export default TrainListingDisplay