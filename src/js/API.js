import axios from 'axios';

import { BASE_URL } from './variables';

export async function getRandomDish() {
  try {
    let arr = [];
    for (let i = 0; i < 12; i += 1) {
      const dish = await axios(BASE_URL);
      arr.push(dish);
    }

    const promiseArr = await Promise.all(arr).then(response => {
      return response;
    });
    return promiseArr;
  } catch (error) {
    throw new Error(error);
  }
}
