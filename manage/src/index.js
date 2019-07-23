import dva from 'dva';
//引入全局样式
import './index.css';
//引入antd样式
import { message } from 'antd';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

// 1. Initialize
const app = dva(createLoading());

// 2. Plugins
app.use({
    //查看action前后的状态
    // onAction: createLogger(),
    // 全局报错信息
    onError: (e) => {
        message.error(e.message, /* duration */3);
    }
});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/getQuestions').default);
app.model(require('./models/addQuestions').default);
app.model(require('./models/setQuestions').default);
app.model(require('./models/classQuestions').default);
app.model(require('./models/userDisplay').default);
app.model(require('./models/addTest').default);
app.model(require('./models/addUser').default);
app.model(require('./models/classManagement').default);
app.model(require('./models/classroomManagement').default);
app.model(require('./models/marking').default);
app.model(require('./models/studentManagement').default);
app.model(require('./models/global').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
