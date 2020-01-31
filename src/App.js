import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthService from './services/AuthService';
import Login from './components/commons/dialogs/Login';
import UserNav from './components/commons/UserNav';
import Home from './components/commons/Home';
class App extends Component{

  constructor(props){
    super(props);
    this.auth = new AuthService();
    this.state = {auth: this.auth.isLoggedIn()};
  }

  render(){

    if(this.state.auth){
      return(<UserNav></UserNav>)
    }
    return(
      <div className="main-container">
        <userNav/>
        
    
        <Router>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
          </Switch>
      </Router>
      
      </div>
      
    )
  }
}

export default App;
