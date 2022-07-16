import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import Header from '../../Header';



const reviewurl ="https://travelgo-api.herokuapp.com/reviewdetail/1?id="

class Details extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:'',
            tname:'',
            passengerprice:''
        }
    }
    
    calculatepricePassengers = () =>
    {
        //window.alert(this.state.reviewdetails.passengers)
        console.log("passenger count",this.state.reviewdetails.passengers)

        if(this.state.reviewdetails.passengers == '2Adult-1child')
        {    this.state.passengerprice=2*this.state.reviewdetails.price+0.5*this.state.reviewdetails.price

        }
        else if(this.state.reviewdetails.passengers == '3Adult-1infant')
        {
            this.state.passengerprice=3*this.state.reviewdetails.price
            
        }

        else if(this.state.reviewdetails.passengers == '4Adult')
        {
            
             this.state.passengerprice=4*this.state.reviewdetails.price

        }
        else if (this.state.reviewdetails.passengers == '1Adult')
        {
             
             this.state.passengerprice=this.state.reviewdetails.price
             console.log("passenger price",this.state.passengerprice)
             
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
                <div className="maincontainer2">  
                        <div className="heading">
                        {this.calculatepricePassengers()}
                            <h2 style={{marginLeft:'5%',padding:'4%'}}><b>Review your booking</b></h2>
                        
                        </div>
                        <div className="filter2">
                        <h4><b>Fare Summary</b></h4>
           
                        <hr/>
                        <div id="fare">

                        <div className="row">
                            <div className="col md 2">
                            Base Fares
                            
                            </div>
                            <div className="col md 2">
                            Rs.{this.state.passengerprice}
                            
                            </div>              
                                        
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col md 2">
                                Fee and Surcharges 
                            
                            </div>
                            <div className="col md 2">
                                Rs. 800
                                
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                        <div className="col md 2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Other service charges(charity)
                                    </label>              
                                </div>
                        </div>
                            <div className="col md 2">
                            Rs. 10      
                            </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col md 2">
                                Total Amount
                            
                            </div>
                            <div className="col md 2">
                                Rs.{
                                 
                                    this.state.total = this.state.passengerprice+800+10
                                  
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
                        
                    

            <div className="filtercontent2" style={{marginTop: '5%'}}>
    
              
              <div id="display">
                     <div className="card w-100">
                        <div className="card-body">
                            <div className="row">
                            <div className="col md 2">
                            <h5><b>{reviewdetails.route}</b></h5>
                            </div>
                            </div>
                         <hr/>
                          <img src={reviewdetails.image} style={{width:'5%',height:'5%',float:'left'}}/>
                          <h6 className="card-title"><b>{reviewdetails.name}</b></h6>
                          <h6 style={{float:'right'}}><b>{reviewdetails.class} </b></h6>
                          <p className="card-text">
                          
                                <div className="row">
                                    
                                <div className="col md 2">
                                    
                                {reviewdetails.depart}                   
                                </div>
                                <div className="col md 2">
                                    
                                {reviewdetails.Stop} 
                                </div>
                                <div className="col md 2">
                                
                                {reviewdetails.hours}                   
                                </div>
                                
                                </div>
                             <br/>
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.departtime}                   
                             ---
                              {reviewdetails.departTerminal} | {reviewdetails.from}
                           
                             
                              
                            </div>
                            </div>
                            
                            
                            
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.returntime}                   
                             
                                ---
                              {reviewdetails.returnTerminal} |{reviewdetails.to}
                           
                             
                              
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
                                    
                                  {reviewdetails.departtime}                   
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                    
                                  {reviewdetails.hours} 
                                  </div>
                                  <div className="col md 2">
                                 
                                 {reviewdetails.returntime}                   
                                  </div>
                                  <div className="col md 2">
                                    
                                  BAGGAGE              
                                  </div>
                                  <div className="col md 2">
                                    
                                  CHECK IN
                                  </div>
                                  <div className="col md 2">
                                 
                                  CABIN                 
                                  </div>
                                  
                                </div>
                                <div className="row">
                                 
                                  <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                         
                                    {reviewdetails.depart}
                                  </div>
                                  <div className="col md 2">
                                   ---------
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                         
                                    {reviewdetails.return}
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                         
                                  {reviewdetails.baggage}
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                  {reviewdetails.checkin}
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                        
                                    {reviewdetails.cabin}
                                  </div>
                                  
                                </div>
                                <div className="row">
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                         
                                  {reviewdetails.departTerminal}
                                  </div>
                                  <div className="col md 2">
                                 
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                        
                                  {reviewdetails.returnTerminal}
                                  </div>
                                  <div className="col md 2">
                                
                                  </div>
                                  <div className="col md 2">
                                 
                                  </div>
                                  <div className="col md 2">
                                                        
                                 
                                  </div>
        
                                </div>
                                <div className="row">
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                       
                                {reviewdetails.from}
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
            <div className="cancel" style={{marginTop: '40%'}}>
                <div className="card w-100">
                <h4 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingtop: '2%',marginTop:'5%'}}><b>Cancellations</b></h4>
                 <hr/>
                <p style={{paddingLeft: '2%'}}>100% refund on cancellations guaranteed.</p>
                </div>
            </div>

            <div className="information" style={{marginTop: '60%'}}>
               <div className="card w-100" style={{paddingTop:'2%',paddingLeft: '2%',marginTop:'10%'}}>
                 
                    <h5 style={{color:'rgba(6, 33, 142)'}}><b>Important Information</b></h5>
                    <hr/>
                    <p>
                    <h6><b>Check travel guidelines issued by Karnataka below:</b></h6>
                    
                    <ul style={{fontSize: 'small'}}>
                    <li><b>COVID test/vaccination rules :</b>
                         All travellers, irrespective of their vaccination status, arriving from the state of Maharashtra, Kerala and Goa must carry a negative RT-PCR report with a sample taken within 72 hours before arrival. RT-PCR test timeline starts from the swab collection time. Travellers from all states will have to undergo health screening at the airport. Anyone with COVID-19 symptoms will not be allowed to travel.
                    Following category of travellers are exempted from the above-mentioned requirement:.
                    - Constitutional functionaries and healthcare professionals.
                    - Children below the age of 2 years.
                    </li>
                    
                    <li>It is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight. Any lapse might result in de-boarding. Know More
                    Remember to download the baggage tag(s) and affix it on your bag(s).
                    </li>
                    <h7><b>Baggage information</b></h7>
                    <hr/>
                    
                    <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. Additional pieces of Baggage will be subject to additional charges per piece in addition to the excess baggage charges.</li>
                   </ul>   
                </p>
               </div>
            </div>
        <div className="traveller" style={{marginTop: '0%'}}>
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
       
            </>
        )
    }

    async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let category  =this.props.match.params.category_id
         
        sessionStorage.setItem("id",flightbookId)
        sessionStorage.setItem("category",category)

        let response = await axios.get(`${reviewurl}${flightbookId}`)
    
        this.setState({reviewdetails:response.data[0]})
        this.setState({total:this.state.passengerprice+800+10,tname:response.data[0].name}) 
    }
}
export default Details