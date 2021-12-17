/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import 'jquery/src/jquery';

export default function Questions(props){


    const displayQuestions = (props) => {

        const {questions} = props;
        const {page} = props;

        if (questions.length > 0){


            
            return(questions.map((question,i)=>{

                if (i===page){
                
                console.log(i);

                console.log(question);

                

                return(
                    <div id="cq" key={`q${i}`}>
                        <h1 key={`title${i}`} >{question.title}</h1>
                        <h3 key={`desc${i}`}>{question.description}</h3>
                    </div>
                )
                }else{
                    return('');
                }

            }));
        }



             else {
            return (<h3 key='noq${i}'>No Questions</h3>);





        }
    }

return (
    <>
    {displayQuestions(props)}
    </>
)

}