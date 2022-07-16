import React from 'react';
import {Link} from 'react-router-dom'
import holidayListing from './holiday_listing';
import './holiday_listing.css'

const HolidayListingDisplay = (props) => {

    const renderData = ({listData}) => {

        if(listData){
          
            if(listData?.length > 0 ){
                return listData?.map((item) => {
                    return(
                       <>          
          
                <div className ="container" style={{paddingTop:'2%'}}>
               
               <div className="card w-100 mx-3" style={{float:'left'}} >
               <div className="card-body"  >
               <div className="content" style={{padding:'2%'}}>   
               <div className="row">
           
               <div className="col-lg-12 col-md-12">
               
               <h4 className="card-title"><b>{item.name}</b></h4>
               </div>
               </div>
               </div>
               <div className="card-left" style={{width:'70%', height:'90%',float:'left'}}>
                                               
                   <img src={item.Images} style={{width:'100%',height:'70%'}}/>
               </div> 
              
              
           
                 <p className="card-text">
                   <div className="row" style={{padding:'2%'}}>
                       <div className="col md 12" style={{fontSize:'small', color:'white',backgroundColor:'black'}}>
                           
                        <b>{item.duration}</b>   
                   
                       </div>  
                       
                     <div className="col md 2" style={{fontSize:'small' ,color:'green'}}>
                       
                     <b>{item.from} | {item.to}</b>   
                  
                     </div>                     
                     
                   </div>
                       <div className="row" style={{padding:'2%'}}>
                       <div className="col md 12" style={{fontSize:'small', color:'black',backgroundColor:'rgb(223 219 219)'}}>
                           
                       <b>{item.travel_mode}  </b> 
                   
                       
                       </div>                
                       
                   </div>
                 
                   <br/>
                  
                  
                    <div className="row">
                     <div className="col-md-8" style={{fontSize:'large', color:'#cf6e19', float:'right'}}>
                       <i>Starting from </i>                    
                         <b>Rs.{item.price}</b>
                     </div>
                   
                     <div className="col md 6">
                   
                                       
                     <Link to={`/detail_holiday/${item.category_id}?id=${item.id}`}><button className="btn btn-primary" style={{marginLeft:'2%',float:'right',textDecoration:'none'}}>View More</button> </Link>
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
        <div id="filtercontent1">
            {renderData(props)}
        </div>
    )

}

export default HolidayListingDisplay