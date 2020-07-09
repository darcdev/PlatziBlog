import React from 'react';
import { connect } from 'react-redux';

const UsersTable = (props) => {
  const putRows = () =>
    props.users.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

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
        <tbody>{putRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (store) => {
  return store.userReducer;
};
export default connect(mapStateToProps)(UsersTable);
