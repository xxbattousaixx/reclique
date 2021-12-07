import './App.css';
import { Form, Button, Container, Row, Col  } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'jquery/src/jquery';
import Questions from './Questions';
import Results from './Results';


export default function App() {
var p = 0;
const [questions, getQuestions] = useState('');
const [page, getPage] = useState('');
const [sub, getSub] = useState('');
const [res, getRes] = useState('');
const [ans, getAns] = useState('');

const [d1, getD1] = useState('');
const [t1, getT1] = useState('');
const [cr1, getCr1] = useState('');
const [dr1, getDr1] = useState('');
const [d2, getD2] = useState('');
const [t2, getT2] = useState('');
const [dr2, getDr2] = useState('');
const [cr2, getCr2] = useState('');

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
const getAllSubmissions = () => {
  var submission = [];
  var d1v=parseInt(d1.slice(7,9)).toString()+"/"+d1.slice(3,5)
  var d2v=parseInt(d2.slice(7,9)).toString()+"/"+d2.slice(3,5)
 
  submission=[{
    'date': d1v,
    'type': t1,
    'Dr': dr1,
    'Cr':cr1
  },
  {
    'date': d2v,
    'type': t2,
    'Dr': dr2,
    'Cr':cr2

  }];

  console.log(submission);
  getSub(submission);
;
  
}

const updateD1 = (evt) => {
  getD1(evt.target.value.slice(2));
}
const updateT1 = (evt) => {
  getT1(evt.target.value);

}
const updateDr1 = (evt) => {
  getDr1(evt.target.value);
}
const updateCr1 = (evt) => {
  getCr1(evt.target.value);
}
const updateD2 = (evt) => {
  getD2(evt.target.value.slice(2));
}
const updateT2 = (evt) => {
  getT2(evt.target.value);
}
const updateDr2 = (evt) => {
  getDr2(evt.target.value);
}
const updateCr2 = (evt) => {
  getCr2(evt.target.value);
}
const submitButton = (e) => {

getAllSubmissions();
var result ='';

  getRes(result);
}

const onNext = (e) => {
  if(p<questions.length-1){
getAllSubmissions();

    p++;

if ((p>=0)&&(p<questions.length)){

//getSub()

getPage(p);  
p--;
  };
}else if (p===questions.length-1){
  getPage(p);
}

};




const onPrev = (e) => {

  if(p>0){
getAllSubmissions();

  p--;

  if ((p<=questions.length-1)&&(p>=0)){
//getSub()
    getPage(p);  
  };
}else if (p===0){
  getAllSubmissions();

  getPage(p);
}

};


  return (<div className="App" id="con1" key="main">

<Questions key="1" questions={questions} page={page}/>

{/* 
      <Row><br/>
<Col><label><p>hhhhh</p></label></Col>
</Row><br/> */}








<Container key="con" id="cf" fluid="md sm xs lg xl">
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




<Row xs={3} md={3} lg={3} sm={3}>
< Col xs={3} md={3} lg={3} sm={3} ><Form.Control defaultValue='' type="date" onChange={updateD1}/> </Col>< Col xs={3} md={3} lg={3} sm={3} >    <Form.Select  onChange={updateT1}> 
<option>cash</option>
    <option>revenue</option>
    <option>deferred</option>
    <option>receivable</option>
    <option>contra</option>
    <option>system-credit</option>
  </Form.Select></Col>
   < Col xs={3} md={3} lg={3} sm={3} >  <Form.Control onChange={updateDr1} defaultValue='' type="text" placeholder="Normal text" />
  </Col><Col xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control onChange={updateCr1} defaultValue='' type="text" placeholder="Normal text" />
  </Col>
</Row> 

<Row xs={3} md={3} lg={3} sm={3}>
< Col xs={3} md={3} lg={3} sm={3} ><Form.Control onChange={updateD2} defaultValue='' type="date"/> </Col>< Col xs={3} md={3} lg={3} sm={3} >    <Form.Select onChange={updateT2}>
<option>cash</option>
    <option>revenue</option>
    <option>deferred</option>
    <option>receivable</option>
    <option>contra</option>
    <option>system-credit</option>
  </Form.Select></Col>
   < Col xs={3} md={3} lg={3} sm={3} >  <Form.Control onChange={updateDr2}  defaultValue='' type="text" placeholder="Normal text" />
  </Col><Col xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control onChange={updateCr2} defaultValue='' type="text" placeholder="Normal text" />
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
  <Button onClick={submitButton}>Submit</Button>


<br/>
<br/>

  </Container>
<Results key='2' page={page} d1={d1} t1={t1} dr1={dr1} cr1={cr1} d2={d2} t2={t2} dr2={dr2} cr2={cr2} res={res} sub={sub} questions={questions}/>
    </div>
  );
} 

  