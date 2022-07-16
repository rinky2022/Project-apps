import React from 'react';
import {Link} from 'react-router-dom'
import tripIdea from './tripIdea';
import './tripIdea.css'

const TripIdea_Display = (props) => {

    const renderData = ({listData}) => {

        if(listData){
          
            if(listData?.length > 0 ){
                return listData?.map((item) => {
                    return(
                       <>
                      
                        <div className="container-fluid">                          
                           
                            <div className="card w-50" style={{float:'left'}}>
                              <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                               <div className='card-img-top' >
                                <img src={item.image_gallery} style={{width:'100%',height:'100%'}} />
                                </div>
                                <div className="card-text">
                                    <div className="row">
                                    
                                    <div className="col md 6">
                                        
                                    <b> {item.title} </b>                 
                                    </div>
                                    </div>
                                    
                                
                                </div>
                                <div className="row">
                                
                                <div className="col md 6">
                                                        
                                <i> {item.description}</i>
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

export default TripIdea_Display