import React from 'react';
import { connect } from 'dva';

function StudentManagement() {
  return (
    <div>
      学生管理
    </div>
  );
}

StudentManagement.propTypes = {
};

export default connect()(StudentManagement);
