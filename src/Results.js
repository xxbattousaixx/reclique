
import React from 'react';
import 'jquery/src/jquery';

export default function Results(props){



    const displayResults = (props) => {
        const {questions} = props
        const {sub} = props;
        var {res} = props;
        const {d1} = props;
        const {t1} = props;
        const {dr1} = props;
        const {cr1} = props;
        const {d2} = props;
        const {t2} = props;
        const {dr2} = props;
        const {cr2} = props;
        const {page} = props;

     

        if (sub.length > 0){
 return(questions.map((question,i)=>{
res='';
var r = 0;
if(JSON.stringify(sub[r].when)===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).when)){
    res +='Date correct.';
}else{
    res+="Date wrong. ";
}

    if(JSON.stringify(sub[r].type)===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).type)){
        res +='Type correct. ';
    }else{
        res+="Type wrong. ";
    }
if(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).Dr)){

    if(JSON.stringify(sub[r])===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).Dr)){
        res +='Dr correct. ';
    }else{
        res+="Dr wrong. ";
    }
}else{
    if(JSON.stringify(sub[r])===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).Cr)){
        res +='Cr correct.';
    }else{
        res+="Cr wrong.";
    }

}

                // if (i===page){
r++;
             

                 
                    return(
                        <div className='answers' key={i}>
                            <h3 key='n' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).when)}</h3>
                            <h3 key='n2' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).type)}</h3>
                            <h3 key='n3' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).Cr)}</h3>
                            <h3 key='n4' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[0])).Dr)}</h3>
                            
                            <h3 key='n5' className='qt'>{JSON.stringify(sub[i])}</h3> 

                            <h3 key='n9' className='qt'>{JSON.stringify(res)}</h3> 
    
                            <br/>
                            <br/><br/>
                            <p></p>         
                                      </div>
                    )
                // }else{
                //     return('');
                // }


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