import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from './actions/index';

class App extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.signin()}>Sign in</button>
            </div>
    );
    }
}

export default connect(null, { signin })(App);
