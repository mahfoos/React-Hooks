import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {

  /*useState
  useState use only in function component
  cannot the put the hooks inside the if statement
  useState return a array
  const [count, setCount] = useState(4); // first element is current state 2nd one is update

  function decrementCount() {
    //  setCount(count-1)
    setCount((prevCount) => prevCount - 1);
  }

  function increseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  */
  // USEEFFECT
  // const [resourceType, setResourceType ] = useState('posts')
  // const [items, setItems] = useState([]);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  // },[])

  // useEffect(() => {
  //     fetch(`http://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then (response => response.json())
  //     .then (json => setItems(json))
  // },[resourceType])

  //Use ref
  const [name,setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current +1
  })
  return (
    <>
      {/* <button className="btn-" onClick={decrementCount}>
        -
      </button>
      <span> {count}</span>
      <button className="btn+" onClick={increseCount}>
        +
      </button> */}

      {/* <div>{windowWidth}</div> */}

      {/* <div>
        <button onClick = {() => setResourceType('posts')}>Posts</button>
        <button onClick = {() => setResourceType('users')}>Users</button>
        <button onClick = {() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map (item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}


      <input value = {name} onChange = {e => setName(e.target.value)} />
      <div>My Name is {name}</div>
      <div>I rendered {renderCount.current}</div>
    </>
  );
}

export default App;
