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

console.log([...sub][0])
if(sub[0][y][c].when===question.correct_answers[c].entries[y].when){
    res22[y].when ='correct';
    qs[y].when ='correct';
}else{   res22[y].when ='incorrect';}

    if(sub[0][y][c].type===question.correct_answers[c].entries[y].type){
        res22[y].type ='correct';
    qs[y].type ='correct';
//KHGHGHKJGKGGUIKG
    }else{
        res22[y].type ='incorrect';
       }

if(question.correct_answers[c].entries[y].Dr){

    if(sub[0][y][c].Dr===question.correct_answers[c].entries[y].Dr){
        res22[y].Dr ='correct';

    }else{  res22[y].Dr ='incorrect';
}

}else{
    if(sub[0][y][c].Cr===question.correct_answers[c].entries[y].Cr){
        res22[y].Cr ='correct';

    }
else{    res22[y].Cr ='incorrect';
}}
if(((res22[y].Cr==='correct')||(res22[y].Cr==='correct'))&&(res22[y].Cr==='correct')&&(res22[y].Cr==='correct')){
    qs[i][y]='correct';

}                // if (i===page){
             
 

                 
                    return(


                        <div className='answers' id="results" key={`${i}`}>
                            
                            <h4 key={'subs${i}${y}'}className='qt'>{JSON.stringify([...sub][0][i])}</h4> 
                            <h4 key={'qs${i}${y}'} className='qt'>{JSON.stringify([...qs])}</h4> 
                            <h4 key={'e${i}${y}'} className='qt'>{question.correct_answers.entries[{y}]}</h4>

                            <h5 key={'ares${i}${y}'} className='qt'>
                                {JSON.stringify([...res22])}
                                
                                                       </h5>

                    
  </div>
            
                    )


                }       

            }
            let xxx=-1;
            res22=res22.map((row,i)=>{
                xxx++;
                return(<Col key={`col${i}`} xs={2} md={2} lg={2} sm={2}><div>
        <h4 key={`ad${i}`}>Date--<br/> Answer: {JSON.stringify(row)}<br/> vs. <br/> Your answer: {[...sub][0][i][xxx].when}</h4>
        <h4 key={`at${i}`}>Type--<br/> Answer: {JSON.stringify(row)}<br/> vs. <br/> Your answer: {[...sub][0][i][xxx].type}</h4>
        <h4 key={`adr${i}`}>Dr--<br/> Answer: {JSON.stringify(row)}<br/> vs.<br/> Your answer: {[...sub][0][i][xxx].Cr}</h4>
        <h4 key={`acr${i}`}>Cr--<br/> Answer: {JSON.stringify(row)}<br/> vs.<br/> Your answer: {[...sub][0][i][xxx].Dr}</h4>
        
                </div></Col>);
                }
                )
return(<></>);}))}}
            return (
                <>
                {displayResults(props)}
                </>
            )
            }