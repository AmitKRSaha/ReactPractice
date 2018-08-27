import React from 'react';

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = (e) => {
        e.preventDefault();
      alert('Ok' + this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick} className="btn btn-Primary">
          Click me
        </button>
      );
    }
  }

  export default LoggingButton;