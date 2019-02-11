import React from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render(){

        return(
            <div>
                <h1>Hello from Login</h1>
                <Link to="/profile/guest">Guest</Link>
            </div>
        );
    }
}

export default Login;