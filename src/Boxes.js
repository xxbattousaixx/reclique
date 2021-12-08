/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';
import 'jquery/src/jquery';
import {Col, Form} from 'react-bootstrap';


function Boxes(props){


    const {questions} = props;
    const {updateInput} = props;
    
    const displayBoxes = (props) => {

        
        if (questions.length > 0){


            return(questions.map((q,i)=>{

   
                    console.log(i);

                    console.log(q);
    


                
                    for (let c=0;c<Object.keys(q.correct_answers).length;c++){


                return(
                    <div id="box" className='b'>
                       

<Col xs={3} md={3} lg={3} sm={3} ><Form.Control ref={props.inputRef} key={c} name='date' value='' id={c} type="date" onChange={updateInput}/> </Col>< Col xs={3} md={3} lg={3} sm={3} >    <Form.Select key={c} name='type' defaultValue='' id={c} onChange={updateInput}> 
<option></option>
    <option>revenue</option>
    <option>deferred</option>
    <option>cash</option>
    <option>receivable</option>
    <option>contra</option>
    <option>system-credit</option>
  </Form.Select></Col>
   < Col xs={3} md={3} lg={3} sm={3} >  <Form.Control key={c} id={c} name="Dr" onChange={updateInput} defaultValue='' type="text" placeholder="$$$" />
  </Col><Col xs={3} md={3} lg={3} sm={3} id="vl">  <Form.Control id={c} key={c} name="Cr" onChange={updateInput} defaultValue='' type="text" placeholder="$$$" />
  </Col>
                    </div>
                )
                    }

                }
                
            ))
        
    }
    }
return (
    <>
    {displayBoxes(props)}
    </>
)

}
export default Boxes;