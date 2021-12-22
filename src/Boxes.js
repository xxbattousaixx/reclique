/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';
import 'jquery/src/jquery';
import {Col, Form} from 'react-bootstrap';


export default function Boxes(props){
  const {questions} = props;
    const {updateInput} = props;
   const {inputRef}=props;
    
                    
  const displayBoxes=()=>{

  // let y = 0;
  //   let z = 0;
  //     y++
  //     //number of the question index
  //   [...q.correct_answers].map((e,ii)=>{
  //       console.log(e.entries[ii]);
  //   z++
  //   //number of the answer index
  //       for(let j=0;j<e.entries.length-1;j++){
          
  //         return(
  //  <></>);
  //   }return<></>
  // });return<></>});
  
  
  return(
  
    [...questions].map((q,i)=>{
      for (let f=0;f<Object.keys(q.correct_answers).length;f++){
        for (let c=0;c<Object.keys(q.correct_answers[c].entries).length;c++){
    
          for (let y=0;y<Object.keys(q.correct_answers[c].entries[y]).length;y++){
               return<><Col key={`1${c}${y}`} xs={3} md={3} lg={3} sm={3}>
               <Form.Control value={inputRef.target} ref={inputRef} key={`when${c}${y}`} name='date'   type="date"  onChange={updateInput}/>                </Col>
               < Col key={`3${c}${y}`} xs={3} md={3} lg={3} sm={3}>
                   <Form.Select value={inputRef.target} ref={inputRef} key={`type${c}${y}`} name='type' default   onChange={updateInput}> 
               <option></option>
                   <option>revenue</option>
                   <option>deferred</option>
                   <option>cash</option>
                   <option>receivable</option>
                   <option>contra</option>
                   <option>system-credit</option>
                 </Form.Select> 
                </Col>
             
                  < Col key={`4${c}${y}`} xs={3} md={3} lg={3} sm={3} >  
                  <Form.Control value={inputRef.target} ref={inputRef} key={`dr${c}${y}`}   name="Dr"  onChange={updateInput} default type="text" placeholder="$$$" />
                 </Col>
                 <Col key={`5${c}${y}`} xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control value={inputRef.target} ref={inputRef}  key={`cr${c}${y}`}  name="Cr"  onChange={updateInput} default type="text" placeholder="$$$" />
                 </Col></>}}}
    }))}

  
return (
    <>
    {displayBoxes(props)}      
    </>
)

                   }