import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import LoginPage from './pages/login/LoginPage'
import Main from './pages/main/main'
import { connect } from 'dva';
import notFound from "./pages/404"
import Excel from "./components/excel/excel"
// 引入国际化
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import ja from 'react-intl/locale-data/ja';
import ru from 'react-intl/locale-data/ru';
import zhCN from '@/lang/zh-CN.js';
import enUS from '@/lang/en-US.js'
import jaJP from '@/lang/ja-JP.js'
import ruRU from '@/lang/ru-RU.js'

// 配置国际化字典
const localMap = {
  en: enUS,
  zh: zhCN,
  ja: jaJP,
  ru: ruRU
}
addLocaleData([...en, ...zh, ...ja, ...ru]);

const mapStateToProps = state => {
  return {
    locale: state.global.locale
  }
}

let RouterView = connect(mapStateToProps)((props) => {
  return (
    <IntlProvider locale={props.locale} messages={localMap[props.locale]}>
      <Router history={props.history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={Main} />
          <Route path="/excel" component={Excel} />
          {/* 添加403和404页面 */}
          <Route path="/403" render={props => {
            return <p>你无权访问当前页面</p>
          }}></Route>
          <Route path="/404" component={notFound}></Route>
          <Redirect from="/" exact to="/main" />
        </Switch>
      </Router>
    </IntlProvider >
  )
})
function RouterConfig({ history }) {
  return <RouterView history={history} />
}
export default RouterConfig;
