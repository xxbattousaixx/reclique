/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';

export default function Questions(props){


    const displayQuestions = (props) => {

        const {questions} = props;
        const {page} = props;

        if (questions.length > 0){


            
            return(questions.map((question,index)=>{

                if (index===page){
                
                console.log(index);

                console.log(question);

                

                return(
                    <div id="cq" className='q' key={index}>
                        <h1 key="title" className='qt'>{question.title}</h1>
                        <h3 key="desc" className='qd'>{question.description}</h3>
                    </div>
                )
                }else{
                    return('');
                }

            }));
        }



             else {
            return (<h3>No Questions</h3>);





        }
    }

return (
    <>
    {displayQuestions(props)}
    </>
)

}