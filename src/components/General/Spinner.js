import React from 'react';
import '../../styles/spinner.css';

const Spinner = function Spinner() {
  return (
    <div className='center'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Spinner;
