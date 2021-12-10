/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';
import {Row, Col, Container} from 'react-bootstrap';

export default function Results(props){



    const displayResults = (props) => {
        const {questions} = props;
        const {sub} = props;
        var {res} = props;
        const {page} = props;

        var qs=[{},{},{},{}];

        if (sub.length > 0){
 return(questions.map((question,i)=>{

for(let f=0;f<Object.keys(question.correct_answers).length;f++){
    qs.push({
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''})
}     

    let res22=[{
        0:[{
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },{
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },{
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
     }],
     1:[{
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      },
      {
        'date': '',
        'type': '',
        'Dr': '',
        'Cr': ''
      }]
  }];


for (let c=0;c<Object.keys(question.correct_answers[c]).length;c++){
    
    for (let y=0;y<Object.keys(question.correct_answers[i].entries[c]).length;y++){
      


if(sub[i][c].when===question.correct_answers[c].entries[c].when){
    res22[i][c].when ='correct';
    qs[c].when ='correct';
}else{   res22[c].when ='incorrect';}

    if(sub[i][c].type===question.correct_answers[c].entries[c].type){
        res22[i][c].type ='correct';
    qs[c].type ='correct';

    }else{   res22[i][c].type ='incorrect';}

if(question.correct_answers[i].entries[c].Dr){

    if(sub[i][c].Dr===question.correct_answers[i].entries[c].Dr){
        res22[i][c].Dr ='correct';

    }else{  res22[i][c].Dr ='incorrect';
}

}else{
    if(sub[i].Cr===question.correct_answers[i].entries[clearInterval].Cr){
        res22[i][c].Cr ='correct';

    }
else{    res22[i][c].Cr ='incorrect';
}
if(((res22[i][c].Cr==='correct')||(res22[i][c].Cr==='correct'))&&(res22[i][c].Cr==='correct')&&(res22[i][c].Cr==='correct')){
    qs[i][c]='correct';

}                // if (i===page){
             

                 
                    return(
                        <Container key="overview" fluid>


                        <div className='answers' id="results" key={i}>
                            
                            <h4 key='n5' className='qt'>{JSON.stringify(sub[{i}])}</h4> 
                            <h4 key='n6' className='qt'>{qs[{i}][{c}]}</h4> 
                            <h4 key='n7' className='qt'>{question.correct_answers[{c}].entries[{y}]}</h4> 

                            <h4 key='n9' className='qt'>{res22.map((row,i)=>{
                        return(<Col key='col${i}' xs={2} md={2} lg={2} sm={2}><div>
<h4>Date--<br/> Answer: {row[{c}].entries[{y}].when}<br/> vs. <br/> Your answer: {sub[{i}].when}</h4>
<h4>Type--<br/> Answer: {row[{c}].entries[{y}].type}<br/> vs. <br/> Your answer: {(sub[{i}].type)}</h4>
<h4>Dr--<br/> Answer: {row[{c}].entries[{y}].Dr}<br/> vs.<br/> Your answer: {sub[{i}].Dr}</h4>
<h4>Cr--<br/> Answer: {row[{c}].entries[{y}].Cr}<br/> vs.<br/> Your answer: {sub[{i}].Cr}</h4>

                        </div></Col>)})}</h4>
                            <br/>
                            <br/><br/>
                            <h4></h4>         
                             </div>  </Container>
                    )
                // }else{
                //     return('');
                // }


            }
        }
     } }));   
        }



             else {
            return (<h3>No Questions</h3>);





        }
    }

return (
    <>
    {displayResults(props)}
    </>
)

}