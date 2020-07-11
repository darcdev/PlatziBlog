import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as homeworksActions from '../../actions/homeworksActions';

class Save extends Component {
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  };
  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
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
        <button type='button'>Guardar</button>
      </div>
    );
  }
}
const mapStateToProps = ({ homeworksReducer }) => homeworksReducer;
export default connect(mapStateToProps, homeworksActions)(Save);
