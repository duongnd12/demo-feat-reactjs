import React, { useReducer, useRef } from "react";
import reducer, {initState} from "./reducer"
import {setJob, addJob, deleteJob} from "./actions"
import logger from "./logger";
//useReducer
// 1. init state
// 2. actions
// 3. Reducer
// 4. dispatch

const Reducer = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const inputRef = useRef<any>();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setJob(e.target.value));
        }}
        placeholder="Enter todo..."
        style={{ outline: "none", height: "30px", marginRight: "10px" }}
      />
      <button style={{ height: "35px" }} onClick={handleSubmit}>
        Add
      </button>
      <ul>
        {jobs.map((job: string, index: string) => (
          <li key={index}>{job} 
            <span style={{cursor: 'pointer', marginLeft: '10px', color:'red'}} onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reducer;
