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

for (let c=0;c<Object.keys(question.correct_answers).length;c++){
    
    for (let y=0;y<Object.keys(question.correct_answers.entries).length;y++){
      


if(sub[i][c].when===question.correct_answers.entries[c].when){
    res22[i][c].when ='correct';
    qs[i][c].when ='correct';
}else{   res22[i][c].when ='incorrect';}

    if(sub[i][c].type===question.correct_answers.entries[c].type){
        res22[i][c].type ='correct';
    qs[i][c].type ='correct';

    }else{   res22[i][c].type ='incorrect';}

if(question.correct_answers[i].entries[c].Dr){

    if(sub[i][c].Dr===question.correct_answers.entries[c].Dr){
        res22[i][c].Dr ='correct';

    }else{  res22[i][c].Dr ='incorrect';
}

}else{
    if(sub[i][c].Cr===question.correct_answers.entries[c].Cr){
        res22[i][c].Cr ='correct';

    }
else{    res22[i][c].Cr ='incorrect';
}
if(((res22[i][c].Cr==='correct')||(res22[i][c].Cr==='correct'))&&(res22[i][c].Cr==='correct')&&(res22[i][c].Cr==='correct')){
    qs[i][y]='correct';

}                // if (i===page){
             

                 
                    return(
                        <Container key="overview" fluid>


                        <div className='answers' id="results" key={i}>
                         
                            <h4 key='n9' className='qt'>{res22.map((n,i)=>{
                        return(<Col key='col${i}' xs={2} md={2} lg={2} sm={2}><div>
<h4>Date--<br/> Answer: {n.when}<br/> vs. <br/> Your answer: {sub.when}</h4>
<h4>Type--<br/> Answer: {n.type}<br/> vs. <br/> Your answer: {sub.type}</h4>
<h4>Dr--<br/> Answer: {n.Dr}<br/> vs.<br/> Your answer: {sub.Dr}</h4>
<h4>Cr--<br/> Answer: {n.Cr}<br/> vs.<br/> Your answer: {sub.Cr}</h4>

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