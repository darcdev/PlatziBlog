import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as homeworksActions from '../../actions/homeworksActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
class Save extends Component {
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  };
  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
  };
  save = () => {
    const { user_id, title, addHomework } = this.props;
    const newHomework = {
      userId: user_id,
      title,
      completed: false,
    };

    addHomework(newHomework);
  };
  disabled = () => {
    const { title, user_id, loading } = this.props;
    if (loading) {
      return true;
    }
    if (!user_id || !title) {
      return true;
    }
    return false;
  };
  showAction = () => {
    const { error, loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal message={error} />;
    }
  };
  render() {
    return (
      <div>
        <h1>Guardar Tarea</h1>
        Usuario id :
        <input
          type='number'
          value={this.props.user_id}
          onChange={this.changeUserId}
        />
        <br /> <br />
        Titulo :
        <input value={this.props.title} onChange={this.changeTitle} />
        <br />
        <br />
        <button type='button' disabled={this.disabled()} onClick={this.save}>
          Guardar
        </button>
        {this.showAction()}
      </div>
    );
  }
}
const mapStateToProps = ({ homeworksReducer }) => homeworksReducer;
export default connect(mapStateToProps, homeworksActions)(Save);
