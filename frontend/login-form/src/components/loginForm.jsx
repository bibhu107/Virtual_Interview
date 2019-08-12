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
            <Container className="App">
            <div class = "_0c4ed431">
                <div class = "bac87ec6 ">
                        <div class = "_83938fda">
                            
                        </div>
                </div>

            </div>
        <h2>Sign In</h2>
        <Form onSubmit={this.handleSubmit} className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                class="form-control is-valid"
                id="Email"
                placeholder="Enter username"
                onChange={this.handleChange}
                value={email}
              />
              <div class="valid-feedback">Valid username.</div>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                class="form-control is-invalid"
                placeholder="Enter password"
                onChange = {this.handleChange}
                value={password}
              />
               <div class="invalid-feedback">Please fill out this field.</div>
            </FormGroup>
          </Col>
          <Button type= "Submit">Submit</Button>
        </Form>
      </Container>
        );
      }
}
export default Login;  
