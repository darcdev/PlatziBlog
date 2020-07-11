import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as homeworksActions from '../../actions/homeworksActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
class Save extends Component {
  componentDidMount() {
    const {
      match: {
        params: { userId, tar_id },
      },
      homeworks,
      changeUserId,
      changeTitle,
      clean,
    } = this.props;
    if (userId && tar_id) {
      const homework = homeworks[userId][tar_id];
      changeUserId(homework.userId);
      changeTitle(homework.title);
    } else {
      clean();
    }
  }
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  };
  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
  };
  save = () => {
    const {
      match: {
        params: { userId, tar_id },
      },
      homeworks,
      user_id,
      title,
      addHomework,
      edit,
    } = this.props;
    const newHomework = {
      userId: user_id,
      title,
      completed: false,
    };
    if (userId && tar_id) {
      const homework = homeworks[userId][tar_id];
      const editHomework = {
        ...newHomework,
        completed: homework.completed,
        id: homework.id,
      };
      edit(editHomework);
    } else {
      addHomework(newHomework);
    }
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
        {this.props.back ? <Redirect to='/tareas/' /> : ''}
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
