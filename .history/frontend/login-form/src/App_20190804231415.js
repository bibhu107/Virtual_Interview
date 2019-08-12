import React, {Component} from 'react';
import Login from './components/loginForm';
import axios from axios;
class App extends Component {
    render() {
        return (
            <Login Login={this.state.Login} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;
