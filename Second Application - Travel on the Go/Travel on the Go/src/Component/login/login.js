import React,{Component} from 'react';
import Header from '../../Header';
import './login.css'

const url  = "https://developerjwt.herokuapp.com/api/auth/login"

class Login extends Component {

constructor(props){
    super(props)
    this.state={
    email:'@gmail.com',
    password:'12345678',
    message:''
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
    .then((res) => res.json())
    .then((data) => {
        if(data.auth === false){
            this.setState({message:data.token})
        }else{
            sessionStorage.setItem('ltk', data.token)
            this.props.history.push('/')
        }
    })
}

  
    render(){
        return(
            <>
                <Header/>
                <div className="formcontainer">               
                <div className="container" >
                    <br/>
                    
                        <div className="carde" style={{textAlign:'center',fontFamily:'georgia'}}>
                            <h3><b>Login Form</b></h3>
                            <br/>
                        </div>
                        <div className="cardw" >
                        <h4 style={{color:'red'}}>{this.state.message}</h4>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label form="form-control" for="email">Email</label>
                                    <input className="form-control" id="email" type="email"
                                            name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label form="form-control" for="password">Password</label>
                                    <input className="form-control" id="password" type="password"
                                            name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="submit">
                        <button className="btn btn-success"  onClick={this.handleSubmit}>Login</button>
                        </div>
                        </div>
                    
                </div>
     
                </div>
            </>
        )
    }

}

export default Login