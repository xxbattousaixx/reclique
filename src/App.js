import logo from './logo.svg';
import './App.css';
import myData from './data.json';
//import { Form, FormText, FormGroup, Label, Col, Button, Input } from 'reactstrap';
import React, { useEffect } from "react";



export default function App() {

  let myDataCopy = myData;
  function handleSubmit(e) {
    e.preventDefault();

    console.log(myData.title);
    console.log(myDataCopy);
  }
  
  useEffect(() => {
    const onClick = () => {
      console.log("body clicked");
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);
  

  return <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" id="logo" />
    </header>
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
    </div>;
    };

/*
https://thewebdev.info/2021/07/24/how-to-add-a-click-handler-to-the-body-element-from-within-a-react-component/

https://reactjs.org/docs/handling-events.html

*/