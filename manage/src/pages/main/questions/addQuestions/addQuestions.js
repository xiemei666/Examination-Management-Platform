import React from 'react';
import { connect } from 'dva';
import styles from './addQuestions.scss'
function AddQuestions() {
  return (
    <div>
      <h2>添加试题</h2>
      <div className=''>

      </div>
    </div>
  );
}

AddQuestions.propTypes = {
};

export default connect()(AddQuestions);
