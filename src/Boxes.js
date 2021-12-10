/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';
import 'jquery/src/jquery';
import {Col, Form} from 'react-bootstrap';


export default function Boxes(props){
    const displayBoxes = (props) => {
    let c = [];
    let b = 0;
    let ix = 0;       
    const {questions} = props;
    const {updateInput} = props;
    const {p} = props;
    for (let g=0;g<b;g++){
 return(questions.map((q,i)=>{
        

while(c.length<4){

for(let z= 0;z<Object.keys(q.correct_answers.entries[ix]).length;z++){
c.push(Object.keys(JSON.parse(questions)[p].correct_answers.entries[z]).length);
               }
ix= ix+1;}        
b= Math.max(c);

return (       
    <Col key='col${i}' xs={2} md={2} lg={2} sm={2}>
    <Col key={'col${Object.keys(a).length}'} xs={3} md={3} lg={3} sm={3} ><Form.Control ref={props.inputRef} key={'date${i}'} name='date' value=''  type="date" onChange={updateInput}/> </Col>< Col key={'col${Object.keys(a).length}'} xs={3} md={3} lg={3} sm={3} >    <Form.Select key={'type${i}'} name='type' defaultValue=''  onChange={updateInput}> 
    <option></option>
    <option>revenue</option>
    <option>deferred</option>
    <option>cash</option>
    <option>receivable</option>
    <option>contra</option>
    <option>system-credit</option>
    </Form.Select></Col>
    < Col key={'col${Object.keys(a).length}'} xs={3} md={3} lg={3} sm={3} >  <Form.Control key={'dr${i}'}   name="Dr" onChange={updateInput} defaultValue='' type="text" placeholder="$$$" />
    </Col><Col key={'col${Object.keys(a).length}'} xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control  key={'cr${i}'}  name="Cr" onChange={updateInput} defaultValue='' type="text" placeholder="$$$" />
    </Col>
    </Col>
    )}))
}
    }
return (
    <>
    {displayBoxes(props)}
    </>
    )
}

