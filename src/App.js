import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import UserInfoContext from '.';
import './App.css';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const userInfo = useContext(UserInfoContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Hello World!");
    // 無限ループ
    // setCount(count + 1);
  }, [count])

  const handleRef = () => {
    console.log(ref);
    console.log("Current Input Value : ",ref.current.value);
    console.log("Current Input Element Offset-Height : ",ref.current.offsetHeight);
  }

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <div>
        <h2>UseState, UseEffect</h2>
        <button onClick={handleClick}>+</button>
        <p>{count}</p>
      </div>
      <hr />
      <div>
        <h2>UseContext</h2>
        <div>
          <h3>UserInfo</h3>
          <p>{userInfo.name}</p>
          <p>{userInfo.age}</p>
        </div>
      </div>
      <hr />
      <div>
        <h2>UseRef</h2>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>Check the value on console!</button>
      </div>
      <hr />
      <div>
        <h2>UseReducer</h2>
        <p>{state}</p>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
      </div>
    </div>
  );
}

export default App;
