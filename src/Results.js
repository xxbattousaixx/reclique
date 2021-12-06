
import React from 'react';
import 'jquery/src/jquery';

export default function Results(props){


    const displayResults = (props) => {
        const {questions} = props
        const {sub} = props;

        if (sub.length > 0){


            
            return(questions.map((question,index)=>{
      
                if(sub.entries){
                
                return(
                    <div className='answers' key={index}>
                        <h3 key='n' className='qt'>{question.correct_answers.entries}</h3>
                        <h3 key='n2' className='qt2'>{sub.entries}</h3>          
                                  </div>
                )
                

            
        }else {
                return('');
            };
       
        }));
    }



         else {
        return (<h3>No Questions</h3>);





    };
}
return (
    <>
    {displayResults(props)}
    </>
)

}