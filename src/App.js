/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './App.css';
import { Button, Container, Row, Col  } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'jquery/src/jquery';
import Questions from './Questions';
import Results from './Results';
import Boxes from './Boxes';

export default function App() {

  let p = 0;
    const [questions, getQuestions] = useState('');
    const [page, getPage] = useState('');
    const [sub, getSub] = useState('');
    const [res, getRes] = useState('');
    const [ans,getAns] = useState('');
    const inputRef = React.createRef('');
let submission =[{
        0:[{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
     }],
     1:[{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      }],
      2:[{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      }],
      3:[{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      }]
  }];
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

      for (let n=0; n<Object.keys([...questions]).length-1;n++){
        console.log(inputRef.target.value);
console.log([...submission])
        //number answers b
      for (let b=0;b<Object.keys([...questions]).length-1;b++){
        //index l

      for (let l=0;l<4;l++){

       


      if (inputRef.target.name==='date') {
        [...submission][n][b][l].when = +inputRef.target.value.slice(8,10)+'/'+inputRef.target.value.slice(5,7);
      } 
      if (inputRef.target.name==='type') {
        [...submission][n][b][l].type = inputRef.target.value;
      }
        if (inputRef.target.name==='Dr') {
        [...submission][n][b][l].Dr = inputRef.target.value;
        
        }
        if (inputRef.target.name==="Cr") {
        
          [...submission][n][b][l].Cr = inputRef.target.value;
        }

      getAns(questions[n].correct_answers[b].entries);
      console.log(JSON.stringify(ans));
      console.log(submission);
      console.log([...submission][n][b])
      console.log([...submission][n][b][l])
      console.log([...submission][n])


    }
  
  } 
  }
}

    const submitButton = (e) => {
      e.preventDefault();
getSub([...submission]);
      var result = '';
      getRes(result);
      //CLEAR ALL
    };

    const onNext = (e) => {

      if (p < questions.length - 1) {

        p++;

        if ((p >= 0) && (p < questions.length)) {


          getPage(p);
          p--;
        }
      } else if (p === questions.length - 1) {
        getPage(p);
      }

    };




    const onPrev = (e) => {
      if (p > 0) {

        p--;

        if ((p <= questions.length - 1) && (p >= 0)) {
          getPage(p);
        }
      } else if (p === 0) {

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
      {JSON.stringify([...submission])}

      <br />
      <br />
<Container key="results" fluid>
      <Results key='2' sub={sub} res={res} page={page} questions={questions} />

</Container>
    </div>

    );

  }