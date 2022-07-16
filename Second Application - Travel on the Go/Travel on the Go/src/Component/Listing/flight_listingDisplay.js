import React from 'react';
import {Link} from 'react-router-dom'
import flightListing from './flight_listing';
import './flight_listing.css'


const FlightListingDisplay = (props) => {

    const renderData = ({listData}) => {
        console.log("listdata",listData)
        if(listData){
          
            if(listData?.length > 0 ){
                return listData?.map((item) => {
                    return(
                       <>
                         <div className="card w-100" key={item.id}>
                <div className="card-body">
                  <img src={item.image} style={{width:'10%',height:'10%'}}/>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <div className="row">
                     
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
                      
                    </div>
                    <div className="row">
                     
                      <div className="col md 2">
                                             
                        {item.from}
                      </div>
                      <div className="col md 2">
                       {item.Stop}
                      </div>
                      <div className="col md 2">
                        <img/>                        
                        {item.to}
                      </div>
                      <div className="col md 2" style={{fontWeight:'bold',fontSize:'large',color:'navy'}}>
                                              
                        ₹{item.price}
                      </div>
                      
                    </div>
                   
                  </p>
                 
                  <div className="row">
                  <div className="col md 2">
                    <Link to={`/reviewdetail/${item.category_id}?id=${item.id}`}><button class="btn btn-success">Book Ticket</button></Link>
                  
                  
                  </div>
                  <div>
                    <button className="btn btn-outline-primary" type="button"  style={{float:'right',marginRight: '10'}} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      View Flight Details
                    </button>
                
                  </div>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <div className="card w-100">
                    <div className="card-body">
                      <img src={item.image} style={{width:'5%',height:'5%',float:'left'}}/>
                      <h5 className="card-title"style={{marginLeft:'2%'}}>{item.name}</h5>
                      <p className="card-text">
                        <div className="row">
                         
                          <div className="col md 2">
                            
                          {item.departtime}                   
                          </div>
                          <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                            
                          {item.hours} 
                          </div>
                          <div className="col md 2">
                         
                         {item.returntime}                   
                          </div>
                          <div className="col md 2">
                            
                          BAGGAGE              
                          </div>
                          <div className="col md 2">
                            
                          CHECK IN
                          </div>
                          <div className="col md 2">
                         
                          CABIN                 
                          </div>
                          
                        </div>
                        <div className="row">
                         
                          <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                 
                            {item.depart}
                          </div>
                          <div className="col md 2">
                           ---------
                          </div>
                          <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                 
                            {item.return}
                          </div>
                          <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                 
                          {item.baggage}
                          </div>
                          <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                          {item.checkin}
                          </div>
                          <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                
                            {item.cabin}
                          </div>
                          
                        </div>
                        <div className="row">
                          <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                 
                          {item.departTerminal}
                          </div>
                          <div className="col md 2">
                         
                          </div>
                          <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                
                          {item.returnTerminal}
                          </div>
                          <div className="col md 2">
                        
                          </div>
                          <div className="col md 2">
                         
                          </div>
                          <div className="col md 2">
                                                
                         
                          </div>

                        </div>
                        <div className="row">
                        <div className="col md 2" style={{fontSize:'smaller', color:'gray'}}>
                                               
                        {item.from}
                        </div>
                        <div className="col md 2">
                       
                        </div>
                        <div className="col md 2"  style={{fontSize:'smaller', color:'gray'}}>
                                              
                        {item.to}
                        </div>
                        <div className="col md 2">
                      
                        </div>
                        <div className="col md 2">
                       
                        </div>
                        <div className="col md 2">
                                              
                       
                        </div>

                      </div>
                        
                      </p>
                      </div>
                      </div>

                    </div>
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
                    <img src="./images/loader.gif" alt="loader"/>
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

export default FlightListingDisplay