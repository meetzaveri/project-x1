import React, {Component} from 'react';
import MobileScreenComponent from '../components/mobile/Mobilescreen'
import {connect} from 'react-redux'
import {postResourceRequested, fetchResourceRequested} from '../store/actions/mobile'
import {fakeApiCall_A} from '../services/index';

class MobileScreen extends Component {
  state = {
    formValueStatus: '',
    formValueDescription: '',
    formValueDevice_info: '',
    formValueTeamName: '',
    formTimeSlotInput: '',
    mobileType: ''
  };
  async componentDidMount() {
    this
      .props
      .fetchResource();
  }
  onHandleCreateResourceFormAndroid = event => {
    console.log('event', event, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value, mobileType: 'Android'});
  };

  onHandleEditForAndroid = (event) => {}

  onCreateResourceForAndroid = (event, cb) => {
    const {
      formValueDevice_info,
      formValueStatus,
      formTimeSlotInput,
      formValueTeamName,
      formValueDescription,
      mobileType
    } = this.state;
    const sendObj = {
      deviceInfo: formValueDevice_info,
      status: formValueStatus,
      timeSlot: formTimeSlotInput,
      teamName: formValueTeamName,
      description: formValueDescription,
      loading: false,
      mobileType: mobileType
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

  onHandleEditForAndroid = () => {
    console.log('On edit')
  }

  resetAllFormValues = () => {
    this.setState({formValueStatus: '', formValueDescription: '', formValueDevice_info: '', formValueTeamName: '', formTimeSlotInput: ''})
  }
  render() {
    const {onHandleCreateResourceFormAndroid, onCreateResourceForAndroid, handleFormTimeRange, resetAllFormValues, onHandleEditForAndroid} = this;
    let newAddedResource = this.props.mobile_resources;
    console.log('newAddedResources', newAddedResource);
    let {data, onLoading, onLoadingFormSubmit, closeModal} = this.props.fetchedResources;
    console.log('fetchedResources', this.props.fetchedResources);

    const actions = {
      onHandleCreateResourceFormAndroid,
      onHandleEditForAndroid,
      onCreateResourceForAndroid,
      handleFormTimeRange,
      resetAllFormValues
    };
    return (<MobileScreenComponent
      resources={data}
      onLoadingForAndroid={onLoading}
      onLoadingFormSubmit={onLoadingFormSubmit}
      closeModal={closeModal}
      actions={actions}
      state={this.state}/>);
  }
}

const mapStateToProps = state => ({mobile_resources: state.mobile, fetchedResources: state.res_req_mob});
const mapDispatchToProps = dispatch => {
  return {
    addresource: (obj) => dispatch(postResourceRequested({method: 'POST', data: obj})),
    fetchResource: () => dispatch(fetchResourceRequested({method: 'GET'}))
  }
}

const MobileScreenConnector = connect(mapStateToProps, mapDispatchToProps)(MobileScreen)

export default MobileScreenConnector;