import React from 'react';
import { connect } from 'dva';

function AddTest() {
  return (
    <div>
      添加考试
    </div>
  );
}

AddTest.propTypes = {
};

export default connect()(AddTest);
