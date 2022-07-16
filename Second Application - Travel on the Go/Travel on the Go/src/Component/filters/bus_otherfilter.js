import React,{Component} from 'react'
import axios from 'axios'

const url1 = "https://travelgo-api.herokuapp.com/filter_class_hrs";
const url2 = "https://travelgo-api.herokuapp.com/filter";
const busurl ="https://travelgo-api.herokuapp.com/category";


class busOtherFilter extends Component{

    filterClass = (event) =>{
        console.log("event",event.target.value)
      
        let Class = event.target.value;
        console.log("class",Class)
        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${busurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url1}/${categoryId}?class=${Class}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.busotherfilters(res.data)})
    }

    filterBusHrs = (event) =>{
       
      
        let hours = event.target.value;

        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${busurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url1}/${categoryId}?hours=${hours}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.busotherfilters(res.data)})
    }

    render(){
        return(
            <>
        
        <div className="popularfilter" style={{marginLeft:'15%'}}>
          <hr/>
          <br/>
                <h5>Popular Filters</h5>
           
             
              <div className="form-check" onChange={this.filterClass}>
                <input className="form-check-input" type="checkbox" value="AC_sleeper" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  AC_Sleeper
                </label>              
              </div>
              <div className="form-check" onChange={this.filterBusHrs}>
                <input className="form-check-input" type="checkbox" value="6hrs_30min" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  6 hrs
                </label>              
              </div>
             
            <br/>
          <div className="airlinefilter"   >
            <h5>Journey Types</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="AC_sleeper" id="flexRadioDefault1" onChange={this.filterClass}/>
              <label className="form-check-label" for="flexRadioDefault1">
                AC_Sleeper
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Non_AC_sleeper" id="flexRadioDefault2" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault2">
                Non_AC_sleeper
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="AC_semi_sleeper" id="flexRadioDefault3" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault3">
                AC_semi_sleeper
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault"  value="AC_seater" id="flexRadioDefault4" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault4">
                AC_seater
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Non_AC_seater" id="flexRadioDefault5" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault5">
                 Non_AC_seater
                </label>              
              </div>
            
             </div>
            </div>

            </>
        )
    }
}

export default busOtherFilter