import React, {Component} from 'react';
import moment from 'moment';
import {
  Modal,
  Button,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete,
  DatePicker,
  TimePicker
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

const DropDownForAdminData = (props) => {
  const adminAccounts = ['Available', 'In use', 'Broken'];

  // console.log('Appinstances', adminAccounts);
  if (adminAccounts) {
    const accounts = adminAccounts.map((item, index) => <option key={index} value={item}>{item}</option>)
    return (accounts)
  } else {
    const accounts = <option value="None">Account Name</option>
    return (accounts)
  }
}

class Createform extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false
  }

  showModal = () => {
    this.setState({visible: true});
  }

  handleOk = () => {
    this.setState({ModalText: 'The modal will be closed after two seconds', confirmLoading: true});
    setTimeout(() => {
      this.setState({visible: false, confirmLoading: false});
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible: false});
  }

  onHandleTimeRange = (time, timeString) => {
    console.log(time, timeString);
    this
      .props
      .actions
      .handleFormTimeRange(timeString);
  }

  render() {

    const {visible, confirmLoading, ModalText} = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 8
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      }
    };
    return (
      <div
        style={{
        background: 'transparent',
        padding: '5px 30px'
      }}>
        <Button type="primary" onClick={this.showModal}>Create a resource</Button>
        <Modal
          footer={null}
          title="Add a resource slot"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}>
          <form
            onSubmit={(e) => {
            e.preventDefault();
            this
              .props
              .actions
              .onCreateResourceForAndroid(e);
          }}>

            <FormItem {...formItemLayout} label="Device info">
              <input
                type="text"
                required
                name="formValueDevice_info"
                className="form-control"
                id="formValueDevice_info"
                placeholder="Device info"
                value={this.props.state.formValueDevice_info}
                onChange={e => {
                this
                  .props
                  .actions
                  .onHandleCreateResourceFormAndroid(e);
              }}/>
            </FormItem>

            <FormItem {...formItemLayout} label="Select Status">
              <div className="form-group">
                <div className="checkbox">
                  <select
                    name="formValueStatus"
                    value={this.props.state.formValueStatus}
                    onChange={e => {
                    this
                      .props
                      .actions
                      .onHandleCreateResourceFormAndroid(e);
                  }}>
                    <DropDownForAdminData {...this.props}/></select>
                </div>
              </div>

            </FormItem>

            <FormItem {...formItemLayout} label="Allocate time">
              <TimePicker
                onChange={this.onHandleTimeRange}
                defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}/>
            </FormItem>

            <FormItem {...formItemLayout} label="Team name">
              <input
                type="text"
                required
                name="formValueTeamName"
                className="form-control"
                id="formValueTeamName"
                placeholder="Team name"
                value={this.props.state.formValueTeamName}
                onChange={e => {
                this
                  .props
                  .actions
                  .onHandleCreateResourceFormAndroid(e);
              }}/>
            </FormItem>

            <FormItem {...formItemLayout} label="Description">
              <textarea
                type="email"
                required
                name="formValueDescription"
                className="form-control"
                id="formValueDescription"
                placeholder="Description"
                value={this.props.state.formValueDescription}
                onChange={e => {
                this
                  .props
                  .actions
                  .onHandleCreateResourceFormAndroid(e);
              }}/>
            </FormItem>

            <button type="submit" className="btn btn-default">
              Add
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Createform