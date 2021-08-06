import React,{useState} from 'react';
import './App.css'

const App =()=> {
  const state = useState() ;
  const [count,setCount] = useState(1);

  //using hooks

const IncNum = ()=>{
 setCount(count + 1);

};

  return(
    <>
    <h1> {count}</h1>
    <button onClick={IncNum}>Click</button>
    </>
  );
};
export default  App;