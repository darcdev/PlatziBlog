import React, { Component } from 'react';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Comments from './Comments';

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
      await getPublicationsByUser(key);
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

  putPublications = () => {
    const {
      userReducer,
      userReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: {
        params: { key },
      },
    } = this.props;

    if (!users.length) return;
    if (userReducer.error) return;
    if (publicationsReducer.loading) {
      return <Spinner />;
    }
    if (publicationsReducer.error) {
      return <Fatal mensaje={publicationsReducer.error} />;
    }
    if (!publications.length) return;
    if (!('publications_key' in users[key])) return;

    const { publications_key } = users[key];
    return this.showInfo(publications[publications_key], publications_key);
  };

  showInfo = (publications, pub_key) =>
    publications.map((publication, com_key) => (
      <div
        key={publication.id}
        className='pub_titulo'
        onClick={() =>
          this.showComments(pub_key, com_key, publication.comments)
        }
      >
        <h2>{publication.title}</h2>
        <h3>{publication.body}</h3>
        <div>
          {publication.open ? <Comments comments={publication.comments} /> : ''}
        </div>
      </div>
    ));

  showComments = (pub_key, com_key, comments) => {
    this.props.openClose(pub_key, com_key);
    if (!comments.length) {
      this.props.getComments(pub_key, com_key);
    }
  };
  render() {
    return (
      <div>
        {this.putUser()}
        {this.props.match.params.key}
        {this.putPublications()}
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
