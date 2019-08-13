import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
  } from 'reactstrap';
  import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
    render() {
      const {email,password} = this.state
        return (
          <Container className = "App" >
                    <Form onSubmit={this.handleSubmit} className="form" >
                    <div class="form-group">
                         <input 
                            type="email" 
                            class="form-control"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                           
                        >
                        </input>
                    </div>
                    <div class="form-group">
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            
                           >
                        </input>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox"></input>
                        <label>
                             Remember me
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        class="btn btn-primary">Login
                    </button>
                    <button 
                        type="Register" 
                        class="btn btn-primary">Register
                        
                    </button>
                </Form>    
            </Container>
        );
      }
}
export default Login;  
