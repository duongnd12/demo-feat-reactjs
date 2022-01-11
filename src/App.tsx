// import { useRef, useEffect } from "react";
// import { useStore, actions } from "./store";
// import Video from "./Video";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "antd";
import "./App.css";
import { Create, Read, Update, Delete } from "./components/CRUD";
import { createContext, useState } from "react";
import Post from "./pages/Post";
import Counter from "./components/ReduxToolkit/feature/counter/Couter";
import Countdown from "./components/ReduxToolkit/feature/counter/Countdown";

export const AppContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({} as any);

const App = () => {
  //   const [state, dispatch] = useStore();
  //   const { todos, todoInput } = state;
  //   const inputRef = useRef<any>();

  //   const handleAdd = () => {
  //     dispatch(actions.addTodo(todoInput));
  //     dispatch(actions.setTodoInput(""));
  //   };

  //   const handleEdit = () => {};

  //   const handleDelete = () => {
  //     dispatch(actions.deleteTodo(todoInput));
  //   };

  //   const videoRef = useRef<any>()

  //   const handlePlay = () => {
  //       videoRef.current.play()
  //   }

  //   useEffect(() => {
  //     console.log(videoRef.current);

  // }, [])

  //   const handlePause = () => {
  //     videoRef.current.pause()

  //   }

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Counter />

      <Countdown />
    </>

    // REDUCER AND CONTEXT
    // <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    //   <Router>
    //     <div className="main">
    //       <h2>React CRUD Operations</h2>
    //       <div>
    //         <Route exact path="/" component={Read} />
    //         <Route exact path="/create" component={Create} />
    //         <Route exact path="/update/:id" component={Update} />
    //         <Route exact path="/delete/:id" component={Delete} />
    //         <Route exact path="/post" component={Post} />
    //       </div>
    //     </div>
    //   </Router>
    // </AppContext.Provider>

    // <div style={{ display: "flex", justifyContent: "space-around" }}>
    //   <div>
    //   <Video ref={videoRef}/>
    //   <button onClick={handlePlay}>Play</button>
    //   <button onClick={handlePause}>Pause</button>
    //   </div>
    //   <div>
    //     <input
    //       ref={inputRef}
    //       value={state.todoInput}
    //       placeholder="Enter todo..."
    //       onChange={(e) => {
    //         dispatch(actions.setTodoInput(e.target.value));
    //       }}
    //     />

    //     <button onClick={handleAdd}>Add</button>

    //     <ul>
    //       {todos.map((todo: string, index: any) => {
    //         return (
    //           <li key={index}>
    //             {todo}
    //             <span
    //               style={{
    //                 color: "yellowgreen",
    //                 marginLeft: "10px",
    //                 cursor: "pointer",
    //               }}
    //               onClick={handleEdit}
    //             >
    //               | Edit
    //             </span>
    //             <span
    //               style={{
    //                 color: "red",
    //                 marginLeft: "10px",
    //                 cursor: "pointer",
    //               }}
    //               onClick={handleDelete}
    //             >
    //               | Delete
    //             </span>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    //   {/* <button onClick={context.toggleColor}>Toggle</button>
    //         <Context/> */}
    //   {/* <Clock title = 'Bây giờ là: '/> */}
    //   {/* <h1>{count}</h1> */}
    //   {/* <CountDown onIncrease={handleClick}/> */}
    //   {/* <button onClick={handleStart}>Start</button>
    //         <button onClick={handleStop}>Stop</button> */}
    // </div>
  );
};

export default App;
