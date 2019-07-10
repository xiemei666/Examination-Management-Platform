import React from 'react';
import { connect } from 'dva';

function ClassroomManagement() {
  return (
    <div>
      教室管理
    </div>
  );
}

ClassroomManagement.propTypes = {
};

export default connect()(ClassroomManagement);
