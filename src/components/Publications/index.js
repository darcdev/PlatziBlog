import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationsActions from '../../actions/publicationsActions';

class Publications extends Component {
  componentDidMount() {
    this.props.getPublications();

    if (!this.props.userReducer.users.length) {
      this.props.getUsers();
    }
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
