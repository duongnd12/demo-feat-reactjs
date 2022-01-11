import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

  export const setJob = (payload: any) => {
    return {
      type: SET_JOB,
      payload,
    };
  };
  
  export const addJob = (payload: string) => {
    return {
      type: ADD_JOB,
      payload,
    };
  };
  
  export const deleteJob = (payload: string) => {
    return {
      type: DELETE_JOB,
      payload,
    };
  };

   