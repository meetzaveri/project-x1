let responseObjToBeSend = {
  message: ''
}

let id = 1;
export const fakeApiCall_A = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('IN API', params);
      let data = null;

      if (params.method === 'GET') {
        data = [
          {
            id: 'f7rcnlvcgieaul6g446o97',
            deviceInfo: 'G7',
            status: 'Available',
            timeSlot: '07:00:00',
            teamName: 'Arkham',
            startTime: '2018-08-6 18:44',
            endTime: '2018-08-6 19:44',
            description: 'None',
            mobileType: 'Android'
          }
        ];
      } else if (params.method === 'POST') {
        id++;
        params.data.id = id;
        data = [params.data];

        console.log('DATA IN POST', data)
      } else if (params.method === 'PUT') {
        data = [params.data];
      }

      responseObjToBeSend = {
        message: 'Data Fetched successfully',
        data
      }
      if (data) {
        resolve(responseObjToBeSend);
      } else {
        let error = 'Something went wrong';
        responseObjToBeSend.message = error
        reject(responseObjToBeSend);
      }
    }, 2000)
  })
}
