export const mb_action_types = {
  addresource: 'mobile/ADD_RESOURCE'
};

export const addResourceForMobile = (resourceObj, loadSuccess) => ({
  type: mb_action_types.addresource,
  payload: resourceObj,
  onLoadCb: (success, err) => loadSuccess(success, err)
})
