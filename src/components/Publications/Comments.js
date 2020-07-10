import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

const Comments = (props) => {
  if (props.loading) {
    return <Spinner />;
  }
  if (props.error) {
    return <Fatal message={props.error} />;
  }
  const putComments = () => {
    return props.comments.map((comment) => {
      return (
        <li>
          <b>
            <u>{comment.email}</u>
          </b>
          <br />
          {comment.body}
        </li>
      );
    });
  };
  return <ul>{putComments()}</ul>;
};

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer;
export default connect(mapStateToProps)(Comments);
