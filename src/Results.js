
import React from 'react';
import 'jquery/src/jquery';

export default function Results(props){


    const displayResults = (props) => {
        const {questions} = props
        const {sub} = props;
        const {res} = props;
        const {d1} = props;
        const {t1} = props;
        const {dr1} = props;
        const {cr1} = props;
        const {d2} = props;
        const {t2} = props;
        const {dr2} = props;
        const {cr2} = props;



        if (sub.length > 0){


                // questions.correct_answers.map((answer,index)=>{
    for (let i=0;i<sub.length;i++){
                if(sub.length>0){
                
                return(
                    <div className='answers' key={i}>
                        <h3 key='n' className='qt'>{JSON.stringify(questions.correct_answers)}</h3>
                        <h3 key='n2' className='qt'>{JSON.stringify(sub)}</h3> 
                        <h3 key='n3' className='qt'>{JSON.stringify(res)}</h3> 

                        <br/>
                        <br/><br/>
                        <p></p>         
                                  </div>
                )
                

            
        }else {
                return('');
            };
       
      };
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