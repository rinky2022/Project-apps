import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css'

const url="https://travelgo-api.herokuapp.com/category/"
const urluser = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Header extends Component{

  constructor(props){
    super(props)
    this.state={
      userData:'',
      username:'',
      userImg:'',
      out:'',
      icon:'',
      address:''
  }
  }
    
   geolocation=()=>{
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.showPosition)
      }else{
         
          this.setState({out:'Geo Not Supported'})

      }
  }

  showPosition=(data)=>{
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude
    var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
  
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)                 
        data.list.map((item) => {
            console.log(item.temp.day)
              this.setState({icon:`${item.temp.day}°C and ${item.weather[0].description}`})
         
          var y = document.getElementById("address")
           y.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
            
          })
        
    })
}
       

  handleLogout =()=>{
    sessionStorage.removeItem('userInfo');
    sessionStorage.setItem('loginStatus','loggedOut');
    sessionStorage.removeItem('ltk');
    sessionStorage.removeItem('uName')
    sessionStorage.removeItem('uImg')
    this.setState({userData:'',username:"",userImg:''})    
    this.props.history.push('/')
}

conditionalHeader =() =>{

  if(this.state.userData.name ||  sessionStorage.getItem('uName') !== null)
  {
      if( sessionStorage.getItem('uName') !== null)
      {
          let name = sessionStorage.getItem('uName');
          let image = sessionStorage.getItem('uImg');
          return(
              <>
                  <Link className="nav-link active" to="/" style={{fontFamily:"georgia"}}>
                     Home
                  </Link>
                  <Link className="nav-link active" to="/" style={{marginTop:'-5%'}}>
                      <img src={image} style={{height:40,width:50}}/> &nbsp;
                      <span className="glyphicon glyphicon-user"></span> Hi {name}
                  </Link>
                  &nbsp;
                  <button className="btn btn-danger" onClick={this.handleLogout}><span className="glyphicon glyphicon-log-out"></span> 
                      LogOut
                  </button>

                  {/* <li className="nav-item">
                    <a className="nav-link active" href="../Login/login.html" style={{display:'float-right'}}><i className="fa fa-fw fa-user"></i>Log In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="../Signup/signup.html" style={{display:'float-right'}}><i className="fa fa-fw fa-user"></i>Sign Up</a>
                  </li> */}
              </>
          )

      }
  
  else
  {
      let data = this.state.userData;
      let outArray = [data.name,data.email,data.phone,data.role]
      sessionStorage.setItem('userInfo',outArray);
      sessionStorage.setItem('loginStatus','loggedIn');
      return(
          <>

              <Link className="nav-link active" to="/" style={{fontFamily:"georgia"}}>
                     Home
              </Link>
              <Link className="nav-link active" to="/">
                  <span className="glyphicon glyphicon-user" style={{height:40,width:100}}></span> Hi {data.name}
              </Link>
              &nbsp;
              <button className="btn btn-danger" style={{height:40,width:100}} onClick={this.handleLogout}><span className="glyphicon glyphicon-log-out"></span> 
                  LogOut
              </button>
             
          </>
      )
}
} else{
  return(
      <>
          <Link className="nav-link active" to="/" style={{fontFamily:"georgia"}}>
                     Home
          </Link>
          <a className="nav-link active" href="https://github.com/login/oauth/authorize?client_id=49e6d7b92b46fbec4f9a" style={{fontFamily:"georgia",color:"rgb(137 119 105)"}}>
                  Login With Github
              </a> &nbsp;
          <Link className="nav-link active" to="/register" style={{fontFamily:"georgia",color:"rgb(137 119 105)"}}><span className="glyphicon glyphicon-user"></span>Sign Up</Link>
          &nbsp;
          <Link className="nav-link active" to="/login" style={{fontFamily:"georgia",color:"rgb(137 119 105)"}}><span className="glyphicon glyphicon-log-in"></span>Login</Link>
      </>
  )
  }
}
    render(){
        return(
            

    <div className='head'>
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="https://i.ibb.co/sRnRf7N/logo.png" alt="travel" width="40" height="30" className="d-inline-block align-text-top"/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item me-2">
                    <a className="nav-link active" aria-current="page" href="#" style={{fontFamily: 'Impact',color: 'rgb(110, 73, 17)'}}>Travel on the Go</a>
                  </li>
               

                         {this.conditionalHeader()}
                
                
                </ul>
                {this.geolocation()}
           
                 <p>{this.state.out}</p>
                    <div >{this.state.icon}</div>
                    <p id="address"></p>
                <button className="btn btn-outline-secondary" type="button"style={{borderRadius:'10%',width:'10%',marginRight:'2%',marginLeft:'2%'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <i className="fa fa-fw fa-search"></i> Search
                </button>
            
              </div>
            </div>
          
          </nav>
          </div>

 
  
          <div id="canvas">
            <a className="btn btn-secondary"  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                
              </a>
            
              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    Find your best trip mode.
                  </div>
                  <div className="dropdown mt-3">
                    <button className="btn btn-primary dropdown-toggle" style={{color:'white'}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                      Choose your Travel option
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><a className="dropdown-item" ><Link to={`/flight_listing/1`}>Flights</Link></a></li>
                      <li><a className="dropdown-item"><Link to={`/train_listing/2`}>Train</Link></a></li>
                      <li><a className="dropdown-item"><Link to={`/bus_listing/3`}>Buses</Link></a></li>
                      <li><a className="dropdown-item"><Link to={`/hotel_listing/4`}>Hotels</Link></a></li>
                      <li><a className="dropdown-item"><Link to={`/holiday_listing/5`}>Holiday Packages</Link></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
         


        )
    }

    componentDidMount(){
      if(this.props.location.search){
          if(this.props.location.search.split("=")[0] == '?code')
          {
              var code = this.props.location.search.split("=")[1]
          }
          if(code)
          {
              let requestedData ={
                  code :code
              }
              fetch(`https://oauth-travel.herokuapp.com/oauth`,
              {
                  method:'POST',
                  headers:{
                      'Accept':'application/json',
                      'Content-Type':'application/json'
                  },
                  body:JSON.stringify(requestedData)
              })

              .then((res)=> res.json())
              .then((data)=>
                  {
                      console.log(">>>>data>>>>>",data)
                      let username = data.name;
                      let img = data.avatar_url;
                      sessionStorage.setItem('uName',username)
                      sessionStorage.setItem('uImg',img)
                      sessionStorage.setItem('loginStatus','loggedIn')
                      this.setState({username:username,userImg:img})
                  })
              
          }

      }
      fetch(urluser,{
          method:'GET',
          headers:{
              'x-access-token':sessionStorage.getItem('ltk')
          }
      })
      .then((res) => res.json())
      .then((data) => {
          this.setState({
              userData:data
          })
      })
  }
}





export default withRouter(Header);