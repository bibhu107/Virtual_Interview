import React, {Component} from 'react';
import axios from 'axios';
import Login from './components/loginForm';
class App extends Component {
    render() {
        return (
            <Login Login={this.state.Login} />
        )
    }
    
    state = {
        login: []
    };

    componentDidMount() {
        axios.post(`http://127.0.0.1:5000/login`)
        
    }

}

export default App;
