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
    const [update, getUpdate] = useState('');
    const inputRef = React.createRef();
    let id1 = inputRef;
    const baseURL = "https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json";
    var submission = [{
      0:[{
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    },{
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    },
    {
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    },{
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
   }],
   1:[{
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    },
    {
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    },
    {
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    },
    {
      'date': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    }]
}];


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


    const updateInput = () => {
      for (let n=0; n<Object.keys(questions).length;n++){
      for (let b=0;b<n;b++){
      for (let l=0;l<b;l++){
        console.log(id1);
      if (id1[0].name === 'date') {
        submission[n][b][l] = update.slice(2);
      } else if (id1[0].name === 'type') {
        console.log("BALLER");
        submission[n][b][l].type = update;
      } else if (id1[0].Dr === 'Dr') {
        console.log("BALLER");

        submission[n][b][l].Dr = update;
        console.log("BALLER");

      } else if (id1[0].Cr === 'Cr') {
        console.log("BALLER");

        submission[n][b][l].Cr = update;
      } else { console.log("FAIL"); }


      getSub(submission);
      getAns(questions[n].correct_answers[b]);
      console.log(JSON.stringify(ans));
      console.log(id1.current);
      console.log(sub);
      console.log()
    }}
}    };

    const submitButton = (e) => {
      e.preventDefault();

      var result = '';
      updateInput();
      getRes(result);
    };

    const onNext = (e) => {
e.preventDefault();

      if (p < questions.length - 1) {
        getSub(submission);

        p++;

        if ((p >= 0) && (p < questions.length)) {

          getSub(submission);

          getPage(p);
          p--;
        }
      } else if (p === questions.length - 1) {
        getPage(p);
      }

    };




    const onPrev = (e) => {
      e.preventDefault();
      if (p > 0) {
        getSub(submission);

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

  
          <Boxes inputRef={inputRef} updateInput={getUpdate} questions={questions} page={page} />
  
  
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

      <br />
      <br />
<Container key="results" fluid>
      <Results key='2' sub={sub} res={res} page={page} questions={questions} />

</Container>
    </div>

    );

  }