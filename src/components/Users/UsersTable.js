import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/icons.css';

const UsersTable = (props) => {
  const putRows = () =>
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/publicaciones/${key}`}>
            <div class='eye-solid icon'></div>
          </Link>
        </td>
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
