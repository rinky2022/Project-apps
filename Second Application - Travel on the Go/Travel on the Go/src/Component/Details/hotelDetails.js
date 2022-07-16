import React,{Component} from 'react';

import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './hotelDetails.css';
import Header from '../../Header';

import HotelDetailsDisplay from './hotelDetailsDisplay';



const reviewurl ="https://travelgo-api.herokuapp.com/reviewdetail/4?id="

class HotelDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:'',
           
        }
    }



    render(){
        let {reviewdetails}= this.state;
   
        console.log("deatils",reviewdetails)
        console.log("deatilsprice",reviewdetails.price)
        return(
            <>
            
            <Header/>
            <HotelDetailsDisplay listData={this.state.reviewdetails}/>
            
            </>
        )
    }

  
    async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${reviewurl}${flightbookId}`)
       
        this.setState({reviewdetails:response.data})
      
    }
}
export default HotelDetails