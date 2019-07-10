import React from 'react';
import { connect } from 'dva';

function AddDisplay() {
  return (
    <div>
      用户展示
    </div>
  );
}

AddDisplay.propTypes = {
};

export default connect()(AddDisplay);
