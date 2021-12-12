import './Home.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'jquery/src/jquery'
import Questions from './Questions.js'
import Results from './Results.js'
import Boxes from './Boxes.js'


// this input reference will be placed in the active input (onChange)
export default function Home() {
    const [d1, getD1] = useState('');
    const [t1, getT1] = useState('')
    const [dr1, getDr1] = useState('');
    const [cr1, getCr1] = useState('');
    const [page, getPage] = useState('');
    const [update, getUpdate] = useState('');
    
    const [sub, getSub] = useState('');
    const [res, getRes] = useState('');
    const [ans, getAns] = useState('');
    const [questions, getQuestions] = useState('');
        let qs = ans
        let q = sub
        let p = 0
        const baseURL ='https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json';
        const getAllQuestions = () => {
            axios.get(baseURL).then((response) => {
                    const allQuestions = JSON.parse(JSON.stringify(response.data));
                    getQuestions(allQuestions);
                })
            }
            
        // On render we will grab the JSON and start at page p=0 which is actively updated
        // grabs the page number ++ and updates the current state to show the page
    
            //this fires everytime you hit next or previous
           
            // On render we will grab the JSON and start at page p=0 which is actively updated
            // grabs the page number ++ and updates the current state to show the page
              
        //CALL onLoad -- gets starter JSON array
        useEffect(() => {
            getAllQuestions()
            getPage(p)
        }, [p]);
           //function to autoscroll on result render
           const submitButton = (e) => {
            e.preventDefault()
    
            //this will grab the submission at this current page as UPDATE and
            getSub(
                update.map((v, i) => {
                    //e will be an integer value
    let h = [];
                    h.push([
                        {
                            i: { 'when': v.when, 'type': v.type, 'Dr': v.dr1, 'Cr': v.cr1 },
                        },
                    
                     ] );
                return(h);}
            ));
    
            //every time we submit, sub will become populated at each entry-level... -- this is a good time to populate RES ..  --
    
            //will have to place qs inside with a 3D JSON array mapping -- of your answers at every entry vs. all possible answers.. --
            getRes(
                questions.correct_answers.map((entry, i) => {
                    for (let c = 0; c < Object.keys(questions).length - 1; c++) {
                        for (
                            let y = 0;
                            y <
                            Object.keys(questions.correct_answers.entries).length -
                                1;
                            y++
                        ) {
                           
                            if (sub.when === ans[c][y].when) {
                                qs[c][y].when = 'correct'
                            } else {
                                qs[c].type = 'incorrect'
                            }
    
                            if (qs[c][y].type === ans[c][y].type) {
                                sub.Dr = 'correct'
    
                                qs[c][y].Dr = 'correct'
                            } else {
                                if (sub.Dr === ans[c][y].Dr) {
                                    sub.Dr = 'correct'
    
                                    qs[c][y].Dr = 'correct'
                                }
    
                                if (sub.Cr === ans[c][y].Cr) {
                                    qs[c][y].Cr = 'correct'
                                }
                                if (
                                    (qs[c][y].Cr === 'correct' ||
                                        qs[c].Dr === 'correct') &&
                                    qs[c].type === 'correct' &&
                                    qs[c].when === 'correct'
                                ) {
                                    qs[c][y] = 'correct'
                                }
    
                                // qs[question#][entry#].row contains the result at every question entry, if ANY if these are correct the question is right...
                                if (qs[c][y] === 'correct') {
                                    q[c].type = 'correct'
                                    // q just contains the final result at each question
                                }
                            }
    
                            // if (i===page){
                        }
                    }
                    return(q);
                })
            )
    
            scrollToBottom()
        }
        //function to scroll on result render
        const scrollToBottom = () => {
            Results.scrollIntoView({ behavior: 'smooth' })
        }
    
        //CALL HOOK -- updates entry when adequate and provides it --> getUpdate at SUB, and getAnswers()
        const onNext = (props) => {
            const {getUpdate} = props;
            const {getAns}=props;
            const {getPage}=props;
            const {d1}=props;
            const {t1}=props;
            const {dr1}=props;
            const {cr1}=props;
    
            if (p < questions.length - 1) {
                p++
    
                if (p >= 0 && p < questions.length) {
                    getUpdate({
                        'when': d1,
                        'type': t1,
                        'Dr': dr1,
                        'Cr': cr1,
                    });
    
                    getAns(
                        questions.correct_answers.entries.map((e, i) => {
                            //e will be an integer value
                    let h=[];
                    let ii=0;
                    h.push( [{
                               ii: {
                                    i: {
                                        'when': e.when,
                                        'type': e.type,
                                        'Dr': e.Dr1,
                                        'Cr': e.Cr1,
                                    }}}
                                 ] );
                                ii++;
    
            return(h)
                        })
                    );
    
                    getPage(p);
                    
                }
            } else if (p === questions.length - 1) {
                // getPage(p);
            }
        }
        //CALL HOOK -- update current entry if adequate --> getUpdate at SUB, and getAnswers()
        const onPrev = (props) => {
            const {getUpdate} = props;
            const {getAns}=props;
            const {d1}=props;
            const {t1}=props;
            const {dr1}=props;
            const {cr1}=props;
            if (p > 0) {
                p--
    
                if (p <= questions.length - 1 && p >= 0) {
                    //every time we success hit to a different question, answer will become populated at each entry-level... this is a good time to populate RES
                    getUpdate({
                        'when': d1,
                        'type': t1,
                        'Dr': dr1,
                        'Cr': cr1,
                    });
                
               
                getAns(
                    questions.correct_answers.entries.map((e, i) => {
                        //e will be an integer value
                let h=[];
                let ii=0;
                h.push( [{
                           ii: {
                                i: {
                                    'when': e.when,
                                    'type': e.type,
                                    'Dr': e.Dr1,
                                    'Cr': e.Cr1,
                                }}}
                             ] );
                            ii++;

        return(h)
                    })
                );
            }
             else if (p === 0) {
                // getPage(p);
            }
        }
        //CALL HOOK -- updates the results that will be shown. Gets the current submission, which consists of the actual value at each box
    }
    
                    
        
        // function that will grab JSON with the use of axios
      
    return(
            <>
                <Questions
                    questions={questions}
                    page={page}
                />
                <Container  id="cf" fluid>
                    <br />
                    <hr />
                    <br />
                    <br />
                    <Row xs={3} md={3} lg={3} sm={3}>
                        <Col xs={3} md={3} lg={3} sm={3} />
                        <Col xs={3} md={3} lg={3} sm={3} />
                        <Col xs={3} md={3} lg={3} sm={3}>
                            &nbsp;
                        </Col>
                        <Col xs={3} md={3} lg={3} sm={3} id="vl">
                            &nbsp;
                        </Col>
                    </Row>
                    <Row xs={3} md={3} lg={3} sm={3} id="bb">
                        <Col xs={3} md={3} lg={3} sm={3} />
                        <Col xs={3} md={3} lg={3} sm={3} />
                        <Col xs={3} md={3} lg={3} sm={3}>
                            {' '}
                            Dr
                        </Col>
                        <Col xs={3} md={3} lg={3} sm={3} id="vl">
                            Cr
                        </Col>
                    </Row>
                    <Row xs={3} md={3} lg={3} sm={3}>
                        <Col xs={3} md={3} lg={3} sm={3} />
                        <Col xs={3} md={3} lg={3} sm={3} />
                        <Col xs={3} md={3} lg={3} sm={3}>
                            &nbsp;
                        </Col>
                        <Col xs={3} md={3} lg={3} sm={3} id="vl">
                            &nbsp;
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <div id="box" className="b">
                        <Boxes
                            questions={questions}
                            getD1={getD1}
                            getT1={getT1}
                            getdr1={getDr1}
                            getCr1={getCr1}
                        />
                    </div>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <hr />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container fluid>
                    <Row xs={4} md={4} lg={4} sm={4}>
                        <Col xs={2} md={2} lg={2} sm={2} />
                        <Col xs={4} md={4} lg={4} sm={4}>
                            <Button onClick={onPrev}>Previous</Button>
                        </Col>
                        <Col xs={4} md={4} lg={4} sm={4}>
                            <Button onClick={onNext}>Next</Button>
                        </Col>
                        <Col xs={2} md={2} lg={2} sm={2} />
                        <br />
                        <br />
                        <br />
                        <br />
                    </Row>
                </Container>
                <Container fluid>
                    <Row xs={12} md={12} lg={12} sm={12}>
                        <Col xs={12} md={12} lg={12} sm={12}>
                            <Button onClick={submitButton}>Submit</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <div id="containerEndRef" />
                    <br />
                    <br />
                    <Results
                               
                                   sub={sub}
                        ans={ans}
                        res={res}
                        questions={questions}
                    />
                </Container>
            </>)
    
    
    }
