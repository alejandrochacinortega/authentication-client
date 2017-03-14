import React from 'react';
import {connect} from 'react-redux';
import {fetchSecretData} from '../actions/index';

class Feature extends React.Component {

  componentWillMount() {
    this.props.fetchSecretData()
  }

  render() {
    return (
      <div>
        <h5>Data here</h5>
        {this.props.message}
      </div>
    )
  }

}

function mapStateToProps(state) {
  console.log(' state.data ', state.auth.toJS());
  return {
    message: state.auth.get('message')
  }
}

export default connect(mapStateToProps, {fetchSecretData})(Feature);