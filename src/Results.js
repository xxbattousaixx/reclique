
import React from 'react';
import 'jquery/src/jquery';
import {Row, Col} from 'react-bootstrap';

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
        var qs=[];
        let b = 0;
     

        if (sub.length > 0){
 return(questions.map((question,i)=>{
    res=[{
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''
      },
      {
        'when': '',
        'type': '',
        'Dr': '',
        'Cr':''
    
      }];
var r = 0;
for (let c=0;c<JSON.parse(JSON.stringify(question.correct_answers[i])).entries.length;c++){

if(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).when)===JSON.stringify(sub[i].when)){
    res[i].when ='correct';
}else{   res[i].when ='incorrect';}

    if(JSON.stringify(sub[i].type)===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[c])).entries[r])).type)){
        res[i].type ='correct';
    }else{   res[i].type ='incorrect';}

if(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).Dr)){

    if(sub[i].Dr===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).Dr)){
        res[i].Dr ='correct';
        r++;

    }else{  res[i].Dr ='incorrect';
    r++;
}

}else{
    if(sub[i].Cr===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).Cr)){
        res[i].Cr ='correct';
        r++;

    }
else{    res[i].Cr ='incorrect';
r++;
}
if(((res[i].Cr==='correct')||(res[i].Cr==='correct'))&&(res[i].Cr==='correct')&&(res[i].Cr==='correct')){
    qs[i]='correct';
    b = i;

}
                // if (i===page){
             

                 
                    return(


                        <div className='answers' id="bigresults" key={i}>
<Col xs={6} md={6} lg={6} sm={6}>
                            
                            <h3 key='n5' className='qt'>{JSON.stringify(sub[i])}</h3> 
                            <h3 key='n6' className='qt'>{qs[i]}</h3> 
                            <h3 key='n7' className='qt'>{JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])}</h3> 

                            </Col>

                            <h3 key='n9' className='qt'>{res.map((row,i)=>{
                        return(<Col xs={3} md={3} lg={3} sm={3}><div>
<h4>Date--<br/> Answer: {JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).when)}<br/> vs. <br/> Your answer: {JSON.stringify(sub[i].when)}</h4>
<h4>Type--<br/> Answer: {JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).type)}<br/> vs. <br/> Your answer: {JSON.stringify(sub[i].type)}</h4>
<h4>Dr--<br/> Answer: {JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).Dr)}<br/> vs.<br/> Your answer: {sub[i].Dr}</h4>
<h4>Cr--<br/> Answer: {JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(question.correct_answers[i])).entries[c])).Cr)}<br/> vs.<br/> Your answer: {sub[i].Cr}</h4>

                        </div></Col>)})}</h3>
                            <br/>
                            <br/><br/>
                            <h4></h4>         
                                      </div>
                    )
                // }else{
                //     return('');
                // }


            }
        }
     } ));

            
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