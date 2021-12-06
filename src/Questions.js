
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
                    <div id="cq" className='q' key={question.id}>
                        <h3 className='qt'>{question.title}</h3>
                        <p className='qd'>{question.description}</p>
                        <span className='q__fadeOut'></span>
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