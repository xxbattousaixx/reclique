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
   const {page}=props;
    
                    
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
  return([...questions].map((q,i)=>{


    
       
        return(q.correct_answers.map((cs,ii)=>{return(cs.entries.map((entry,iii)=>{if ((page===i)&&(ii===1)){return(
          <><Col  xs={3} md={3} lg={3} sm={3}>
          <Form.Control value={inputRef.target} ref={inputRef} id={`${page}${iii}`} name='date' key={`${page}${i}${iii}`}   type="date"  onChange={updateInput}/>                </Col>
          < Col  xs={3} md={3} lg={3} sm={3}>
              <Form.Select value={inputRef.target} ref={inputRef} id={`${page}${iii}`} name='type' key={`${page}${i}${iii}`} default   onChange={updateInput}> 
          <option></option>
              <option>revenue</option>
              <option>deferred</option>
              <option>cash</option>
              <option>receivable</option>
              <option>contra</option>
              <option>system-credit</option>
            </Form.Select>
           </Col>
        
             < Col  xs={3} md={3} lg={3} sm={3} >  
             <Form.Control value={inputRef.target} ref={inputRef} id={`${page}${iii}`} key={`${page}${i}${iii}`}   name="Dr"  onChange={updateInput} default type="text" placeholder="$$$" />
            </Col>
            <Col  xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control value={inputRef.target} ref={inputRef}  id={`${page}${i}${iii}`} key={`${page}${i}${iii}`}  name="Cr"  onChange={updateInput} default type="text" placeholder="$$$" />
            </Col></>)}}))}
            ))}))
          }


  
return (
    <>
    {displayBoxes(props)}      
    </>
)

                   }