import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import Header from '../../Header';



const reviewurl ="https://travelgo-api.herokuapp.com/reviewdetail/2?id="

class trainDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:'',
            tname:'',
            travellercount:1
        }
    }

    handleChange =() =>
    { 
                
           if(this.state.reviewdetails.seats !=1)
           {
            this.state.travellercount = Number(this.state. travellercount) + Number(window.prompt("HOW MANY TRAVELLERS YOU WANT TO ADD ?Please note : traveller count cannot exceed available seat count"))
            window.alert(this.state.travellercount)
            if(this.state. travellercount <= this.state.reviewdetails.seats )
            {
            this.state.total = this.state. travellercount*this.state.reviewdetails.price
            this.setState({total:this.state.travellercount  * this.state.reviewdetails.price+100+45})
          

            }
            else{
                window.alert("Please note : traveller count cannot exceed available seat count")
                this.state.travellercount =1
                
            }
           }
           else{
               window.alert("seat addition currently unavailable")
           }

    }
 
  
    render(){
        let {reviewdetails}= this.state;
        console.log("deatils",reviewdetails)
        console.log("deatilsprice",reviewdetails.price)
        sessionStorage.setItem('totalprice',this.state.total)
        let totalPrice = sessionStorage.getItem('totalprice')
        console.log("totalvalue",totalPrice)
        sessionStorage.setItem("ticketname",this.state.tname)
    
        return(
            <>
            <Header/>
                <div className="maincontainer3">  
                        <div className="heading3">
                        
                            <h2 style={{marginLeft:'5%',paddingTop:'4%'}}><b>Review your booking</b></h2>
                        
                        </div>
                       
                      
                        <div className="filter3">
                      
                         <h4><b>Fare Summary</b></h4>
                        <br/>
                        <div id="fare">

                        <div className="row">
                            <div className="col md 2">
                            Base Fares 
                            
                            </div>
                            <div className="col md 2">
                            Rs.{this.state.travellercount * reviewdetails.price}
                            
                            </div>              
                                        
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col md 2">
                                Catering service charge 
                            
                            </div>
                            <div className="col md 2">
                                Rs. 100
                                
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                        <div className="col md 2">
                                Tax
                        </div>
                            <div className="col md 2">
                            Rs. 45      
                            </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col md 2">
                                Total Amount
                            
                            </div>
                            <div className="col md 2">
                                Rs.{
                                    
                                    this.state.total = this.state.travellercount * reviewdetails.price+100+45
                                    
                                }
                              
                            </div>
                            </div>
                            </div>     
                      
                            </div>                 
                       
                        </div>
                        
                    

            <div className="filtercontent3" style={{marginTop:'0%'}}>
    
              
              <div id="display3">
                     <div className="card w-100">
                        <div className="card-body">
                           
                         <hr/>
                        <h4 className="card-title"><b>{reviewdetails.name}</b></h4>
                          <h6 style={{float:'right'}}><b>{reviewdetails.class} </b></h6>
                          <p className="card-text">
                          
                                <div className="row">
                                    
                              
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                        
                                  {reviewdetails.train_no} | departs on :{reviewdetails.departs_on}                   
                     
                                              
                                </div>
                               
                                </div>
                             <br/>
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.departTime}                   
                             ---
                              {reviewdetails.departstation} | {reviewdetails.from}
                           
                             
                              
                            </div>
                            </div>
                            
                            
                            
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.returnTime}                   
                             
                                ---
                              {reviewdetails.returnstation} |{reviewdetails.to}
                           
                             
                              
                            </div>

                            <div className="col md 2">                       
                           
                                                          
                            </div>
                            <div className="col md 2">                       
                           
                              <button className="btn btn-danger" onClick={this.handleChange}>Add travellers</button>                            
                            </div>
                            </div>
                          </p>
                         
                          <div className="row">
                          <div className="col md 2">
                          < Link to={`/placeOrder/${reviewdetails.category_id}?id=${reviewdetails.id}`}><button className="btn btn-primary" style={{marginLeft:'2%',fontSize:'large',float:'right',textDecoration:'none'}} >   Proceed to payment</button> </Link>
  
                          </div>
                          <div>
                          
                         
                          </div>
                          </div>
                         
                           
                            <div className="card w-100" style={{backgroundColor:'rgb(239 230 230)'}}>
                            <div className="card-body">
                                 <p className="card-text">
                                <div className="row">
                                 
                                  <div className="col md 2">
                                    
                                  {reviewdetails.departTime}                   
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                    
                                  {reviewdetails.hours} 
                                  </div>
                                  <div className="col md 2">
                                 
                                 {reviewdetails.returnTime}                   
                                  </div>
                                  
                                  <div className="col md 2">
                                    
                                  Seats Available
                                  </div>
                                  <div className="col md 2">
                                 
                                  Depart                
                                  </div>
                                  
                                </div>
                                <div className="row">
                                 
                                  <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                         
                                    {reviewdetails.departstation}
                                  </div>
                                  <div className="col md 2">
                                   ------
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                         
                                    {reviewdetails.returnstation}
                                  </div>
                                 
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                  {reviewdetails.seats}
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                        
                                    {reviewdetails.depart}
                                  </div>
                                  
                                </div>
                               
                                <div className="row">
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                       
                                {reviewdetails.from}
                                </div>
                                <div className="col md 2">
                               
                                </div>
                                <div className="col md 2">
                               
                               </div>
                                <div className="col md 2"  style={{fontSize:'small', color:'gray'}}>
                                                      
                                {reviewdetails.to}
                                </div>
                                <div className="col md 2">
                              
                                </div>
                                <div className="col md 2">
                               
                                </div>
                                <div className="col md 2">
                                                      
                               
                                </div>
        
                              </div>
                                
                              </p>
                              </div>
                              </div>
        
                         
                          </div>                 
                        
                       
                      </div>
              </div>
            
            </div>
            <div className="cancel3" style={{marginTop: '40%'}}>
                <div className="card w-100" >
                <h4 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingtop: '2%',marginTop:'5%'}}><b>Cancellations</b></h4>
                 <hr/>
                <p style={{paddingLeft: '2%'}}>100% refund on cancellations guaranteed.</p>
                </div>
            </div>

        <div className="traveller3" style={{paddingLeft: '5%',marginTop:'55%'}}>
            <div className="card w-100">
                <h5 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingTop: '2%'}}><b>Traveller reviewdetails</b></h5>
                <h7 style={{paddingLeft: '2%',paddingTop: '2%'}}><b>Booking reviewdetails will be sent to</b></h7>
                <p>
                    <div className="row" style={{paddingLeft: '2%',paddingTop: '2%'}}>
                        <div className="col md 2">
                            <label>Mobile Number</label>
                        </div>
                        <div className="col md 2">
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft: '2%',paddingTop: '2%'}}>
                        <div className="col md 2">
                           
                            <input type="text" placeholder="Mobile Number"></input>
                        </div>
                        <div className="col md 2">
                            
                            <input type="email" placeholder="Email"></input>
                        </div>
                    </div>
                </p>
            </div>
        </div>
        {/* < Link to={`/placeOrder/${reviewdetails.category_id}?id=${reviewdetails.id}`}><button className="btn btn-primary" style={{color:'aliceblue',marginTop:'50%',paddingLeft:'2%'}}>Continue</button> </Link>
   */}
            </>
        )
    }

    async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${reviewurl}${flightbookId}`)
       //window.alert(this.state.travellercount)
        this.setState({reviewdetails:response.data[0]})
        this.setState({total:this.state.travellercount  * this.state.reviewdetails.price+100+45,tname:response.data[0].name}) 
    }
}
export default trainDetails