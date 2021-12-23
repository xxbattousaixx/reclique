/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';
import {Col,Row} from 'react-bootstrap';
var qs=[];
export default function Results(props){
const {sub}=props
const {ans}=props;
const {page}=props;
    const displayResults = (props) => {

        var qs=[];

        const {questions} = props;
        if (sub){
 return(questions.map((question,i)=>{
for(let f=0;f<Object.keys(question.correct_answers).length;f++){
    qs.splice(f,0,[{
       
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
            
            }}])
         
                                  
}     

    let res22={
        0:{
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
                                  
                                  }}},1:{
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
                                                          
                                                          }}},2:{
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
                                                                                      
                                                                                      }}},3:{
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
                                                        
                                                        }

for (let c=0;c<Object.keys(question.correct_answers).length-1;c++){
    for (let y=0;y<Object.keys(question.correct_answers[1].entries).length-1;y++){
if(sub[i][y].when===ans[i][1].entries[y].when){
    res22[i][y].when ='correct';
}else{   res22[i][y].when ='incorrect';}

if(sub[i][y].type===ans[i][1].entries[y].type){
        res22[i][y].type ='correct';
    }else{
        res22[i][y].type ='incorrect';}
        
if(sub[i][y].Dr==ans[i][1].entries[y].Dr){
        res22[i][y].Dr ='correct';
    }else{  res22[i][y].Dr ='incorrect';}

if(sub[i][y].Cr==ans[i][1].entries[y].Cr){
    res22[i][y].Cr ='correct';}
else{  
    res22[i][y].Cr ='incorrect';}



    
if(((res22[i][y].Dr==='correct')||(res22[i][y].Cr==='correct'))&&(res22[i][y].type==='correct')&&(res22[i][y].when==='correct')){
    qs[page][y]='CORRECT';

}else{qs[page][y]='INCORRECT'}   


 if (i===page){
             console.log(ans);
                                        
                return(questions[page].correct_answers[1].entries.map((a,b)=>{
                    console.log(sub[i][b])

return(
                        <div className='answers' id="results" key={`${b}`}>
    <Col xs={12} md={12} lg={12} sm={12}>
                           <hr/>
      {/* <h4 key={`qs${i}${y}`} className='qt'>{JSON.stringify(qs[i][y])}</h4>  */}
                    
                            
                                </Col>


                            <Row xs={3} md={3} lg={3} sm={3}>
                            
        <Col xs={3} md={3} lg={3} sm={3} >
                <h4 key={`ad${i}`}>Date--<br/> Answer: {JSON.stringify(a.when)}<br/> vs. <br/> Your answer: {JSON.stringify(sub[i][b].when)}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} sm={3}>
                
                <h4 key={`at${i}`}>Type--<br/> Answer: {JSON.stringify(a.type)}<br/> vs. <br/> Your answer: {JSON.stringify(sub[i][b].type)}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} sm={3}>
                
                <h4 key={`adr${i}`}>Dr--<br/> Answer: {JSON.stringify(a.Dr)}<br/> vs.<br/> Your answer: {JSON.stringify(parseInt(sub[i][b].Dr))}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} sm={3}>
                
                <h4 key={`acr${i}`}>Cr--<br/> Answer: {JSON.stringify(a.Cr)}<br/> vs.<br/> Your answer: {JSON.stringify(parseInt(sub[i][b].Cr))}</h4>
                </Col>
                
                </Row>
                
                    
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