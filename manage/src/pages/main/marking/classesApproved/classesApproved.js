import React from 'react';
import { connect } from 'dva';

function ClassesApproved() {
  return (
    <div>
      待批班级
    </div>
  );
}

ClassesApproved.propTypes = {
};

export default connect()(ClassesApproved);
