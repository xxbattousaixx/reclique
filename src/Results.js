
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
if(JSON.stringify(sub[i].when)===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[r])).when)){
    res +='Date correct.';
}else{
    res+="Date wrong. ";
};

    if(JSON.stringify(sub[i].type)===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[r])).type)){
        res +='Type correct. ';
    }else{
        res+="Type wrong. ";
    }
if(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[i])).Dr)){

    if(sub[i].Dr===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[i])).Dr)){
        res +='Dr correct. ';
r++;

    }else{
        console.log()
        res+="Dr wrong. ";
r++;

    }

}else{
    if(sub[i].Cr===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[i])).Cr)){
        res +='Cr correct.';
r++;

    }else{
        res+="Cr wrong.";
r++;

    }

}

                // if (i===page){
             

                 
                    return(
                        <div className='answers' key={i}>
                            <h3 key='n' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[r-1])).when)}</h3>
                            <h3 key='n2' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[r-1])).type)}</h3>
                            <h3 key='n3' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[r-1])).Dr)}</h3>
                            <h3 key='n4' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[r-1])).Cr)}</h3>
                            
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


            }
            
            ));

            
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