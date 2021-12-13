import './Home.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'jquery/src/jquery'
import Questions from './Questions.js'
import Results from './Results.js'
import Boxes from './Boxes.js'
import props from 'prop-types';

// this input reference will be placed in the active input (onChange)
 function Home() {
    const [page, getPage] = useState('');
    const [update, getUpdate] = useState({});
    const [sub, getSub] = useState('');
    const [res, getRes] = useState([]);
    const [ans, getAns] = useState({});
    const [questions, getQuestions] = useState([]);
   const [d1, getD1]=useState('');
   const [t1, getT1]=useState('');
   const [dr1, getDr]=useState('');
   const [cr1, getCr]=useState('');
   let p = 0;

   const getVald1 = (e,getD1) =>    
   {
    //    const {getD1}=props;
       let  val= e.target.value;
       getD1(val); 
      };
      const getValt1 = (e, getT1) =>{
    //    const {getT1}=props;

       let  val= e.target.value;
       
       getT1(val); 
      };
      const getValdr1 = (e, getDr) =>{
    //    const {getDr}=props;

       let  val= e.target.value;
       getDr(val); 
      
   
   }
      const getValcr1 = (e, getCr) =>{
        // const {getCr}=props;

       let  val= e.target.value;
       getCr(val); 
      }

   


        let qs = ans
        let q = sub
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
           const submitButton = (props) => {
            const{page}=props;
            const {getSub}=props;
    let h = [];


            for(let j=0;j<update.length;j++){
                    //e will be an integer value
                    h.push(
                        {
                            j: { 'when': update.when, 'type': update.type, 'Dr': update.dr1, 'Cr': update.cr1 },
                        }
                      );
                    };    
                    getSub(h);    

                    
            //every time we submit, sub will become populated at each entry-level... -- this is a good time to populate RES ..  --
    
            //will have to place qs inside with a 3D JSON array mapping -- of your answers at every entry vs. all possible answers.. --
            getRes(
                questions.map((entry, i) => {
                    for (let c = 0; c < questions.length - 1; c++) {
                        for (
                            let y = 0;
                            y < Object.keys(questions[page].correct_answers.entries[i]).length- 1;
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
                    return(qs);
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
            const {questions}=props;
            const {t1,d1,cr1,dr1}=props;
            const {getUpdate}=props
            const {getAns}=props;
            
            if (p < Object.keys(questions).length - 1) {
                p++;
    
                if (p >= 0 && p < Object.keys(questions).length) {
                    
                    getUpdate({
                        'when': d1,
                        'type': t1,
                        'Dr': dr1,
                        'Cr': cr1,
                    });
    
      
                    let hh=[];
                    questions.map((e, i) => {
                        //e will be an integer value
                hh.push( {
                           'correct_answers': {
                                i: {
                             'when': e.correct_answers[1].entries[i].when,
                             'type': e.correct_answers[1].entries[i].type,
                             'Dr': e.correct_answers[1].entries[i].Dr1,
                             'Cr': e.correct_answers[1].entries[i].Cr1,
                                }}}
                              );
                              
                        return(hh)
                                               }                   );
           getAns(hh,[]);
           getPage(p);
        } else if (p === questions.length - 1) {
                getPage(p);
            }}
        };
        //CALL HOOK -- update current entry if adequate --> getUpdate at SUB, and getAnswers()
        const onPrev = (props) => {
            const {questions}=props;
            const {t1,d1,cr1,dr1}=props;
            const {getUpdate}=props
            const {getAns}=props;
            if (p > 0) {
                p--;

                if (p <= Object.keys(questions).length - 1 && p >= 0) {
                 
                    
                    //every time we success hit to a different question, answer will become populated at each entry-level... this is a good time to populate RES
                    getUpdate({
                        'when': d1,
                        'type': t1,
                        'Dr': dr1,
                        'Cr': cr1,
                    },[]);
                
               
                
                    let h=[];
               
                    questions.map((e, i) => {
                        //e will be an integer value
                h.push( {
                    'correct_answers': {
                         i: {
                             'when': e.correct_answers[1].entries[i].when,
                             'type': e.correct_answers[1].entries[i].type,
                             'Dr': e.correct_answers[1].entries[i].Dr1,
                             'Cr': e.correct_answers[1].entries[i].Cr1,
                                }}}
                              );
                              
                        return(h)
                                               })
                                               getAns(h,[]);
                getPage(p);
                                               
                                               
            } else if (p === 0) {
                getPage(p);
            }
        
        }
        };   
                    
        
        // function that will grab JSON with the use of axios
      
    return(
            <>
                <Questions
                    questions={questions}
                    page={page}
                />
                <Container fluid>
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
                            getValD1={getVald1}
                            getValT1={getValt1}
                            getValdr={getValdr1}
                            getValcr={getValcr1}/>
                    </div>
                </Container>
                <br />

                <br />
                <hr />
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
                    </Row>
                </Container>
                <Container fluid>
                    <Row xs={12} md={12} lg={12} sm={12}>
                    <Col xs={4} md={4} lg={4} sm={4}>
                        </Col>
                        
                        <Col xs={2} md={2} lg={2} sm={2}>
                            <Button onClick={submitButton}>Submit</Button>
                        </Col>
                        <Col xs={4} md={4} lg={4} sm={4}>
                    </Col>
                    

                    </Row>
                    <br />

                    <br />
                    <hr />
                    <br />

                    <br />
                    <div id="containerEndRef" />
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
    export default Home;