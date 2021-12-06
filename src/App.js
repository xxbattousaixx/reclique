import logo from './logo.svg';
import './App.css';
import { Form, Button, Container, Row, Col  } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'jquery/src/jquery';
import Questions from './Questions';

export default function App() {
var p = 0;
const [questions, getQuestions] = useState('');
const [page, getPage] = useState('');

const baseURL = "https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json";


useEffect(()=>{
getAllQuestions();
getPage(p);
},[p]);


const getAllQuestions = () => {
  axios.get(baseURL)
  .then((response)=>{
    const allQuestions = response.data;
    getQuestions(allQuestions);
  })
  .catch(error => console.error('Error: '+{error}));
};

const submitButton = (e) => {
  console.log('submit');
};

const onNext = (e) => {
  if(p===0){
    p++;
    getPage(p);
  }else if(p<questions.length-1){
    p++;
    console.log('next');
    getPage(p);
  };
}




const onPrev = (e) => {

  if(p>0){
  p--;

  if (p>=0){
    console.log('prev');

    getPage(p);  
  };
}else if (p===0){
  getPage(p);
}

};


  return (<div className="App" id="con1">

<Questions questions={questions} page={page}/>

{/* 
      <Row><br/>
<Col><label><p>hhhhh</p></label></Col>
</Row><br/> */}








<Container id="cf" fluid="md sm xs lg xl">
<br/>





<hr/>
<br/>
<br/>




<Row xs={3} md={3} lg={3} sm={3}><Col xs={3} md={3} lg={3} sm={3}></Col>
<Col xs={3} md={3} lg={3} sm={3}></Col>
<Col xs={3} md={3} lg={3} sm={3}>&nbsp;</Col>
<Col xs={3} md={3} lg={3} sm={3} id="vl">&nbsp;</Col>
</Row>

<Row xs={3} md={3} lg={3} sm={3} id="bb">
<Col xs={3} md={3} lg={3} sm={3}></Col>
<Col xs={3} md={3} lg={3} sm={3}></Col>
<Col xs={3} md={3} lg={3} sm={3}> Dr</Col>
<Col xs={3} md={3} lg={3} sm={3} id="vl">Cr</Col>
</Row>


<Row xs={3} md={3} lg={3} sm={3}><Col xs={3} md={3} lg={3} sm={3}></Col>
<Col xs={3} md={3} lg={3} sm={3}></Col>
<Col xs={3} md={3} lg={3} sm={3}>&nbsp;</Col>
<Col xs={3} md={3} lg={3} sm={3} id="vl">&nbsp;</Col>
</Row>



<Form onSubmit={submitButton}>

<Row xs={3} md={3} lg={3} sm={3}>
< Col xs={3} md={3} lg={3} sm={3} ><Form.Control type="date"/> </Col>< Col xs={3} md={3} lg={3} sm={3} >    <Form.Select>
    <option>Default select</option>
  </Form.Select></Col>
   < Col xs={3} md={3} lg={3} sm={3} >  <Form.Control type="text" placeholder="Normal text" />
  </Col><Col xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control type="text" placeholder="Normal text" />
  </Col>
</Row> 

<Row xs={3} md={3} lg={3} sm={3}>
< Col xs={3} md={3} lg={3} sm={3} ><Form.Control type="date"/> </Col>< Col xs={3} md={3} lg={3} sm={3} >    <Form.Select>
    <option>Default select</option>
  </Form.Select></Col>
   < Col xs={3} md={3} lg={3} sm={3} >  <Form.Control type="text" placeholder="Normal text" />
  </Col><Col xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control type="text" placeholder="Normal text" />
  </Col>
</Row> 

<br/>
<br/><hr/>
<br/>
<br/>
<Row xs={4} md={4} lg={4} sm={4}>
<Col xs={2} md={2} lg={2} sm={2}>

  </Col>
  <Col xs={4} md={4} lg={4} sm={4}>
<Button onClick={onPrev}>Previous</Button>
  </Col>
  <Col xs={4} md={4} lg={4} sm={4}>

<Button onClick={onNext}>Next</Button>

  </Col>
  <Col xs={2} md={2} lg={2} sm={2}>

  </Col>
  </Row>
<br/>
<br/>
<hr/>
<br/>
<br/>
  <Button type="submit">Submit</Button>


</Form>
<br/>
<br/>

  </Container>

    </div>
  );
} 

  