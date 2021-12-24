/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './App.css';
import ButtonGroup from '@bit/nexxtway.react-rainbow.button-group';
import ButtonMenu from '@bit/nexxtway.react-rainbow.button-menu';
import MenuItem from '@bit/nexxtway.react-rainbow.menu-item';
import ButtonIcon from '@bit/nexxtway.react-rainbow.button-icon';
import { Button,Container, Row, Col  } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'jquery/src/jquery';
import Questions from './Questions';
import Results from './Results';
import Boxes from './Boxes';
import * as Scroll from 'react-scroll';
import {animateScroll as scroll } from 'react-scroll'
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faPaste, faAngleDown } from '@fortawesome/free-solid-svg-icons'
let arr=[];


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
            
            }},
   2:{
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
                    3:{0:{
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
            
            }},
   2:{
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
                    3:{0:{
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

 

export default function App() {
  
 
  let p = 0;
    const [questions, getQuestions] = useState('');
    const [page, getPage] = useState('');
    const [sub, getSub] = useState('');
    const [res, getRes] = useState('');
    const [ans,getAns] = useState('');
    const inputRef = React.createRef('');

    // play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
    
    // pause will stop the animations
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

      for (let c=0; c<Object.keys([...questions][page].correct_answers).length-1;c++){
        console.log(inputRef.target.value);
console.log(submission)
        //number answers b
        //index l
        for (let n=0; n<Object.keys([...questions][page].correct_answers[c].entries).length-1;n++){


       if(inputRef){


      if (inputRef.target.name==='date') {

        submission[page][inputRef.target.id].when = parseInt(inputRef.target.value.slice(5,7))+'/'+parseInt(inputRef.target.value.slice(8,10));
      } 
      if (inputRef.target.name==='type') {

        submission[page][inputRef.target.id].type = inputRef.target.value;
      }
        if (inputRef.target.name==='Dr'){

        submission[page][inputRef.target.id].Dr = inputRef.target.value;
        
        }
        if(inputRef.target.name==='Cr') {

          submission[page][inputRef.target.id].Cr = inputRef.target.value;
        }
      }
     
    }
  

  

    console.log(JSON.stringify(submission[page]))
  
  }

}

    const submitButton = () => {
      getAns(arr);
      getSub(submission);
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
    <> 
  
    <Particles id="tsparticles"
                style={{
                  position: "absolute",
                }}
                width="100wh"
                height="100vh"
                options={particlesOptions} />
    <Row xs={4} md={4} lg={4} sm={4} >
    <Col xs={4} md={4} lg={4} sm={4}>
</Col>
    <Col xs={3} md={3} lg={3} sm={3}>
    <ButtonGroup style={{ marginTop: 10, marginBottom:30 }}>
        <ButtonIcon className="menu" variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonMenu
          menuAlignment="right"
          menuSize="x-small"
          icon={<FontAwesomeIcon icon={faAngleDown} />}
        >
          <MenuItem label="Menu Item One" />
          <MenuItem label="Menu Item Two" />
          <MenuItem label="Menu Item Three" />
        </ButtonMenu>
      </ButtonGroup></Col>
    <Col xs={3} md={3} lg={3} sm={3}>
</Col></Row>
<br/>
<br/>
    <div key="app" className="App" id="con1">
    
    
      <Questions key="qs" ans={ans} getAns={getAns} arr={arr} questions={questions} page={page} />


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
        <Boxes inputRef={inputRef} updateInput={updateInput} questions={questions} page={page} />

        </Row>
        </Container>
     

  
  
  
      <br />
      <br />
      <br/>
      <hr />
      <br />
      <br />
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


      <b>{JSON.stringify(submission[page])}</b>

      <br />
      <br />
<Container key="results" fluid>
      <Results sub1={sub1} key='2' submission={submission} sub={sub} ans={ans} res={res} getSub={getSub} page={page} questions={questions} />

</Container>
    </div>
    </>

    );

  }