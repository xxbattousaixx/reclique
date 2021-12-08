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


    var p = 0;
    const [questions, getQuestions] = useState('');
    const [page, getPage] = useState('');
    const [sub, getSub] = useState('');
    const [res, getRes] = useState('');
    const [update, getUpdate] = useState('');
    const inputRef = React.createRef();
let id1 = '';
    const baseURL = "https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json";
    var submission = [{
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
      let id1 = inputRef;
      let name = '';
      if (name === 'date') {
        submission[0].date = update.slice(2);
      } else if (name === 'type') {
        submission[0].type = update;
      } else if (name === 'Dr') {
        submission[0].Dr = update;
      } else if (name === 'Cr') {
        submission[0].Cr = update;
      } else { console.log("FAIL"); }
      console.log(submission);
      getSub(submission);
      console.log(id1);
      console.log(sub);

    };

    const submitButton = (e) => {

      var result = '';
      updateInput();
      getRes(result);
    };

    const onNext = (e) => {
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
    
    <div className="App" id="con1">

      <Questions key="1" questions={questions} page={page} />

      <p>{JSON.stringify(questions[0].question.correct_answers[0].entries[0].when)}</p>

<Container fluid>
      <Container key="con" id="cf" fluid>
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
<Container fluid>

          <Boxes inputRef={id => id1 = id}   updateInput={getUpdate} questions={questions} p={p} />
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
      <Container fluid>
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

      <Results key='2' sub={sub} res={res} page={page} questions={questions} />


    </div>

    );

  }