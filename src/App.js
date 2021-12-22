/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './App.css';
import { Button, Container, Row, Col  } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'jquery/src/jquery';
import Questions from './Questions';
import Results from './Results';
import Boxes from './Boxes';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
let sub1 = {
  0:{
    0:{
'when': '',
'type': '',
'Dr': '',
'Cr': ''

},
1:{
'when': '',
'type': '',
'Dr': '',
'Cr': ''

},

2:{
  'when': '',
  'type': '',
  'Dr': '',
  'Cr': ''
  
  },

  3:{
    'when': '',
    'type': '',
    'Dr': '',
    'Cr': ''
    
    }},
1:{
  0:{
    'when': '',
    'type': '',
    'Dr': '',
    'Cr': ''
    
    },
    1:{
    'when': '',
    'type': '',
    'Dr': '',
    'Cr': ''
    
    },
    
    2:{
      'when': '',
      'type': '',
      'Dr': '',
      'Cr': ''
      
      },
    
      3:{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
        
        }}}
let submission ={
          0:{0:{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      
    },
    1:{
      'when': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    
  }},
1:{0:{
  'when': '',
  'type': '',
  'Dr': '',
  'Cr': ''

},
1:{
'when': '',
'type': '',
'Dr': '',
'Cr': ''

}}}

export default function App() {

  let p = 0;
    const [questions, getQuestions] = useState('');
    const [page, getPage] = useState('');
    const [sub, getSub] = useState('');
    const [res, getRes] = useState('');
    const [ans,getAns] = useState('');
    const inputRef = React.createRef('');

    const baseURL = "https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json";
    useEffect(() => {
      getAllQuestions();
      getPage(p);
    }, [p]);


    const getAllQuestions = () => {
      axios.get(baseURL)
        .then((response) => {
          const allQuestions = response.data;
          getQuestions(allQuestions);
        })
        .catch(error => console.error('Error: ' + { error }));
    };


    const updateInput = (inputRef) => {
      
//inputRef.target changes.....

      for (let n=0; n<Object.keys([...questions][page].correct_answers[page]).length-1;n++){
        console.log(inputRef.target.value);
console.log(submission)
        //number answers b
        //index l


       if(inputRef){


      if (inputRef.target.name==='date') {
        submission[page][n].when = +inputRef.target.value.slice(8,10)+'/'+inputRef.target.value.slice(5,7);
      } 
      if (inputRef.target.name==='type') {
        submission[page][n].type = inputRef.target.value;
      }
        if (inputRef.target.name==='Dr') {
        submission[page][n].Dr = inputRef.target.value;
        
        }
        if (inputRef.target.name==="Cr") {
        
          submission[page][n].Cr = inputRef.target.value;
        }
      // getAns(questions[n].correct_answers[b].entries);
      // console.log(JSON.stringify(ans));
      console.log(JSON.stringify(submission[page][n]))
    }
sub1[page][n]=submission[page][n]
 
  }

console.log(sub1);

}

    const submitButton = () => {
      getSub(sub1);
      //CLEAR ALL
      scroll.scrollToBottom();
    };

    const onNext = () => {

      if (p < questions.length - 1) {

        p++;

        if ((p >= 0) && (p < questions.length)) {

          if (submission[page]){
            sub1[page]=submission[page];
          }
          getPage(p);
          
          p--;
        }
      } else if (p === questions.length - 1) {
        if (submission[page]){
          sub1[page]=submission[page];
        }
        getPage(p);
      }

    };




    const onPrev = () => {
      if (p > 0) {

        p--;

        if ((p <= questions.length - 1) && (p >= 0)) {
          if (submission[page]){
            sub1[page]=submission[page];
          }
          getPage(p);
        }
      } else if (p === 0) {
        if (submission[page]){
          sub1[page]=submission[page];
        }
        getPage(p);
      }

    };


    return (
    
    <div key="app" className="App" id="con1">

      <Questions key="qs" questions={questions} page={page} />


<Container key="head" fluid>
      <Container key="head2" id="cf" fluid>
        <br />





        <hr />
        <br />
        <br />




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
        </Container></Container>
<Container key="boxes" fluid>

  
          <Boxes inputRef={inputRef} updateInput={updateInput} questions={questions} page={page} />
  
  
   </Container>
      <br />
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <hr />
      <br />
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container key="buttons" fluid>
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
          <br />
          <br /><br />
          <br />
        </Row>
        <Row xs={12} md={12} lg={12} sm={12}><Col xs={12} md={12} lg={12} sm={12}>
          <Button onClick={submitButton}>Submit</Button>
        </Col>
        </Row>
      </Container>
      <br />
      <br /><hr />
      <br />
      <br />
      {JSON.stringify(submission)}

      <br />
      <br />
<Container key="results" fluid>
      <Results sub1={sub1} key='2' sub={sub} ans={ans} res={res} page={page} questions={questions} />

</Container>
    </div>

    );

  }