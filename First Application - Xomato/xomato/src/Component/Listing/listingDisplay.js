import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item.restaurant_id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} className="Image"
                                    alt={item.restaurant_name}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                     
                                    
                                        {
                                          item.mealTypes.map((i)=>
                                         {
                                        <div className="labelDiv">
                                            <span className="label label-primary">
                                                {i.mealtype_name}
                                            </span>&nbsp;
                                           
                                        </div>})
                                        }
                                    
{
                                          item.cuisines.map((i)=>
                                         {
                                        <div className="labelDiv">
                                            <span className="label label-danger">
                                                {i.cuisine_name}
                                            </span>&nbsp;
                                           
                                        </div>})
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
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
        <div id="content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay