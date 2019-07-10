import React from 'react';
import { connect } from 'dva';

function AddQuestions() {
  return (
    <div>
      添加试题
    </div>
  );
}

AddQuestions.propTypes = {
};

export default connect()(AddQuestions);
