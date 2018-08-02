import {mb_action_types} from '../actions/mobile'

export const resourcerequest_android = (state = {
  data: [],
  onLoading: false,
  onLoadingFormSubmit: false
}, action) => {
  switch (action.type) {
    case mb_action_types.fetchResourceRequested:
      state = {
        data: [],
        onLoading: true
      }
      return state;
    case mb_action_types.fetchResourceSucceded:

      console.log('Action in fetch request success', action);
      let resourceArr = action.resource.data;
      if (resourceArr) {
        state = {
          data: resourceArr,
          onLoading: false
        }
        return state;
      } else {
        state = {
          data: [],
          onLoading: false
        }
        return state;
      }

    case mb_action_types.fetchResourceFailed:
      state = {
        data: [],
        onLoading: false
      }
      console.log('Action in fetch request fail', action);
      return state;

    case mb_action_types.postResourceRequested:
      state = {
        ...state,
        onLoadingFormSubmit: true
      }
      return state;

    case mb_action_types.postResourceSucceded:
      console.log('POST REQUEST SUCCEEDED', action);
      let resourceData = action.resource.data[0];
      console.log('resourceData', resourceData);
      if (resourceData) {
        state = {
          data: [
            ...state.data,
            resourceData
          ],
          onLoading: false,
          onLoadingFormSubmit: false,
          closeModal: true
        }
      } else {
        state = {
          ...state,
          onLoading: true,
          onLoadingFormSubmit: false
        }
      }
      return state;

    case mb_action_types.postResourceFailed:
      console.log('POST REQUEST FAILED', action);
      state = {
        ...state,
        onLoading: false
      }
      return state;

    default:
      state = {
        ...state
      }
      return state
  }

}

export const mobile = (state = [], action) => {
  // console.log('Action ', action);

  switch (action.type) {
    case mb_action_types.addresource:
      {
        const {deviceInfo, status, timeSlot, teamName, description} = action.payload;
        console.log('SUCCESS', deviceInfo, status, timeSlot, teamName, description);
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