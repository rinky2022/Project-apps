import React from 'react';
import {Link} from 'react-router-dom'
import HotelDetails from './hotelDetails';
import './hotelDetails.css'

const HotelDetailsDisplay = (props) => {
  

    const renderData = ({listData}) => {
        console.log("listdata",listData)
        if(listData){
           
          
            if(listData?.length > 0 ){
               
                return listData?.map((item) => {
                   

                    return(
                       <>
                  <div>
            <img src={item.image_gallery} style={{width:'100%',height:'100%', position: 'relative',marginTop:'-9%'}}/>
                <div className = "content" style={{ position: 'absolute', 
                bottom:'0', 
                background: 'rgb(0, 0, 0)',
                background: 'rgba(0, 0, 0, 0.5)', 
                color: '#f1f1f1', 
                width: '100%', 
                padding: '20px}'}}>
                <div className="row">
                <h1>{item.name}</h1>
                </div>
                <div className="row">
                <h5> {item.stars} star hotel with {item.rating} rating from customers </h5>
                </div>
                
                
                </div>
                 <div className="container" key={item.id}>
                    <h6 style={{color:'gray',border:'1px solid gray',marginTop:'2%',padding:'3%'}}>Location: {item.location}</h6>
                    <div className="about" style={{color:'black',fontFamily:'georgia',border:'1px solid gray',marginTop:'2%',padding:'3%'}}>
                    <h4><b>About</b></h4>
                    <hr/>
                
                    <h6 style={{fontFamily:'georgia'}}>{item.desc}</h6>
                    </div>
                </div>
                </div>
                
                <br/>
                    <div className="container">
                        
                        <div className="card w-50" style={{float:'left'}}>
                        <div className="card-body">
                 
                                                
                            <h2 style={{padding:'2%'}}> {item.rooms_category[1].room_type}</h2>
                            
                                <div className="content" style= {{padding:'2%'}}>   
                                    <div className="row">
                                
                                    <div className="col-lg-8 col-md-8">
                                    <img src={item.image_gallery[1]}  style={{width:'100%',height:'100%'}}/>
                                    
                                    </div>
                                
                                </div>
                            
            
                                <div className="card-text">
                                    <div className="row" style={{padding:'2%'}}>
                                        <div className="col md 4" style={{fontSize:'medium',paddingLeft:'2%',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                           
                                        {item.tag}                                       
                                        </div>                                      
                                                           
                                    </div>
                                <div className="row" style={{padding:'2%'}}>
                                    <div className="col md 12" style={{fontSize:'medium',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                        
                                    Breakfast availabilty : {item.rooms_category[1].breakfast_availability}   
                                
                                    
                                    </div>                
                                    
                                </div>
                                <div className="row" style={{padding:'2%'}}>
                                <div className="col md 12" style={{fontSize:'medium',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                    
                                    Refundable : {item.isRefundable}   
                            
                                
                                </div>  
                                          
                                
                                </div>
                                <div className="row" style={{padding:'2%'}}>
                                <div className="col md 12" style={{fontSize:'medium',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                    
                                    Facilities : {item.faclities[0]}  |{item.faclities[1]} |{item.faclities[2]}
                            
                                </div>
                                </div> 
                  
                            <br/>
                   
                   
                     <div className="row">
                      <div className="col-md-4" style={{fontSize:'large', color:'rgb(7 104 173)', float:'right'}}>
                                          
                        <b> Per Night <h2>Rs.{item.rooms_category[1].price} <h6>for {item.guests} Adults </h6></h2></b>
                      </div>
                     
                      <div className="col-md-4" style={{fontSize:'large', color:'rgb(7 104 173)'}}>
                                       
                       You save <b>{item.savings}</b>
                       {console.log("savings",item.savings)}
                      </div>
                    
                      <div className="col md 4">                   
                                        
                      <Link to={`/reviewdetail_hotel/${item.category_id}?id=${item.id}&price=${item.rooms_category[1].price}`} ><button className="btn btn-primary"  style={{marginLeft:'2%',fontSize:'large',float:'right',textDecoration:'none'}} >Book Now</button> </Link>
                      </div>
                      </div>                 
                                                      
               </div>
                 
                </div>
              </div>
              
              </div>
              </div> 

              <div className="container" style={{marginTop:'-3%'}}>
                        
                        <div className="card w-50" >
                        <div className="card-body">
                 
                                                
                            <h2 style={{padding:'2%'}}> {item.rooms_category[0].room_type}</h2>
                            
                                <div className="content" style= {{padding:'2%'}}>   
                                    <div className="row">
                                
                                    <div className="col-lg-8 col-md-8">
                                    <img src={item.image_gallery[0]}  style={{width:'100%',height:'100%'}}/>
                                    
                                    </div>
                                
                                </div>
                            
            
                                <div className="card-text">
                                    <div className="row" style={{padding:'2%'}}>
                                        <div className="col md 4" style={{fontSize:'medium',paddingLeft:'2%',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                           
                                        {item.tag}                                       
                                        </div>                                      
                                                           
                                    </div>
                                <div className="row" style={{padding:'2%'}}>
                                    <div className="col md 12" style={{fontSize:'medium',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                        
                                    Breakfast availabilty : {item.rooms_category[0].breakfast_availability}   
                                
                                    
                                    </div>                
                                    
                                </div>
                                <div className="row" style={{padding:'2%'}}>
                                <div className="col md 12" style={{fontSize:'medium',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                    
                                    Refundable : {item.isRefundable}   
                            
                                
                                </div>                
                                
                                </div>
                                <div className="row" style={{padding:'2%'}}>
                                <div className="col md 12" style={{fontSize:'medium',fontFamily:'georgia', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                                    
                                    Facilities : {item.faclities[0]}  |{item.faclities[1]} |{item.faclities[2]}
                            
                                </div>
                                </div> 
                  
                            <br/>
                   
                   
                     <div className="row">
                      <div className="col-md-4" style={{fontSize:'large', color:'rgb(7 104 173)', float:'right'}}>
                                          
                        <b> Per Night <h2>Rs.{item.rooms_category[0].price} <h6>for {item.guests} Adults </h6></h2></b>
                      </div>
                      <div className="col-md-4" style={{fontSize:'large', color:'rgb(7 104 173)'}}>
                                       
                       You save <b>{item.savings}</b>
                      </div>
                    
                      <div className="col md 4">                   
                                        

                       <Link to={`/reviewdetail_hotel/${item.category_id}?id=${item.id}&price=${item.rooms_category[0].price}`}><button className="btn btn-primary" style={{marginLeft:'2%',fontSize:'large',float:'right',textDecoration:'none'}} >Book Now</button> </Link>
            
                      </div>
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

export default HotelDetailsDisplay