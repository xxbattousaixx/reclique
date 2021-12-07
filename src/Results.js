
import React from 'react';
import 'jquery/src/jquery';

export default function Results(props){


    const displayResults = (props) => {
        const {questions} = props
        const {sub} = props;
        const {ans} = props;
        const {res} = props;


        if (sub.length > 0){


            
            return(questions.correct_answers.map((answer,index)=>{
      
                if(sub.length>0){
                
                return(
                    <div className='answers' key={index}>
                        <h3 key='n' className='qt'>{answer}</h3>
                        <h3 key='n2' className='qt2'>{sub}</h3> 
                        <br/>
                        <br/><br/>
                        <p></p>         
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