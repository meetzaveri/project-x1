import {mb_action_types} from '../actions/mobile'

let initialState = {
  deviceInfo: '',
  status: '',
  timeSlot: '',
  teamName: '',
  description: ''
}

export const mobile = (state = [], action) => {
  console.log('Action ', action);

  switch (action.type) {
    case mb_action_types.addresource:
      {
        const {deviceInfo, status, timeSlot, teamName, description} = action.payload;
        console.log('SUCCESS FOR ADD RESOURCE', deviceInfo, status, timeSlot, teamName, description);
        let success = {
          message: 'success'
        };
        action.onLoadCb(success, null);
        return [
          ...state, {
            deviceInfo,
            status,
            timeSlot,
            teamName,
            description
          }
        ]
      }
    default:
      return state
  }
}