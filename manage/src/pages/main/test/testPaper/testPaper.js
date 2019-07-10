import React from 'react';
import { connect } from 'dva';

function TestPaper() {
  return (
    <div>
      试卷列表
    </div>
  );
}

TestPaper.propTypes = {
};

export default connect()(TestPaper);
