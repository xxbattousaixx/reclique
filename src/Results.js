/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';
import {Col} from 'react-bootstrap';

export default function Results(props){
const {sub}=props

const {ans}=props;
const {page}=props;
    const displayResults = (props) => {
        const {questions} = props;
        var qs=[];
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
        0:{
          0:{
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
      
      },
      
      2:{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr': ''
        
        },
      
        3:{
          'when': '',
          'type': '',
          'Dr': '',
          'Cr': ''
          
          }},
        1:{
            0:{
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
              
              },
              
              2:{
                'when': '',
                'type': '',
                'Dr': '',
                'Cr': ''
                
                },
              
                3:{
                  'when': '',
                  'type': '',
                  'Dr': '',
                  'Cr': ''
                  
                  }},
         2:{
                    0:{
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
                      
                      },
                      
                      2:{
                        'when': '',
                        'type': '',
                        'Dr': '',
                        'Cr': ''
                        
                        },
                      
                        3:{
                          'when': '',
                          'type': '',
                          'Dr': '',
                          'Cr': ''
                          
                          }},
                          3:{0:{
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
                            
                            },
                            
                            2:{
                              'when': '',
                              'type': '',
                              'Dr': '',
                              'Cr': ''
                              
                              },
                            
                              3:{
                                'when': '',
                                'type': '',
                                'Dr': '',
                                'Cr': ''
                                
                                }}}

for (let c=0;c<Object.keys(question.correct_answers[page]).length;c++){
    for (let y=0;y<Object.keys(question.correct_answers[1].entries).length;y++){
if(sub[page][y].when===question.correct_answers[1].entries[y].when){
    res22[page][y].when ='correct';
    
}else{   res22[page][y].when ='incorrect';}

    if(sub[page][y].type===question.correct_answers[1].entries[y].type){
        res22[page][y].type ='correct';
//KHGHGHKJGKGGUIKG
    }else{
        res22[page][y].type ='incorrect';
       }

if(question.correct_answers[1].entries[y].Dr){

    if(sub[page][y].Dr===question.correct_answers[1].entries[y].Dr){
        res22[page][y].Dr ='correct';

    }else{  res22[page][y].Dr ='incorrect';
}

}else{
    if(sub[page][y].Cr===question.correct_answers[1].entries[y].Cr){
        res22[page][y].Cr ='correct';

    }
else{    res22[page][y].Cr ='incorrect';
}}
if(((res22[page][y].Dr==='correct')||(res22[page][y].Cr==='correct'))&&(res22[page][y].type==='correct')&&(res22[page][y].when==='correct')){
    qs[page]=''
    qs[page][y]='correct';

}               
 if (i===page){
             console.log(ans);
                                        
                return(questions[page].correct_answers[1].entries.map((a,b)=>{
                    console.log(sub[page][b])

return(
                        <div className='answers' id="results" key={`${b}`}>
    <Col xs={12} md={12} lg={12} sm={12}>
                            
                            <h4 key={`qs${i}${y}`} className='qt'>{JSON.stringify([...qs])}</h4> 
                            
                                </Col>
                            
                            
        <Col xs={3} md={3} lg={3} sm={3}>
                <h4 key={`ad${i}`}>Date--<br/> Answer: {JSON.stringify(a.when)}<br/> vs. <br/> Your answer: {JSON.stringify(sub[page][b].when)}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} sm={3}>
                
                <h4 key={`at${i}`}>Type--<br/> Answer: {JSON.stringify(a.type)}<br/> vs. <br/> Your answer: {JSON.stringify(sub[page][b].type)}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} sm={3}>
                
                <h4 key={`adr${i}`}>Dr--<br/> Answer: {JSON.stringify(a.Dr)}<br/> vs.<br/> Your answer: {JSON.stringify(sub[page][b].Dr)}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} sm={3}>
                
                <h4 key={`acr${i}`}>Cr--<br/> Answer: {JSON.stringify(a.Cr)}<br/> vs.<br/> Your answer: {JSON.stringify(sub[page][b].Cr)}</h4>
                </Col>
                
        
                    
    </div>)}))


}}
            
                
                    
                    }
                
                

            
            
            
                
return(<>
        </>);}))

}}
            return (
                <>
                {displayResults(props)}
                </>
            )
            }