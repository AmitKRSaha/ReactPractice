import React from 'react';
import LoggingButton from './loginbutton';
import { Component } from 'react';


export default class FormSection extends Component {
    // constructor(){
    //     super();
    // }

    render(){
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.name}
                </div>
                <form>
                    <div  className="form-group">
                        <label htmlFor={"exampleInputEmail" + this.props.id}>Email address</label>
                        <input type="text"  className="form-control" id={"exampleInputEmail" + this.props.id} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor={"exampleInputPassword" + this.props.id}>Password</label>
                        <input type="password" className="form-control" id={"exampleInputPassword" + this.props.id} placeholder="Password" />
                    </div>
                    <LoggingButton />
                </form>
        </div>
        );
    };
}




