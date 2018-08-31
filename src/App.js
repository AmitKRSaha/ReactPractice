import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';

// import { FormSection } from './form/form'; 
// import { Container } from './componentInterconnection/container';
// import { AuthorQuizMain } from './authorquiz/AuthorquizMain';
// import {Home} from './Home/Home';

// import MyComponent from './lazyload/lazyload';

// For Lazy Loading
import asyncComponent from './lazyload/AsyncComponent';

const FormSection = asyncComponent(() =>
    import('./form/form').then(module => module.default)
)

const Container = asyncComponent(() =>
    import('./componentInterconnection/container').then(module => module.default)
)

const AuthorQuizMain = asyncComponent(() =>
    import('./authorquiz/AuthorquizMain').then(module => module.default)
)

const Home = asyncComponent(() =>
    import('./Home/Home').then(module => module.default)
)

const Maps = asyncComponent(() =>
    import('./Maps/Maps').then(module => module.default)
)


class App extends Component {

  render() {  
    // const abc= this.props.state;  
    // console.log('com' , abc);
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
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href={null}>Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                    <span>Lazy Loading Routes<span className="sr-only">(current)</span></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Form'} className="nav-link">Form</Link> 
              </li>
              <li className="nav-item">
                <Link to={'/Container'}  className="nav-link">Container</Link>
              </li> 
              <li className="nav-item">
                <Link to={'/AuthorQuizMain'} className="nav-link" >Author Quiz</Link>
              </li> 
              <li className="nav-item">
                <Link to={'/Maps'} className="nav-link" >Maps</Link>
              </li>             
            </ul>
          </div>
        </nav>           
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/Form' component={FormSection} />
            <Route exact path='/Container' component={Container} />
            <Route exact path='/AuthorQuizMain' component={AuthorQuizMain} />
            <Route path="/maps" component={Maps} />
          </Switch>
         </div>
       </Router>
       {/*<MyComponent />
        <i className="fas fa-spinner fa-spin"></i>
        <div className="fa-3x">
              <i className="fas fa-spinner fa-spin"></i></div> */}
      
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
