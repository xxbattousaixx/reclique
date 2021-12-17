/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';
import 'jquery/src/jquery';
import {Col, Form} from 'react-bootstrap';


export default function Boxes(props){


    const {questions} = props;
    const {updateInput} = props;
    const {page} = props;
    const displayBoxes = (props) => {
      let  g=0;
    let z = 0;
    


                    
                   {[...questions].map((q,i)=>{
[...q.correct_answers].map((e,ii)=>{
    console.log(e.entries[ii]);
    z++;
    for(let j=0;j<e.entries.length-1;j++){
  return(
  <div key={`box${page}`} id="box" className='b'>

  <Col key={`1${i}`} xs={2} md={2} lg={2} sm={2}>
  <Col key={`2${ii}`} xs={3} md={3} lg={3} sm={3} ><Form.Control ref={props.inputRef} key={`date${i}`} name='date' value=''  type="date" onChange={updateInput}/> </Col>< Col key={`3${ii}`} xs={3} md={3} lg={3} sm={3} >    <Form.Select key={`type${i}`} name='type' defaultValue=''  onChange={updateInput}> 
  <option></option>
      <option>revenue</option>
      <option>deferred</option>
      <option>cash</option>
      <option>receivable</option>
      <option>contra</option>
      <option>system-credit</option>
    </Form.Select></Col>
     < Col key={`4${ii}`} xs={3} md={3} lg={3} sm={3} >  <Form.Control key={`dr${i}`}   name="Dr" onChange={updateInput} defaultValue='' type="text" placeholder="$$$" />
    </Col><Col key={`5${ii}`} xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control  key={`cr${i}`}  name="Cr" onChange={updateInput} defaultValue='' type="text" placeholder="$$$" />
    </Col>
  </Col></div>)
}});
                   });}}

        
                    
                    
                    
                    
                    
                    
                
                


            
                
                
                

            






    
return (
    <>
    {displayBoxes(props)};
    </>
)

                   }