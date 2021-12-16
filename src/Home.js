import './Home.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'jquery/src/jquery'
import Questions from './Questions.js'
import Results from './Results.js'
import Boxes from './Boxes.js'
import props from 'prop-types';
import { Link, animateScroll as scroll } from "react-scroll";


// this input reference will be placed in the active input (onChange)
 function Home() {
     const [update, getUpdate] = useState([]);
    const [page, getPage] = useState(0);
    const [sub, getSub] = useState([]);
    const [res, getRes] = useState([]);
    const [ans, getAns] = useState('');
    const [questions, getQuestions] = useState([]);
   const [d1, getD1]=useState([]);
   const [t1, getT1]=useState([]);
   const [dr1, getDr]=useState([]);
   const [cr1, getCr]=useState([]);
   let p = 0;


   let qs = ans
   let q = sub
   const baseURL ='https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json';
 
 
 
let ci=0;

let lastIndex = (questions.map((a,i)=>{ci++;return(ci-1);}));


   const getVald1 = (e) =>    
   {
       const {getD1}=props;
       let  val= []
       val[e.target.key]=e.target.value.slice(2,5);
       if(!d1){getD1(val)}else{d1.splice(e.target.index,0,val);}; 
       getD1(val.reverse());
      };
      const getValt1 = (e) =>{
    //    const {getT1}=props;

    const {getT1}=props;
    let  val= []
    val[e.target.key]=e.target.value;
    if(!t1){getT1(val)}else{t1.splice(e.target.index,0,val);};
    getT1(val.reverse());
      
};
      const getValdr1 = (e, getDr) =>{
    //    const {getDr}=props;

 
    const {getDr1}=props;
    let  val= []
    val[e.target.key]=(e.target.value);
    if(!dr1){getDr1(val)}else{dr1.splice(e.target.index,0,val);};
    getDr1(val.reverse());

   }
      const getValcr1 = (e, getCr) =>{
        // const {getCr}=props;

       
    const {getCr1}=props;
    let  val= []
    val[e.target.key]=e.target.value;
    if(!cr1){getCr1(val)}else{cr1.splice(e.target.index,0,val);};
    getCr1(val.reverse());

      }

   

      
      
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
            const {page}=props;
            const {ans}=props
            const {update}=props;
            const {getD1, getT1, getDr, getCr} = props;
            let pk = [];





    let ds = [];
    let ts = [];
    let drs = [];
    let crs = [];

    // , 'type': update[j].type, 'Dr': update[j].dr1, 'Cr': update[j].cr1 
if (update){

console.log(update);
console.log(sub);
console.log(ans);
            for(let j=0;j<update.length();j++){
                    //e will be an integer value
                    ds.splice(j,0,
                        
                        { 'when': update[j].when},
                        
                      );
                       
                   
                        
                              
                            };
                                              for(let a=0;a<update.length();a++){
                                //e will be an integer value
                                ts.splice(a,0,
                                    
                                    { 'when': update[a].type},
                                    
                                  );
                                };   
                                for(let r=0;r<update.length();r++){
                                    //e will be an integer value
                                    drs.splice(r,0,
                                        
                                        { 'when': update[r].Dr},
                                        
                            
                                    );   
                                };

                                    for(let u=0;u<update.length();u++){
                                       //e will be an integer value
                                       crs.splice(u,0,
                                           
                                           { 'when': update[u].Cr},
                                           
                                         );
                                      
                                        };                                         
                                        
                            getD1(ts);  

                            getT1(ts);  
                            getCr(ts);  
                            getDr(ts);  


                            pk.push(cr1)
                            pk.push(dr1)
                            pk.push(t1)
                            pk.push(d1);
                            
                        }
     
            //every time we submit, sub will become populated at each entry-level... -- this is a good time to populate RES ..  --
            //will have to place qs inside with a 3D JSON array mapping -- of your answers at every entry vs. all possible answers.. --
           
           
            getRes(
                questions.map((entry, i) => {
                    let pp1=0
                    pp1 =                 entry.correct_answers.map((a,i)=>{pp1++;return(pp1-1);});

                    for (let c = 0; c <pp1; c++) {

                        for (
                            let y = 0;
                            y < pp1;
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
    
                        }
                    }
                    return(qs);
                })
            )
            let iii=page;
       
        }
        //function to scroll on result render
      
    
        
        
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
                        getUpdate={getUpdate}
                        getAns={getAns}
                            page={page}
                            getPage={getPage}

                            questions={questions}
                            getValD1={getVald1}
                            getValT1={getValt1}
                            getValdr={getValdr1}
                            getValcr={getValcr1}/>
                    </div>
                </Container>
               
                <Container fluid>
                   
                    <Results
                               submitButton={submitButton}
                                   sub={sub}
                        ans={ans}
                        res={res}
                        questions={questions}
                    />
                </Container>
            </>)
    
    
    }
    export default Home;