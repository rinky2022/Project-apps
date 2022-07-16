import React,{Component} from 'react'
import axios from 'axios'

const url = "https://travelgo-api.herokuapp.com/filter_class";
const trainurl ="https://travelgo-api.herokuapp.com/category";


class trainOtherFilter extends Component{

    filterAC = (event) =>{
        console.log("event",event.target.value)
      
        let Class = event.target.value;
        console.log("class",Class)
        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${trainurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?class=${Class}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.trainotherfilters(res.data)})
    }

    filterTrainClass = (event) =>{
       
      
        let Class = event.target.value;

        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${trainurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?class=${Class}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.trainotherfilters(res.data)})
    }

    

    render(){
        return(
            <>
        
        <div className="popularfilter" style={{marginLeft:'15%'}}>
          <hr/>
          <br/>
                <h5>Popular Filters</h5>
           
             
              <div className="form-check" onChange={this.filterAC}>
                <input className="form-check-input" type="checkbox" value="3AC" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  3AC
                </label>              
              </div>
            
             
            <br/>
          <div className="airlinefilter"   >
            <h5>Journey Types</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="Executive-Chair" id="flexRadioDefault1" onChange={this.filterTrainClass}/>
              <label className="form-check-label" for="flexRadioDefault1">
                 Executive Chair
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="1AC" id="flexRadioDefault2" onChange={this.filterTrainClass}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  1st class AC
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="2AC" id="flexRadioDefault3" onChange={this.filterTrainClass}/>
                <label className="form-check-label" for="flexRadioDefault3">
                  2 Tier AC
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault"  value="3AC" id="flexRadioDefault4" onChange={this.filterTrainClass}/>
                <label className="form-check-label" for="flexRadioDefault4">
                 3 Tier AC
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Sleeper" id="flexRadioDefault5" onChange={this.filterTrainClass}/>
                <label className="form-check-label" for="flexRadioDefault5">
                  Sleeper
                </label>              
              </div>
           

             </div>
            </div>

            </>
        )
    }
}

export default trainOtherFilter