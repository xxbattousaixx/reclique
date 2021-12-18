/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';
import 'jquery/src/jquery';
import {Col, Row,Form} from 'react-bootstrap';

export default function Boxes(props){
  const {questions} = props;
    const {updateInput} = props;
    const {page} = props;
   
 const displayBoxes=(props)=>{

            let j=4;

                return( <>
                <Col key={`1${j}`} xs={3} md={3} lg={3} sm={2}>
                <Form.Control ref={props.inputRef1} key={`when${j}`} name='date'   type="date" value='' onChange={updateInput}/>                </Col>
                < Col key={`3${j}`} xs={3} md={3} lg={3} sm={3}>
                    <Form.Select ref={props.inputRef2} key={`type${j}`} name='type' default  value='' onChange={updateInput}> 
                <option></option>
                    <option>revenue</option>
                    <option>deferred</option>
                    <option>cash</option>
                    <option>receivable</option>
                    <option>contra</option>
                    <option>system-credit</option>
                  </Form.Select> 
                 </Col>
         
                   < Col key={`4${j}`} xs={3} md={3} lg={3} sm={3} >  
                   <Form.Control ref={props.inputRef3} key={`dr${j}`}   name="Dr" value='' onChange={updateInput} default type="text" placeholder="$$$" />
                  </Col>
                  <Col key={`5${j}`} xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control ref={props.inputRef4}  key={`cr${j}`}  name="Cr" value='' onChange={updateInput} default type="text" placeholder="$$$" />
                  </Col></>
               );
            

}
return( <>
    {displayBoxes(props)}
    </>)
}