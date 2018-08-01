import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import {routes} from './routes/routes';
import Homepage from './containers/HomeContainer';
import MobileScreenContainer from './containers/MobileScreenContainer';
import DeviceScreenContainer from './containers/DeviceScreenContainer';
import {createStore} from 'redux';
import Rootreducer from './store/store';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const store = createStore(Rootreducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={routes.index} component={Homepage}/>
            <Route exact path={routes.resources.mobile} component={MobileScreenContainer}/>
            <Route exact path={routes.resources.devices} component={DeviceScreenContainer}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
