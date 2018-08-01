import React, {Component} from 'react';
import MobileScreenComponent from '../components/mobile/Mobilescreen'
import {connect} from 'react-redux'
import {addResourceForMobile} from '../store/actions/mobile'

class MobileScreen extends Component {
  state = {
    formValueStatus: '',
    formValueDescription: '',
    formValueDevice_info: '',
    formValueTeamName: '',
    formTimeSlotInput: '',
    mobileType: ''
  };
  onHandleCreateResourceFormAndroid = event => {
    console.log('event', event, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value, mobileType: 'Android'});
  }

  onCreateResourceForAndroid = event => {
    const {formValueDevice_info, formValueStatus, formTimeSlotInput, formValueTeamName, formValueDescription} = this.state;
    const sendObj = {
      deviceInfo: formValueDevice_info,
      status: formValueStatus,
      timeSlot: formTimeSlotInput,
      teamName: formValueTeamName,
      description: formValueDescription,
      loading: false
    }
    this
      .props
      .addresource(sendObj);
  }

  handleFormTimeRange = (timestring) => {
    console.log('Timestring', timestring);
    this.setState({formTimeSlotInput: timestring})
  }
  onHandleLoading = () => {
    this.setState({})
  }
  render() {
    const {onHandleCreateResourceFormAndroid, onCreateResourceForAndroid, handleFormTimeRange} = this;
    const resources = this.props.mobile_resources;
    const actions = {
      onHandleCreateResourceFormAndroid,
      onCreateResourceForAndroid,
      handleFormTimeRange
    }
    return (<MobileScreenComponent
      resources={resources}
      actions={actions}
      state={this.state}/>);
  }
}

const mapStateToProps = state => ({mobile_resources: state.mobile})
const mapDispatchToProps = dispatch => {
  return {
    addresource: (obj) => dispatch(addResourceForMobile(obj, (success, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Success from dispatch', success)
      }
    }))
  }
}

const MobileScreenConnector = connect(mapStateToProps, mapDispatchToProps)(MobileScreen)

export default MobileScreenConnector;