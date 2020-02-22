import {DECREMENT, INCREMENT, LOG_DATA} from './types'
let count= 10;

const counterReducer = (state=count, action) => {
  switch (action.type) {
    case INCREMENT: count++;
      break;
      
    case DECREMENT: count--;
      break;

    case LOG_DATA: count += 2;
      break;
  }
  return count;
}

export default counterReducer;