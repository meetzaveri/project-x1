import React, {Component} from 'react';
import DeviceScreenComponent from '../components/device/Devicescreen'

class Devicescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<DeviceScreenComponent/>);
  }
}

export default Devicescreen;