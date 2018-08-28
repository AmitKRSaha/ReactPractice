import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';

import { FormSection } from './form/form'; 
import { Container } from './componentInterconnection/container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App</h1>
        </header>
        <p className="App-intro">
          This is Sample App for Initial Experience
        </p>
       <Router>
         <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href={null}>Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <a class="nav-link" href={null}><Link to={'/'}>Form<span class="sr-only">(current)</span></Link></a> 
                {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              <li class="nav-item">
              <a class="nav-link" href={null}><Link to={'/Container'}>Container</Link></a>
              </li>             
            </ul>
          </div>
        </nav>           
         <Switch>
                  <Route exact path='/' component={FormSection} />
                  <Route exact path='/Container' component={Container} />
               </Switch>
         </div>
       </Router>
        <i className="fas fa-spinner fa-spin"></i>
        <div className="fa-3x">
              <i className="fas fa-spinner fa-spin"></i></div>
      
        {/* ==================== This is Combined Sections ===================================== */}

        {/* <div className="row">
        <div className="col-md-6"><FormSection  name="Registration Form" id ="regfrm"/></div>
        <div className="col-md-6"><FormSection  name="Sign In" id ="signin"/></div>
        </div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href={null}>
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Bootstrap
          </a>
        </nav>
        <div className="row">
          <Container />
        </div> */}

      </div>
    );
  }
}

export default App;
