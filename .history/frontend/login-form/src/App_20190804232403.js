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
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ login: data })
            })
            .catch(console.log)
    }
}

export default App;
