import React from 'react';
import {Link} from 'react-router-dom'
import busListing from './bus_listing';
import './flight_listing.css'

const BusListingDisplay = (props) => {

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
                     
                      <div className="col md 2" style={{fontSize:'small',color:'gray'}}>
                        
                      {item.class} |  seats left :{item.seats}  | window seats: {item.window_seats}                 
                   
                      </div>                     
                      
                    </div>
                    <div className="row">
                        <div className="col md 2" style={{fontSize:'small',color:'gray'}}>
                            
                        {item.safety} | {item.rating}                   
                    
                        </div>
                    </div>
                    <br/>
                    <div className="row" style={{fontSize:'small',color:'black'}}>
                     
                      <div className="col md 2">
                                             
                        {item.departtime}
                      </div>
                      <div className="col md 2">
                       {item.hours}
                      </div>
                      <div className="col md 2">
                                             
                        {item.returntime}
                      </div>
                        <div className="col md 2">
                                                
                      
                        </div>
                        <div className="col md 2">
                     
                        </div>
                        <div className="col md 2">
                                              
                       
                        </div>
                      
                    </div>
                    <div className="row" style={{fontSize:'small',color:'black'}}>
                     
                     <div className="col md 2">
                                            
                       {item.from}
                     </div>
                     <div className="col md 2">
                      
                     </div>
                     <div className="col md 2">
                                            
                       {item.to}
                     </div>
                       <div className="col md 2">
                                               
                     
                       </div>
                       <div className="col md 2">
                    
                       </div>
                       <div className="col md 2">
                                             
                      
                       </div>
                     
                   </div>
                  
                   
                     
                      <div className="col md 2" style={{fontSize:'large', color:'#cf6e19', float:'right'}}>
                        <i>Starting from </i>                    
                        Rs.{item.price}
                      </div>
                      <div className="col md 2">
                      
                      </div>
                      <div className="col md 2">
                      <br/>
                                        
                      <Link to={`/reviewdetail_bus/${item.category_id}?id=${item.id}`}><button className="btn btn-dark">Book Ticket</button> </Link>
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

export default BusListingDisplay