/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';
import { Col, Container} from 'react-bootstrap';

export default function Results(props){



    const displayResults = (props) => {
        const {questions} = props;
        const {sub} = props;
const {page}=props;
        var qs=[];

        if (sub.length > 0){
 return(questions.map((question,i)=>{
for(let f=0;f<Object.keys(question.correct_answers).length;f++){
    qs.splice(f,0,{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''})
}     

    let res22=[{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''
    
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''
    
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''
    
      }];

for (let c=0;c<Object.keys(question.correct_answers[c]).length;c++){
    
    for (let y=0;y<Object.keys(question.correct_answers[c].entries[y]).length;y++){

console.log(sub)
if(sub.when===question.correct_answers[c].entries[y].when){
    res22[y].when ='correct';
    qs[y].when ='correct';
}else{   res22[y].when ='incorrect';}

    if(sub.type===question.correct_answers[c].entries[y].type){
        res22[y].type ='correct';
    qs[y].type ='correct';
//KHGHGHKJGKGGUIKG
    }else{
        res22[y].type ='incorrect';
        console.log([...res22]);}

if(question.correct_answers[c].entries[y].Dr){

    if(sub.Dr===question.correct_answers[c].entries[y].Dr){
        res22[y].Dr ='correct';

    }else{  res22[y].Dr ='incorrect';
}

}else{
    if(sub.Cr===question.correct_answers[c].entries[y].Cr){
        res22[y].Cr ='correct';

    }
else{    res22[y].Cr ='incorrect';
}
if(((res22[y].Cr==='correct')||(res22[y].Cr==='correct'))&&(res22[y].Cr==='correct')&&(res22[y].Cr==='correct')){
    qs[i][y]='correct';

}                // if (i===page){
             

                 
                    return(
                        <Container key={`con${i}`} fluid>


                        <div className='answers' id="results" key={i}>
                            
                            <h4 key='n5' className='qt'>{JSON.stringify(sub[{i}])}</h4> 
                            <h4 key='n6' className='qt'>{qs[{i}]}</h4> 
                            <h4 key='n7' className='qt'>{question.correct_answers.entries[{y}]}</h4> 

                            <h4 key='n9' className='qt'>{res22.map((row,i)=>{
                        return(<Col key={`col${i}`} xs={2} md={2} lg={2} sm={2}><div>
<h4>Date--<br/> Answer: {JSON.stringify(row)}<br/> vs. <br/> Your answer: {sub}</h4>
<h4>Type--<br/> Answer: {JSON.stringify(row)}<br/> vs. <br/> Your answer: {sub}</h4>
<h4>Dr--<br/> Answer: {JSON.stringify(row)}<br/> vs.<br/> Your answer: {sub}</h4>
<h4>Cr--<br/> Answer: {JSON.stringify(row)}<br/> vs.<br/> Your answer: {sub}</h4>

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