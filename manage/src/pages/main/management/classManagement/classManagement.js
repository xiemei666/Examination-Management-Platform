import React from 'react';
import { connect } from 'dva';

function ClassManagement() {
  return (
    <div>
      班级管理
    </div>
  );
}

ClassManagement.propTypes = {
};

export default connect()(ClassManagement);
