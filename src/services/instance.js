import request from '@/utils/request';
import setting from '@/defaultSettings';

export async function queryInstance() {
    const url = `http://${setting.backEndDB.ip}:${setting.backEndDB.port}/instance`;        
    return request(url, {
      method: 'GET',
    });
  }
  
  export async function createInstance(task) {
    const url = `http://${setting.backEndDB.ip}:${setting.backEndDB.port}/instance`; 
    return request(url, {
      method: 'POST',
      body: {
        task: task,
      },
    });
  }