import React,{Component} from 'react'
import axios from 'axios';
import TripIdea_Display from './tripIdea_Display';

import './tripIdea.css'
import Header from '../../Header'


const restUrl = "https://travelgo-api.herokuapp.com/category"
const tripUrl = "https://travelgo-api.herokuapp.com/type";


class TripIdeas extends Component{
    constructor(props){
        super(props);
        this.state = {
            fromcity:'',
             flightsList: ''

        };
    }


  
    render(){
        return(
            <>
            <Header/>
            <div class="container">
            <div id="displayTrip" style={{marginTop:'8%'}}>
                        
            <h3 style={{fontFamily:'georgia',marginLeft:'2%'}}>Trip Ideas - Discover Places and  Plan Your Vacations With Us!</h3>
                   <br/>
                        <TripIdea_Display listData={this.state.flightsList}/>
                            
                   
            </div>
            </div>
         
                 </>
        )
    }


    async componentDidMount(){
        let typeId = this.props.match.params.type;
        console.log("typeid",typeId)
        let response = await axios.get(`${tripUrl}/${typeId}`)    
               
            this.setState({flightsList:response.data})
     
    }


}


export default TripIdeas
