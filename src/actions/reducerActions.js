import {DECREMENT, INCREMENT, LOG_DATA} from '../reducers/types'

export const increment = () => {
    return{
      type: INCREMENT
    };
  }

export const decrement = () => {
    return{
      type: DECREMENT
    };
}

export const logRecord = (data) => {

  return {
    type: LOG_DATA
  }
}