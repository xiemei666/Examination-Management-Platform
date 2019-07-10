import React from 'react';
import { connect } from 'dva';

function ClassQuestions() {
  return (
    <div>
      试题分类
    </div>
  );
}

ClassQuestions.propTypes = {
};

export default connect()(ClassQuestions);
