import React,{Component} from 'react'
import axios from 'axios'

const url = "https://travelgo-api.herokuapp.com/filter_search";
const hotelurl ="https://travelgo-api.herokuapp.com/category";


class hotelOtherFilter extends Component{

    filterBreakfast = (event) =>{
        console.log("event",event.target.value)
      
        let breakfast = event.target.value;
        console.log("breakfast",breakfast)
        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${hotelurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?breakfast=${breakfast}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.hotelotherfilters(res.data)})
    }

    filterHotelRefundable = (event) =>{
       
      
        let refundable = event.target.value;

        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${hotelurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?isRefundable=${refundable}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.hotelotherfilters(res.data)})
    }

    
    filterHotelStar = (event) =>{
       
      
      let star = event.target.value;

      let categoryId = this.props.categoryid;
      let cuisineUrl =""
      if(event.target.value === "")
      {
          cuisineUrl = `${hotelurl}/${categoryId}`
      }
      else{
          cuisineUrl =  `${url}/${categoryId}?stars=${star}`
          console.log(cuisineUrl)
      }
      axios.get(cuisineUrl)
      .then((res) => {this.props.hotelotherfilters(res.data)})
  }

  filterHotelRating = (event) =>{
       
      
    let rating = event.target.value;

    let categoryId = this.props.categoryid;
    let cuisineUrl =""
    if(event.target.value === "")
    {
        cuisineUrl = `${hotelurl}/${categoryId}`
    }
    else{
        cuisineUrl =  `${url}/${categoryId}?rating=${rating}`
        console.log(cuisineUrl)
    }
    axios.get(cuisineUrl)
    .then((res) => {this.props.hotelotherfilters(res.data)})
}
filterHotelFacilities = (event) =>{
       
      
  let facilities = event.target.value;

  let categoryId = this.props.categoryid;
  let cuisineUrl =""
  if(event.target.value === "")
  {
      cuisineUrl = `${hotelurl}/${categoryId}`
  }
  else{
      cuisineUrl =  `${url}/${categoryId}?faclities=${facilities}`
      console.log(cuisineUrl)
  }
  axios.get(cuisineUrl)
  .then((res) => {this.props.hotelotherfilters(res.data)})
}
  
    
    render(){
        return(
            <>
        
               
        <div className="popularfilter" style={{marginLeft:'15%'}}>
          <hr/>
          <br/>
                <h5>Popular Filters</h5>
           
             
              <div className="form-check" onChange={this.filterBreakfast}>
                <input className="form-check-input" type="checkbox" value="Free" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  Free BreakFast
                </label>              
              </div>

              <div className="form-check" onChange={this.filterHotelRefundable}>
                <input className="form-check-input" type="checkbox" value="yes" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                Refundable
                </label>              
              </div>
             
            <br/>
          <div className="airlinefilter"   >
            <h5>Star Category</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="5" id="flexRadioDefault1" onChange={this.filterHotelStar}/>
              <label className="form-check-label" for="flexRadioDefault1">
                5 Star
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="4" id="flexRadioDefault2" onChange={this.filterHotelStar}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  4 Star
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="3" id="flexRadioDefault3" onChange={this.filterHotelStar}/>
                <label className="form-check-label" for="flexRadioDefault3">
                 Others
                </label>              
              </div>
            
               
             </div>
             <hr/>

           <div className="airlinefilter" >
            <h5>User Rating</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="4.5/5" id="flexRadioDefault1" onChange={this.filterHotelRating}/>
              <label className="form-check-label" for="flexRadioDefault1">
              4.5 and above(Excellent)
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="4.0/5" id="flexRadioDefault2" onChange={this.filterHotelRating}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  
              4.0 and above(Very Good)
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="3.5/5" id="flexRadioDefault3" onChange={this.filterHotelRating}/>
                <label className="form-check-label" for="flexRadioDefault3">
                3.5 and above(Good)
                </label>              
              </div>
            
               
             </div>
             <hr/>

             <div className="airlinefilter" >
            <h5>Facilities</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="Swimming" id="flexRadioDefault1" onChange={this.filterHotelFacilities}/>
              <label className="form-check-label" for="flexRadioDefault1">
              Swimming Pool
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Wi-Fi" id="flexRadioDefault2" onChange={this.filterHotelFacilities}/>
                <label className="form-check-label" for="flexRadioDefault2">
              Wi-fi
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Spa" id="flexRadioDefault3" onChange={this.filterHotelFacilities}/>
                <label className="form-check-label" for="flexRadioDefault3">
              Spa
                </label>              
              </div>
              
             </div>

            </div>

            </>
        )
    }
}

export default hotelOtherFilter