import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import * as homeworksActions from '../../actions/homeworksActions';
class Homeworks extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.homeworks).length) {
      this.props.getHomeworks();
    }
  }
  componentDidUpdate() {
    const { homeworks, loading, getHomeworks } = this.props;
    if (!Object.keys(homeworks).length && !loading) {
      console.log(this.props);
      getHomeworks();
    }
  }
  showContent = () => {
    const { homeworks, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal mensaje={error} />;
    }

    return Object.keys(homeworks).map((user_id) => (
      <div>
        <h2>Usuario {user_id}</h2>{' '}
        <div className='homeworks_container'>{this.putHomeworks(user_id)}</div>
      </div>
    ));
  };
  putHomeworks = (user_id) => {
    const { homeworks, changeCheck, remove } = this.props;
    const by_user = {
      ...homeworks[user_id],
    };
    return Object.keys(by_user).map((tar_id) => (
      <div key={tar_id}>
        <input
          type='checkbox'
          defaultChecked={by_user[tar_id].completed}
          onChange={() => changeCheck(user_id, tar_id)}
        />
        {by_user[tar_id].title}
        <button className='m_left'>
          <Link to={`/tareas/guardar/${user_id}/${tar_id}`}>Editar </Link>
        </button>
        <button className='m_left' onClick={() => remove(tar_id)}>
          Eliminar
        </button>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <button>
          <Link to='/tareas/guardar'>Agregar</Link>
        </button>
        {this.showContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ homeworksReducer }) => homeworksReducer;
export default connect(mapStateToProps, homeworksActions)(Homeworks);
