import React from 'react'
import './App.css';
import { useSelector } from 'react-redux'

function App() {

  const state = useSelector(state => state)

  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>Counter: {state.name}</h1>
    </div>
  );
}

export default App;
