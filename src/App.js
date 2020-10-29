import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increValue, decreValue } from './components/store/action';

function App() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch(increValue())}>Plus</button>
      <button onClick={() => dispatch(decreValue())}>Minus</button>

    </div>
  );
}

export default App;
