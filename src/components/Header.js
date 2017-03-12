import React from 'react';
import Signin from './auth/Signin';
class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Signin/>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Header;