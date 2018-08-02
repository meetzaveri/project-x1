export const mb_action_types = {
  addresource: 'mobile/ADD_RESOURCE',
  fetchResourceRequested: 'mobile/FETCH_RESOURCES_REQUESTED',
  fetchResourceSucceded: 'mobile/FETCH_RESOURCES_SUCCEEDED',
  fetchResourceFailed: 'mobile/FETCH_RESOURCES_FAILED',
  postResourceRequested: 'mobile/POST_RESOURCES_REQUESTED',
  postResourceSucceded: 'mobile/POST_RESOURCES_SUCCEEDED',
  postResourceFailed: 'mobile/POST_RESOURCES_FAILED'
};

export const addResourceForMobile = (resourceObj, loadSuccess) => ({
  type: mb_action_types.addresource,
  payload: resourceObj,
  onLoadCb: (success, err) => loadSuccess(success, err)
})

export const fetchResourceRequested = (params) => ({type: mb_action_types.fetchResourceRequested, payload: params});
export const fetchResourceSucceded = (data) => ({type: mb_action_types.fetchResourceSucceded, payload: data});
export const fetchResourceFailed = (err) => ({type: mb_action_types.fetchResourceFailed, payload: err})

export const postResourceRequested = (params) => ({type: mb_action_types.postResourceRequested, payload: params});
export const postResourceSucceded = (data) => ({type: mb_action_types.postResourceSucceded, payload: data});
export const postResourceFailed = (err) => ({type: mb_action_types.postResourceFailed, payload: err})