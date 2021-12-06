
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
                        <h3 key="title" className='qt'>{question.title}</h3>
                        <p key="desc" className='qd'>{question.description}</p>
                    </div>
                )
                }else{
                    return('');
                }

            }));
        }



             else {
            return (<h3>No Questions</h3>);





        };
    }

return (
    <>
    {displayQuestions(props)}
    </>
)

}