import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import UsersTable from './UsersTable';
class Usuarios extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    return <UsersTable />;
  };
  render() {
    return <div>{this.putContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return state.userReducer;
};

export default connect(mapStateToProps, userActions)(Usuarios);
