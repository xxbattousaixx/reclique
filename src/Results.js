/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';
import { Col} from 'react-bootstrap';

export default function Results(props){
const {sub}=props
const {ans}=props;
    const displayResults = (props) => {
        const {questions} = props;
        var {submission} = props;
        var qs=[];
        var {sub1} = props;
        if (sub){
 return(questions.map((question,i)=>{
for(let f=0;f<Object.keys(question.correct_answers).length;f++){
    qs.splice(f,0,{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''})
}     

    let res22={
        0:{0:{
      'when': '',
      'type': '',
      'Dr': '',
      'Cr': ''
    
  },
  1:{
    'when': '',
    'type': '',
    'Dr': '',
    'Cr': ''
  
}},
1:{0:{
'when': '',
'type': '',
'Dr': '',
'Cr': ''

},
1:{
'when': '',
'type': '',
'Dr': '',
'Cr': ''

}}}

for (let c=0;c<Object.keys(question.correct_answers[c]).length;c++){
    
    for (let y=0;y<Object.keys(question.correct_answers[c].entries[y]).length;y++){
if(sub1[c][y].when===question.correct_answers[c].entries[y].when){
    res22[c][y].when ='correct';
    qs[y] ='correct';
}else{   res22[c][y].when ='incorrect';}

    if(sub1[c][y].type===question.correct_answers[c].entries[y].type){
        res22[c][y].type ='correct';
//KHGHGHKJGKGGUIKG
    }else{
        res22[c][y].type ='incorrect';
       }

if(question.correct_answers[c].entries[y].Dr){

    if(sub1[c][y].Dr===question.correct_answers[c].entries[y].Dr){
        res22[c][y].Dr ='correct';

    }else{  res22[c][y].Dr ='incorrect';
}

}else{
    if(submission[y].Cr===question.correct_answers[c].entries[y].Cr){
        res22[c][y].Cr ='correct';

    }
else{    res22[c][y].Cr ='incorrect';
}}
if(((res22[c][y].Cr==='correct')||(res22[c][y].Cr==='correct'))&&(res22[c][y].Cr==='correct')&&(res22[c][y].Cr==='correct')){
    // qs[c][y]='correct';

}                // if (i===page){
             
 

                 
                    return(


                        <div className='answers' id="results" key={`${i}`}>
                            
                            <h4 key={'subs${i}${y}'}className='qt'>{JSON.stringify(submission)}</h4> 
                            <h4 key={'qs${i}${y}'} className='qt'>{JSON.stringify([...qs])}</h4> 
                            <h4 key={'e${i}${y}'} className='qt'>{ans[{y}]}</h4>

                            <h5 key={'ares${i}${y}'} className='qt'>
                                {JSON.stringify(res22)}
                                
                                                       </h5>

                    
  </div>
            
                    )


                }       

            }
            let xxx=-1;
            res22=res22.map((row,i)=>{
                xxx++;
                return(<Col key={`col${i}`} xs={2} md={2} lg={2} sm={2}><div>
        <h4 key={`ad${i}`}>Date--<br/> Answer: {JSON.stringify(row)}<br/> vs. <br/> Your answer: {sub[i][xxx].when}</h4>
        <h4 key={`at${i}`}>Type--<br/> Answer: {JSON.stringify(row)}<br/> vs. <br/> Your answer: {sub[i][xxx].type}</h4>
        <h4 key={`adr${i}`}>Dr--<br/> Answer: {JSON.stringify(row)}<br/> vs.<br/> Your answer: {sub[i][xxx].Cr}</h4>
        <h4 key={`acr${i}`}>Cr--<br/> Answer: {JSON.stringify(row)}<br/> vs.<br/> Your answer: {sub[i][xxx].Dr}</h4>
        
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