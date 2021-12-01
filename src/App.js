import logo from './logo.svg';
import './App.css';
import { Form, FormText, FormGroup, Label, Col, Button, Input } from 'reactstrap';
import React from "react";
import axios from "axios";

const baseURL = "https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json";

export default function App() {
  const [post, setPost] = React.useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    let myData = post;
    console.log(myData);
  };
  React.useEffect(() => {
  
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });


    
  

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
      <Button type="submit">Submit</Button>
    </form>
    </div>;
    };

/*
https://thewebdev.info/2021/07/24/how-to-add-a-click-handler-to-the-body-element-from-within-a-react-component/

https://reactjs.org/docs/handling-events.html

*/