import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css'
import Header from '../../Header';



const reviewurl ="https://travelgo-api.herokuapp.com/reviewdetail/5?id="

class HolidayReviewDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:'',
            GST:'',
            tname:'',
            passengerprice:''
        }
    }
    calculatepriceHoliday = () =>
    {
        
        if(this.state.reviewdetails.guests == 'ADULTS')
        {    this.state.passengerprice=1*this.state.reviewdetails.price

        }
        else if(this.state.reviewdetails.guests == '2 ADULTS, 2 children')
        {
            this.state.passengerprice=2*this.state.reviewdetails.price+1*this.state.reviewdetails.price
            
        }
        else if(this.state.reviewdetails.guests == '2 ADULT, 1 child')
        {
            
             this.state.passengerprice=2*this.state.reviewdetails.price+0.5*this.state.reviewdetails.price

        }

        else if(this.state.reviewdetails.guests == '2 ADULT')
        {
            
             this.state.passengerprice=2*this.state.reviewdetails.price

        }
        else if (this.state.reviewdetails.guests == '1 ADULT')
        {
             
             this.state.passengerprice=this.state.reviewdetails.price
            
        }
        else if (this.state.reviewdetails.guests == '1 ADULT, 1child')
        {
             
             this.state.passengerprice=this.state.reviewdetails.price+0.5*this.state.reviewdetails.price
            
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
                <div className="maincontainer6">  
                        <div className="heading6">
                        
                            <h2 style={{marginLeft:'5%',paddingTop:'4%'}}><b>Review your Booking</b></h2>
                        
                        </div>
                        {this.calculatepriceHoliday()}
                        <div className="filter6">
                        <h4><b>Fare Summary</b></h4>
                        <br/>
                        <div id="fare">

                        <div className="row">
                            <div className="col md 2">
                            Total Basic Cost
                            
                            </div>
                            <div className="col md 2">
                            Rs.{this.state.passengerprice}
                            
                            </div>              
                                        
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col md 2">
                                GST(5.0%)
                            
                            </div>
                            <div className="col md 2">
                               {this.state.GST = 0.05*this.state.passengerprice}
                                
                            </div>
                        </div>
                        <br/>
                       
                            <br/>
                            <div className="row">
                            <div className="col md 2">
                                Total Amount
                            
                            </div>
                            <div className="col md 2">
                                Rs.{
                                    
                                    this.state.total = this.state.passengerprice+this.state.GST
                                }
                              
                               
                                
                            </div>
                            </div>
                            </div>       
                            
                                            
                            <div style={{marginTop:'10%',padding:'3%',fontFamily:'georgia',border:'groove'}}>
                                 <h5><b>Pricing details</b> </h5>
                                 <div className='row'>                                     
                                 <h7>Price per Adult : {reviewdetails.price}</h7>
                                 <div className='row'>
                                 <h7>Price per Child :{ 0.5* reviewdetails.price}</h7>
                                 </div>
                                 </div> 
                            </div>  
                            
                            </div>                 
                            
                        
                        </div>
                        
                    

            <div className="filtercontent6" style={{marginTop:'0%'}}>
          
              
              <div id="display6">

              <h5><b>PACKAGE INFORMATION</b></h5>
              <hr/>
                     <div className="card w-100">
                        <div className="card-body">
                           
                         <hr/>
  
                        <h4 className="card-title"><b>{reviewdetails.name}</b></h4>
                          <h6 ><b>{reviewdetails.duration} </b></h6>
                          <p className="card-text">
                          
                          <div className='row'>
                           <div className='col md 2'>
                               Starting | Reaching
                           </div>
                          </div>
                                <div className="row">
                                    
                              
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                        
                                  {reviewdetails.from} | {reviewdetails.to}                   
                     
                                              
                                </div>
                                <img src= {reviewdetails.Images}   style={{width:'20%', height:'20%'}}/>
                        
                                                
                     
                                              
                               
                               
                                </div>
                             <br/>
                            <div className="row">
                             
                              <div className="col md 2">
                                
                             Rooms : {reviewdetails.rooms}    | Guests : {reviewdetails.guests}            
                                                                                    
                              
                            </div>
                            </div>
                            
                            
                            
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.desc}                   
                             
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
                         
                           
                            
                                
        
                         
                          </div>                 
                        
                       
                      </div>
              </div>
            
            </div>
            <div className="cancel6" style={{marginTop:'40%'}}>
                <div className="card w-100" >
                <h4 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingtop: '2%',marginTop:'5%'}}><b>Cancellations</b></h4>
                 <hr/>
                <p style={{paddingLeft: '2%'}}>100% refund on cancellations guaranteed.</p>
                </div>
            </div>

         
        <div className="traveller6" style={{paddingLeft: '5%',marginTop:'55%'}}>
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
        this.setState({GST:0.05*this.state.passengerprice,total:this.state.passengerprice+this.state.GST,tname:response.data[0].name}) 
        
    }
}
export default HolidayReviewDetails