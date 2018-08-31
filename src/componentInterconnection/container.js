import React from 'react';

export default class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

    render() {
      
      return (
        <div className="container">
           <h3> Container Part </h3>
          <div className="row">
          
          <div className="col-md-6">
            <button onClick={(e) => this.handleClick(e)} className="btn btn-Primary">
                Click me
            </button>
          </div>
          
          <div className={this.state.isToggleOn ? 'hide col-md-6' : 'show col-md-6'} >          
            This is Hidden Section</div>
          </div>
        </div>
    
      );
    }
  }
  
