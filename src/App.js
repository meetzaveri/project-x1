import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import {routes} from './routes/routes';
import Homepage from './containers/HomeContainer';
import MobileScreenContainer from './containers/MobileScreenContainer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import Rootreducer from './store/store';
import mySaga from './sagas/sagas'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={routes.index} component={Homepage}/>
            <Route exact path={routes.resources.mobile} component={MobileScreenContainer}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
