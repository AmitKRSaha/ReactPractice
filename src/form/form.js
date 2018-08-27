import React from 'react';
import LoggingButton from './loginbutton';


export function FormSection( props ) {
    return (
        <div className="card">
            <div className="card-header">
                {props.name}
            </div>
            <form>
                <div  className="form-group">
                    <label htmlFor={"exampleInputEmail" + props.id}>Email address</label>
                    <input type="text"  className="form-control" id={"exampleInputEmail" + props.id} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor={"exampleInputPassword" + props.id}>Password</label>
                    <input type="password" className="form-control" id={"exampleInputPassword" + props.id} placeholder="Password" />
                </div>
                <LoggingButton />
            </form>
       </div>
    );
}




