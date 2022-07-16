import React,{Component} from 'react';
import Header from '../../Header';
import './register.css'

const url = "https://developerjwt.herokuapp.com/api/auth/register"

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }

       
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }


    render(){
        return(
            <>
                <Header/>
                
                <div className="formcontainer" style={{height:'100%',fontFamily:'georgia'}}>
                <div className="container">
                    <br/>
                    
                        <div className="card-title" style={{textAlign:'center'}}>
                            <h4>Register Form</h4>
                        </div>
                        <br/>
                        <hr/>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group" > 
                                        <label form="form-control" for="name">Name</label>
                                        <input className="form-control" id="name" placeholder="Name" required name="name" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group">
                                        <label form="form-control" for="phone">Phone</label>
                                        <input className="form-control" id="phone" placeholder="Phone" name="phone" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group">
                                        <label form="form-control" for="email">Email</label>
                                        <input className="form-control" id="email" placeholder="Email" type="email"
                                        name="email" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group">
                                        <label form="form-control" for="password">Password</label>
                                        <input className="form-control" id="password" placeholder="Password" type="password"
                                        name="password" onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
   

                        <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms and Privacy</a></p>
                    <div className='row'>
                       <div className="submit">
                           <button className="cancelbtn" onClick={this.handleSubmit}>Register</button>
                           <button className="signupbtn" onClick={this.handleSubmit}>Sign In</button>
                       </div>
                        </div>
                     </div>
                  
                </div>
                </div>
            </>
        )
    }

}

export default Register