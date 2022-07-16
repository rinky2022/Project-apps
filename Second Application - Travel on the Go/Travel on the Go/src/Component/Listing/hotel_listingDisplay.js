import React from 'react';
import {Link} from 'react-router-dom'
import hotelListing from './hotel_listing';
import './flight_listing.css'

const HotelListingDisplay = (props) => {

    const renderData = ({listData}) => {
      
        if(listData){
          
            if(listData?.length > 0 ){
                return listData?.map((item) => {
                    return(
                       <>
                   <div className="card w-100">
                <div className="card-body">
                <div className="card-left" style={{width:'50%', height:'50%',float:'left'}}>
                                                
                    <img src={item.image} style={{width:'100%',height:'70%'}}/>
                </div> 
                <div className="content" style={{padding:'2%'}}>   
                    <div className="row">
                
                    <div className="col-lg-12 col-md-12">
                    
                    <h4 className="card-title"><b>{item.name}</b></h4>
                    </div>
                </div>
                </div>
               
            
                  <p className="card-text">
                    <div className="row" style={{padding:'2%'}}>
                        <div className="col md 12" style={{fontSize:'small', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                            
                         {item.tag}   
                    
                        </div>  
                        
                      <div className="col md 2" style={{fontSize:'small', color:'green'}}>
                        
                      rating: {item.rating} |  stars :{item.stars}   
                   
                      </div>                     
                      
                    </div>
                        <div className="row" style={{padding:'2%'}}>
                        <div className="col md 12" style={{fontSize:'small', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                            
                        {item.breakfast} breakfast  
                    
                        
                        </div>                
                        
                    </div>
                  
                    <br/>
                   
                   
                     <div className="row">
                      <div className="col-md-8" style={{fontSize:'large', color:'#cf6e19', float:'right'}}>
                        <i>Starting from </i>                    
                         ₹ {item.price}
                      </div>
                    
                      <div className="col md 6">

                       <Link to={`/detail_hotel/${item.category_id}?id=${item.id}`}><button className="btn btn-primary" style={{marginLeft:'2%',float:'right',textDecoration:'none'}}>View More</button> </Link>
                  
                  
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

export default HotelListingDisplay