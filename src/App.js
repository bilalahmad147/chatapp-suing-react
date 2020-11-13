import React from 'react'
import './App.css';
import { useSelector } from 'react-redux'

function App() {

  const currentUser = useSelector(state => state.users)
  console.log(currentUser)

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
