import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationsActions from '../../actions/publicationsActions';

class Publications extends Component {
  async componentDidMount() {
    if (!this.props.userReducer.users.length) {
      await this.props.getUsers();
    }
    this.props.getPublicationsByUser(this.props.match.params.key);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de </h1>
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
