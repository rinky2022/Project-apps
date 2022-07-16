import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';

const url = "https://travelgo-api.herokuapp.com/updateticket";
const url2 ="https://travelgo-api.herokuapp.com/gettickets"


class ViewOrder extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:''
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
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo').split(',')[1]
        if(this.props.location){
            let queryp = this.props.location.search;
        
            if(queryp){
                let data ={
               
                    "bank_name":queryp.split('&')[3].split('=')[1]
                 
                }
                let status=queryp.split('&')[0].split('=')[1]
       
                
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];
                let bankName = data.bank_name.replaceAll("%20","-")
                console.log(bankName)
                
               
                fetch(`${url}/${id}?status=${status}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                
                    body: JSON.stringify(data)

                })
            }
        }
        window.alert("Thanks for booking!! Come again")
        axios.get(`${url2}?email=${email}`).then((res) => {this.setState({orders:res.data})})
        console.log(this.state.orders)
    }
}

export default ViewOrder;