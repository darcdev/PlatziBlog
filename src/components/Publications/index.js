import React, { Component } from 'react';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationsActions from '../../actions/publicationsActions';

class Publications extends Component {
  async componentDidMount() {
    const {
      getUsers,
      getPublicationsByUser,
      match: {
        params: { key },
      },
    } = this.props;
    if (!this.props.userReducer.users.length) {
      await getUsers();
    }
    if (!('publications_key' in this.props.userReducer.users[key])) {
      getPublicationsByUser(key);
    }
  }

  putUser = () => {
    const {
      userReducer,
      match: {
        params: { key },
      },
    } = this.props;
    if (userReducer.error) {
      return <Fatal message={userReducer.error} />;
    }
    if (!userReducer.users.length || userReducer.loading) {
      return <Spinner />;
    }

    const nombre = userReducer.users[key].name;

    return <h1>Publicaciones de {nombre}</h1>;
  };
  render() {
    return (
      <div>
        {this.putUser()}
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer, publicationsReducer }) => {
  return { userReducer, publicationsReducer };
};

const mapDispatchToProps = {
  ...userActions,
  ...publicationsActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Publications);
