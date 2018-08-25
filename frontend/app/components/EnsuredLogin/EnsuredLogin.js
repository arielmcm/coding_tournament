import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

class EnsureLoggedInContainer extends Component {
  componentDidMount () {
    if (!localStorage.getItem('user')) {
      this.props.replace('/login');
    }
  }

  render () {
    return localStorage.getItem('user') ? this.props.children : <div />;
  }
}

export default connect(
  () => ({}),
  { replace },
)(EnsureLoggedInContainer);
