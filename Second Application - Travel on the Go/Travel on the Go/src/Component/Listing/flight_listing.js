import React,{Component} from 'react'
import axios from 'axios';

import './flight_listing.css'
import FlightListingDisplay from './flight_listingDisplay';
import Header from '../../Header'
import CostFilter from '../filters/costfilter';
import CuisineFilter from '../filters/cuisinefilter';

const restUrl = "https://travelgo-api.herokuapp.com/category"
const fromurl = "https://travelgo-api.herokuapp.com/fromDestination";
const tourl = "https://travelgo-api.herokuapp.com/toDestination_details/1?from="
const serachurl ="https://travelgo-api.herokuapp.com/flightsearch/1";




class flightListing extends Component{
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
             searcharray5:'',
             searcharray6:'',
             searcharray7:''

        };
    }


    renderFromCity = (data) => {
      if(data){
          return data.map((item) => {
            console.log("data",item)
          
              return(
              <option value={item.city} key={item.city}>{item.city}</option>
              )
          })
      }
   
  }

 

  

  handleFromCity = (event) => {
      let fromdest = event.target.value;
      console.log("fromdest",fromdest)
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
 
 
}

handleChange2 = (event) => {   
   this.setState({searcharray2:event.target.value})
   console.log("from",this.state.searcharray2)
  
 
}
handleChange3 = (event) => {   
   
   this.setState({searcharray3:event.target.value})

  
}
handleChange4 = (event) => {
  
   this.setState({searcharray4:event.target.value})


}
handleChange5 = (event) => {
 
   this.setState({searcharray5:event.target.value})


}
handleChange6 = (event) => {
 
   this.setState({searcharray6:event.target.value})

 
}
handleChange7 = (event) => {

     this.setState({searcharray7:event.target.value})


}

handleSubmit = () => {
 
    console.log("searchdata",this.state.searcharray2)
    
    fetch(`${serachurl}?from=${this.state.searcharray2}&to=${this.state.searcharray3}&passengers=${this.state.searcharray6}`,
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
                  <div className="dropdown">
                      <button className="btn btn-dark dropdown-toggle" type="button" id="triptype" name="triptype" onChange={this.handleChange1} data-bs-toggle="dropdown" aria-expanded="false">
                      TRIP TYPE
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">One way</a></li>
                        <li><a className="dropdown-item" href="#">Round trip</a></li>
                        <li><a className="dropdown-item" href="#">Multi city</a></li>
                      </ul>
                  </div>
                 </div>
                  
                </div>
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select id="from" className="form-select" name="from" onChange={this.handleChange2} aria-label="Example select with button addon">
                        <option >FROM...</option>
                        {this.renderFromCity(this.state.fromcity)}
                      </select>
                     
                    </div>
                  </div>
                </div>
               

                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select  id="to"  className="form-select" name="to" onChange={this.handleChange3} aria-label="Example select with button addon">
                        <option selected>TO...</option>
                        {this.renderFromCity(this.state.fromcity)}
                       
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">
                    <label for="depart" style={{color:'white'}}>DEPART</label>    
                    <input type="date" id="depart" name="depart" onChange={this.handleChange4}/> 
                               
                      
                    </div>
                  </div>
                </div>

              
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">
                    <label for="return" style={{color:'white'}}>RETURN</label>    
                    <input type="date" id="return" name="return"onChange={this.handleChange5}/> 
                               
                      
                    </div>
                  </div>
                </div>
              
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select id="class" name= "class" onChange={this.handleChange6} className="form-select"  aria-label="Example select with button addon">
                        <option selected>PASSENGERS...</option>
                        <option >1Adult</option>
                        <option >2Adult</option>
                        <option >3Adult</option>
                        <option >4Adult</option>
                        <option >2Adult-1child</option>
                        <option >3Adult-1infant</option>
                       
                      </select>
                   
                    </div>
                  </div>
                </div>
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select id="class" name= "class" onChange={this.handleChange7} className="form-select"  aria-label="Example select with button addon">
                        <option selected>CLASS...</option>
                        <option >Business</option>
                        <option >Premium Economy</option>
                        <option >Economy</option>
                        <option >First Class</option>
                       
                      </select>
                   
                    </div>
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
                            <CuisineFilter categoryid={this.props.match.params.category_id}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter  categoryid={this.props.match.params.category_id}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                        <div className="filtercontent">
                            <h3 style={{fontWeight: 'bold',fontFamily:'georgia'}}>Flights available</h3>
                        
                            
                            <FlightListingDisplay listData={this.state.flightsList}/>
                    
                            
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


export default flightListing
