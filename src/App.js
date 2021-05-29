import './App.css';
import { useState } from 'react';

// useState use only in function component
// cannot the put the hooks inside the if statement
// useState return a array
function App() {
  const arr = useState (4);
  return (
    <>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </>
  );
}

export default App;
