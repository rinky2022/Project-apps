import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../Header';
import axios from 'axios';

const url = "https://travelgo-api.herokuapp.com/reviewdetail";
const postData = "https://travelgo-api.herokuapp.com/bookticket";


class PlaceOrder extends Component{
    constructor(props){
        super(props);
        let price = sessionStorage.getItem('totalprice')
        
        console.log("price",price)
        
        let userData = sessionStorage.getItem('userInfo')
        let ticketname=sessionStorage.getItem('ticketname')
        
        this.state={
            id:Math.floor(Math.random()*100000),       
            hotel_name:ticketname,
            name:userData? userData.split(',')[0]:'',
            email:userData? userData.split(',')[1]:'',
            cost:price?price:0,
            phone:userData? userData.split(',')[2]:'',
            address:'Hno 30',
            menuItem:'',
            ticket_name:ticketname
            
        }
       
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('ticketname');
       
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        
        .then(console.log('ticket booked'))
    }
    
    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <div className="orderTicket" key={item.id}>
                        <img  src={item.image} alt={item.name} style={{width:'20%',height:'20%'}} />
                        <h5>{item.name}</h5>
                       
                    </div>
                )
            })
        }
    }
    

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center style={{marginTop:'5%',fontFamily:'georgia'}}>
                        <h2>Please login to book tickets</h2>
                    </center>
                </>

            )
        }
        console.log(this.state)
        return(
            <>
            <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-primary">
                        <div className="panel-heading" style={{marginTop:'4%',color:'rgb(66 96 82)',fontFamily:'georgia'}}>
                            <h3>Your Ticket booking - <i>{this.props.match.params.id}{sessionStorage.getItem('ticketname')}</i> </h3>
                        </div>
                        <div className="panel-body">
                         <form action="https://pay-tm1.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>                              
                               <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                               
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email}  onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    value={this.state.address}  onChange={this.handleChange}/>
                                </div>
                            </div>
                            <br/>
                            {this.renderMenu(this.state.menuItem)}
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Total Price is Rs.{this.state.cost}</h4>
                                </div> 
                            </div>
                            <button className="btn btn-success" onClick={this.checkout} type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

  
        async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let categoryid= sessionStorage.getItem('category')
        let response = await axios.get(`${url}/${categoryid}?id=${flightbookId}`)
      
        let totalPrice = 0;
   
        this.setState({categoryId:response.data.category_id, menuItem:response.data,ticket_name:response.data.name})
      
    }
        
    

}

export default PlaceOrder