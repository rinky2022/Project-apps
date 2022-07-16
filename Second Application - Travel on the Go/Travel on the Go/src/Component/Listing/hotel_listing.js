import React,{Component} from 'react'
import axios from 'axios';
import './flight_listing.css'
import HotelListingDisplay from './hotel_listingDisplay';
import Header from '../../Header'
import HotelCostFilter from '../filters/hotel_costfilter';
import HotelOtherFilter from '../filters/hotel_otherfilter';

const restUrl = "https://travelgo-api.herokuapp.com/category"
const fromurl = "https://travelgo-api.herokuapp.com/city";
const serachurl ="https://travelgo-api.herokuapp.com/hotelsearch/4";
const tourl = "https://travelgo-api.herokuapp.com/toDestination_details/4?from="




class hotelListing extends Component{
    constructor(props){
        super(props);
        this.state = {
            fromcity:'',
             flightsList: '',
             searchdata:'',
             searcharray1:'',
             searcharray2:'',
             searcharray3:'',
             searcharray4:'',
             searcharray5:''

        };
    }


    renderFromCity = (data) => {
      if(data){
          return data.map((item) => {
        
              return(
              <option value={item.id} key={item.id}>{item.city}</option>
              )
          })
      }
   
  }

  

  handleFromCity = (event) => {
      let fromdest = event.target.value;
      console.log("hotel_holiday_destination",fromdest)
      fetch(`${tourl}${fromdest}`,{method:'GET'})
      .then((res) => res.json())
      .then((data) => {
          this.setState({tocity:data})
      })
  }


  handleToCity = (event) =>{
      let FlightId =event.target.value;
      this.props.history.push(`/details/${FlightId}`)
  }

    setDataPerFilter = (data) => {
      this.setState({flightsList:data})
  }



handleChange1 = (event) => {
    
   this.setState({searcharray1:event.target.value})
   console.log("from",this.state.searcharray1)
 
 
}

handleChange2 = (event) => {   
   this.setState({searcharray2:event.target.value})
   console.log("to",this.state.searcharray2)
  
 
}
handleChange3 = (event) => {   
   
   this.setState({searcharray3:event.target.value})

  
}
handleChange4 = (event) => {
  
   this.setState({searcharray4:event.target.value})


}
handleChange5 = (event) => {
 
   this.setState({searcharray5:event.target.value})
   console.log(this.state.searcharray5)


}

handleSubmit = () => {
 
     
    console.log("searchdata",this.state.searcharray1)
    
    fetch(`${serachurl}?cityid=${this.state.searcharray1}&rooms=${this.state.searcharray4}&guests=${this.state.searcharray5}`,
    {method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({searchdata:data})
    console.log("searchdata",this.state.searchdata)
    if(this.state.searchdata)
    {
      this.setState({flightsList:this.state.searchdata})
    }
  })

}

    render(){
        return(
            <>
            <Header/>
              

          <div className="menu">
          <nav className="navbar  navbar" style={{backgroundColor: 'rgb(6, 6, 36)'}}>
         
            
            <div className="search">
              <div className= "row">
                <div className="col md 4">
                  <a className="navbar-brand" href="#">
                    <img src="../Image/logo.PNG" alt="travel" width="40" height="30" className="d-inline-block align-text-top"/>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="col md 4">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item me-2">
                        <a className="nav-link active" aria-current="page" href="#" style={{fontFamily: 'Impact',color: 'rgb(110, 73, 17)'}}>Travel on the Go</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#" style={{float:'right'}}>Log In</a>
                      </li>
                      </ul>
                    </div>
                  </div>
            
  
              </div>
           

              <div className="row">
              
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select id="from" className="form-select" name="from"  onChange={this.handleChange1} aria-label="Example select with button addon">
                        <option >CITY...</option>
                        {this.renderFromCity(this.state.fromcity)}
                      </select>
                     
                    </div>
                  </div>
                </div>           
             

                 
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">
                    <label for="depart" style={{color:'white'}}>CHECKIN</label>    
                    <input type="date" id="depart" name="depart" onChange={this.handleChange2}/> 
                               
                      
                    </div>
                  </div>
                </div>

                 
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">
                    <label for="depart" style={{color:'white'}}>CHECKOUT</label>    
                    <input type="date" id="depart" name="depart" onChange={this.handleChange3}/> 
                               
                      
                    </div>
                  </div>
                </div>

              
                
                
                <div className="col md 2">
                  <div className="menuitem">
                  <span for="label" className="passengersandclasses" style={{color:'white'}}>ROOMS</span>
                  <input id="passengers" type="text" className="passenger"onChange={this.handleChange4}/>
                  </div>
                </div>
                
                <div className="col md 2">
                  <div className="menuitem">
                  <span for="label" className="passengersandclasses" style={{color:'white'}}>GUESTS</span>
                  <input id="passengers" type="text" className="passenger"onChange={this.handleChange5}/>
                  </div>
                </div>
                
                <div className="col md 2">
                  <div className="menuitem">                    
                    <button type="button" className="btn btn-primary" style={{borderRadius: '40%', fontWeight: 'bold',width:'60%'}} onClick={this.handleSubmit}  >SEARCH </button>                 
                    
                  </div>
                </div>  
                           
             
            
              
              </div>
            </div>
          </nav>
        </div>
         
                    <div className="maincontainer1" >
                        <div className="filter">
                            <center>
                                <h3>Filters</h3>
                            </center>
                            <HotelOtherFilter categoryid={this.props.match.params.category_id}
                            hotelotherfilters={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <HotelCostFilter  categoryid={this.props.match.params.category_id}
                            hotelcostfilters={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                        <div className="filtercontent">
                            <h3 style={{fontWeight: 'bold',fontFamily:'georgia'}}>Hotels, Resorts and more</h3>
                        
                            
                            <HotelListingDisplay listData={this.state.flightsList}/>
                    
                            
                        </div>
                       
                    </div>
              
            </>
        )
    }


    async componentDidMount(){
        let categoryid = this.props.match.params.category_id;
        console.log("catgeoryid",categoryid)
        let response = await axios.get(`${restUrl}/${categoryid}`)
        let fromdata = await axios.get(`${fromurl}`)
       
        
            this.setState({flightsList:response.data,fromcity:fromdata.data})
        

    }


}


export default hotelListing
