import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import Spinner from '../General/Spinner';
class Usuarios extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  putRows = () =>
    this.props.users.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));
  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>{this.putRows()}</tbody>
        </table>
      </div>
    );
  };
  render() {
    return <div>{this.putContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return state.userReducer;
};

export default connect(mapStateToProps, userActions)(Usuarios);
