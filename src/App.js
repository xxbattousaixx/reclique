import logo from './logo.svg';
import './App.css';
import {Label, Input, Form, Button  } from 'reactstrap';
import React, { Component } from "react";
import axios from "axios";
import 'jquery/src/jquery';

const baseURL = "https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json";


function handleSubmit(e) {
  e.preventDefault();
};



  
  class App extends Component {
    state = {
      questions : []
    };

    componentDidMount() {
      const url = baseURL;
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ questions: data })
        console.log(this.state.questions[0].title)
       });
    }


    render() {


  return (<div className="App" id="con1">


    {this.state.questions.map((question) => (
<div>               {question.title}<br/>
              {question.description}  
              </div>           
        ))}


    <div class="row">
        




            <div class="col-2 col-lg-2 col-md-2 col-sm-2">

            </div>

            


            
    <div class="col-8 col-lg-8 col-md-8 col-sm-8">
      <div class="row">

<div class="col-12 col-lg-12 col-md-12 col-sm-12"><Label><p></p></Label></div>
</div><br/>
<div class="row">
<div class="col-3 col-lg-3 col-md-3 col-sm-3"></div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3"></div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3">&nbsp;</div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3" id="vl">&nbsp;</div>
</div>

<div class="row" id="bb">
<div class="col-3 col-lg-3 col-md-3 col-sm-3"></div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3"></div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3"> Dr</div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3" id="vl">Cr</div>
</div>

<div class="row">
<div class="col-3 col-lg-3 col-md-3 col-sm-3"></div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3"></div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3">&nbsp;</div>
<div class="col-3 col-lg-3 col-md-3 col-sm-3" id="vl">&nbsp;</div>
</div>


<Form onSubmit={handleSubmit}>
<div class="row">

< div class="col-3 col-lg-3 col-md-3 col-sm-3" ><Input type="date"> </Input></div>< div class="col-3 col-lg-3 col-md-3 col-sm-3" ><Input type="select"
   name="2A"
   id="select"
   autocomplete="off"
   required
   >
   <option>Carrots</option>
   <option>Peas</option>
   <option>Beans</option>
   <option>Pneumonoultramicroscopicsilicovolcanoconiosis</option>
   </Input></div>
   < div class="col-3 col-lg-3 col-md-3 col-sm-3" ><Input></Input></div><div class="col-3 col-lg-3 col-md-3 col-sm-3" id="vl"><Input></Input></div>
</div> 
<div class="row">
< div class="col-3 col-lg-3 col-md-3 col-sm-3" ><Input type="date"></Input></div>< div class="col-3 col-lg-3 col-md-3 col-sm-3" ><Input type="select"
   name="2A"
   id="select"
   autocomplete="off"
   required
   >
   <option>Carrots</option>
   <option>Peas</option>
   <option>Beans</option>
   <option>Pneumonoultramicroscopicsilicovolcanoconiosis</option>
</Input></div>
< div class="col-3 col-lg-3 col-md-3 col-sm-3" ><Input></Input></div>< div class="col-3 col-lg-3 col-md-3 col-sm-3" id="vl"><Input></Input></div>
</div> 

<br/>
<br/>
  <Button type="submit">Submit</Button>


</Form>


</div>


    <div class="col-2 col-lg-2 col-md-2 col-sm-2">

    </div>

  </div>

    </div>
  );
} 
}
    export default App;