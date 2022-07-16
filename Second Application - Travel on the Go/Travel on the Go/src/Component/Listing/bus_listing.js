import React,{Component} from 'react'
import axios from 'axios';

import './flight_listing.css'
import BusListingDisplay from './bus_listingDisplay';
import Header from '../../Header'
import BusCostFilter from '../filters/bus_costfilter';
import BusOtherFilter from '../filters/bus_otherfilter';

const restUrl = "https://travelgo-api.herokuapp.com/category"
const fromurl = "https://travelgo-api.herokuapp.com/fromDestination";
const tourl = "https://travelgo-api.herokuapp.com/toDestination_details/3?from="
const serachurl ="https://travelgo-api.herokuapp.com/bussearch/3";




class busListing extends Component{
    constructor(props){
        super(props);
        this.state = {
            fromcity:'',
             flightsList: '',
             searchdata:'',
             searcharray1:'',
             searcharray2:'',
             searcharray3:''

        };
    }


    renderFromCity = (data) => {
      if(data){
          return data.map((item) => {
            //console.log("data",item)
          
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
   console.log("from",event.target.value)
 
 
}

handleChange2 = (event) => {   
   this.setState({searcharray2:event.target.value})
   console.log("to",this.state.searcharray2)
  
 
}
handleChange3 = (event) => {   
   
   this.setState({searcharray3:event.target.value})

  
}


handleSubmit = () => {

     
    console.log("searcharray1",this.state.searcharray1)
    
    console.log("searcharray2",this.state.searcharray2)
    
    console.log("searcharray3",this.state.searcharray3)
    
    fetch(`${serachurl}?from=${this.state.searcharray1}&to=${this.state.searcharray2}&class=${this.state.searcharray5}`,
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
                      <select id="from" className="form-select" name="from" onChange={this.handleChange1} aria-label="Example select with button addon">
                        <option >FROM...</option>
                        {this.renderFromCity(this.state.fromcity)}
                      </select>
                     
                    </div>
                  </div>
                </div>
               

                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select  id="to"  className="form-select" name="to" onChange={this.handleChange2} aria-label="Example select with button addon">
                        <option selected>TO...</option>
                        {this.renderFromCity(this.state.fromcity)}
                       
                      </select>
                    </div>
                  </div>
                </div>

               
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">
                    <label for="depart" style={{color:'white'}}>TRAVEL DATE</label>    
                    <input type="date" id="depart" name="depart" onChange={this.handleChange3}/> 
                               
                      
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
                            <BusOtherFilter categoryid={this.props.match.params.category_id}
                            busotherfilters={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <BusCostFilter  categoryid={this.props.match.params.category_id}
                            buscostfilters={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                        <div className="filtercontent">
                            <h3 style={{fontWeight: 'bold',fontFamily:'georgia'}}>Buses available</h3>
                        
                            
                            <BusListingDisplay listData={this.state.flightsList}/>
                    
                            
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


export default busListing
