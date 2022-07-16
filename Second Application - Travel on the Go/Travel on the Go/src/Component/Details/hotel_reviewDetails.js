import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './hotelDetails.css';
import './details.css'
import Header from '../../Header';



const reviewurl ="https://travelgo-api.herokuapp.com/reviewdetail/4?id="

class HotelReviewDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:'',
            disount:'',
            finalprice:'',
            tname:''

        }
    }



    render(){
        let {reviewdetails}= this.state;
        console.log("deatils",reviewdetails)
        console.log("deatilsprice",reviewdetails.price)
        sessionStorage.setItem('totalprice',this.state.total)
        let totalPrice = sessionStorage.getItem('totalprice')
        console.log("totalvalue",totalPrice)
        console.log("new price",this.props.location.search.split("=")[2])
        sessionStorage.setItem("ticketname",this.state.tname)
       
        return(
            <>
            <Header/>
                <div className="maincontainer5">  
                        <div className="heading5">
                        
                            <h2 style={{marginLeft:'5%',paddingTop:'4%'}}><b>Review your Booking</b></h2>
                        
                        </div>
                        <div className="filter5">
                        <h4><b>Fare Summary</b></h4>
                        <br/>
                        <div id="fare">

                        <div className="row">
                            <div className="col md 2">
                            Room Fares 
                            
                            </div>
                            <div className="col md 2">
                            Rs.{this.state.finalprice}
                            
                            </div>              
                                        
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col md 2">
                                Discount
                            
                            </div>
                            <div className="col md 2">
                               {this.state.disount = 0.2 * this.state.finalprice}
                                
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                        <div className="col md 2">
                            Service Charges
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
                                    
                                    this.state.total = this.state.finalprice-this.state.disount+45
                                }
                              
                               
                                
                            </div>
                            </div>
                            </div>       
                          
                            </div>                 
                            
                        
                        </div>
                        
                    

            <div className="filtercontent5" style={{marginTop:'0%'}}>
          
              
              <div id="display5">

              <h5><b>PROPERTY INFORMATION</b></h5>
              <hr/>
                     <div className="card w-100">
                        <div className="card-body">
                           
                         <hr/>
  
                        <h4 className="card-title"><b>{reviewdetails.name}</b></h4>
                          <h6 ><b>{reviewdetails.area} </b></h6>
                          <p className="card-text">
                          
                          <div className='row'>
                           <div className='col md 2'>
                               Checkin | Checkout
                           </div>
                          </div>
                                <div className="row">
                                    
                              
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                        
                                  {reviewdetails.checkin} | {reviewdetails.checkout}                   
                     
                                              
                                </div>
                                <img src= {reviewdetails.image}   style={{width:'20%', height:'20%'}}/>
                        
                                                
                     
                                              
                               
                               
                                </div>
                             <br/>
                            <div className="row">
                             
                              <div className="col md 2">
                                
                             Rooms : {reviewdetails.rooms}    | Guests : {reviewdetails.guests}            
                                                                                    
                              
                            </div>
                            </div>
                            
                            
                            
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.tag}                   
                             
                            </div>
                            </div>
                          </p>
                         
                          <div className="row">
                          <div className="col md 2">
                          < Link to={`/placeOrder/${reviewdetails.category_id}?id=${reviewdetails.id}&name=${reviewdetails.name}`}><button className="btn btn-primary" style={{marginLeft:'2%',fontSize:'large',float:'right',textDecoration:'none'}} >   Proceed to payment</button> </Link>
  
                          </div>
                          <div>
                          
                         
                          </div>
                          </div>
                    
                         
                          </div>                 
                        
                       
                      </div>
              </div>
            
            </div>
            <div className="cancel5" style={{marginTop: '40%'}}>
                <div className="card w-100" >
                <h4 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingtop: '2%',marginTop:'5%'}}><b>Cancellations</b></h4>
                 <hr/>
                <p style={{paddingLeft: '2%'}}>100% refund on cancellations guaranteed.</p>
                </div>
            </div>

        <div className="traveller5" style={{paddingLeft: '5%',marginTop:'55%'}}>
            <div className="card w-100">
                <h5 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingTop: '2%'}}><b>GUESTS DETAILS</b></h5>
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
       </>
        )
    }

    async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${reviewurl}${flightbookId}`)
       
        this.setState({reviewdetails:response.data[0]})
        this.setState({finalprice:this.props.location.search.split("=")[2],disount:0.2*this.state.finalprice}) 
        this.setState({total:this.state.finalprice-this.state.disount+45,tname:response.data[0].name})
    }
}
export default HotelReviewDetails