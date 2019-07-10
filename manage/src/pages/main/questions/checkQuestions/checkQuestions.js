import React from 'react';
import { connect } from 'dva';

function CheckQuestions() {
  return (
    <div>
      查看试题
    </div>
  );
}

CheckQuestions.propTypes = {
};

export default connect()(CheckQuestions);
