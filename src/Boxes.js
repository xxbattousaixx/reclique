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



    for (var i=0; i < 4; i++) {
    



  let y = 0;
    let z = 0;
    [...questions].map((q,i)=>{
      y++
      //number of the question index
    [...q.correct_answers].map((e,ii)=>{
        console.log(e.entries[ii]);
    z++
    //number of the answer index
        for(let j=0;j<e.entries.length-1;j++){
          
          return(
   <></>);
    }return<></>
  });return<></>});
  
  
  
  
  return<>
                <Col key={`1${z}`} xs={3} md={3} lg={3} sm={2}>
                <Form.Control value={inputRef.target} ref={inputRef} key={`when${z}`} name='date'   type="date"  onChange={updateInput}/>                </Col>
                < Col key={`3${z}`} xs={3} md={3} lg={3} sm={3}>
                    <Form.Select value={inputRef.target} ref={inputRef} key={`type${z}`} name='type' default   onChange={updateInput}> 
                <option></option>
                    <option>revenue</option>
                    <option>deferred</option>
                    <option>cash</option>
                    <option>receivable</option>
                    <option>contra</option>
                    <option>system-credit</option>
                  </Form.Select> 
                 </Col>
         
                   < Col key={`4${z}`} xs={3} md={3} lg={3} sm={3} >  
                   <Form.Control value={inputRef.target} ref={inputRef} key={`dr${z}`}   name="Dr"  onChange={updateInput} default type="text" placeholder="$$$" />
                  </Col>
                  <Col key={`5${z}`} xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control value={inputRef.target} ref={inputRef}  key={`cr${z}`}  name="Cr"  onChange={updateInput} default type="text" placeholder="$$$" />
                  </Col></>
}

}

  
return (
    <>
    {displayBoxes(props)}       
    </>
)

                   }