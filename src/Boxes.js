import React from 'react'
import 'jquery/src/jquery'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

function Boxes(props) {
    const {page,getPage}=props;
    const { questions } = props
    const {t1,d1,cr1,dr1}=props;
   
    const {getVald1} = props;
    const {getValt1} = props;
    const {getValdr1} = props;
    const {getValcr1} = props;

    const {update,getUpdate}=props;
    const {ans,getAns}=props;
    


    const onNext = (props) => {

 
    let go = 0;
    
    let g = 4;
   let lastIndex2 = g;
    let jj = []
    if ((page < g)&&(page<=0)) {
  //update holds the value 
  for(let l=0;l<lastIndex2;l++)
  {
      if(jj[l]){
jj.splice(l,0, {'when':d1[l],'type':t1[l],'Dr':dr1[l],'Cr':cr1[l]});
  }}
  console.log(update);

   let hh=[];
   questions.map((e, i) => {

for (let a=0;a<questions[i].correct_answers.length;a++){
       for (let b=0;b<questions[i].correct_answers[a].entries.length;b++){
       //e will be an integer value
hh.push( {
               a : {
            'when': e.correct_answers[a].entries[b].when,
            'type': e.correct_answers[a].entries[b].type,
            'Dr': e.correct_answers[a].entries[b].Dr,
            'Cr': e.correct_answers[a].entries[b].Cr,
               }}
             );
             
            }
        }

        return(hh.reverse())



                              });


                            
console.log(hh);

if (!ans){

                              getAns(hh);
                              console.log(ans);
                           }
   
        getPage(page +1);
        console.log(page)
    }

}

//CALL HOOK -- update current entry if adequate --> getUpdate at SUB, and getAnswers()
const onPrev = (props) => {

 
    let go = 0;
    
    let g = 4;
   let lastIndex2 = g;
    let jj = [1]
    if ((page <= g)&&(page>0)) {
        //update holds the value 
        for(let l=0;l<lastIndex2;l++)
       {
           if(jj[l]){
jj.splice(l,0, {'when':d1[l],'type':t1[l],'Dr':dr1[l],'Cr':cr1[l]});
       }}
  console.log(update);
    


        let hh=[];
        questions.map((e, i) => {
     
     for (let a=0;a<questions[i].correct_answers.length;a++){
            for (let b=0;b<questions[i].correct_answers[a].entries.length;b++){
            //e will be an integer value
     hh.push( {
               'correct_answers': {
                    a: {
                 'when': e.correct_answers[a].entries[b].when,
                 'type': e.correct_answers[a].entries[b].type,
                 'Dr': e.correct_answers[a].entries[b].Dr,
                 'Cr': e.correct_answers[a].entries[b].Cr,
                    }}}
                  );
                  
                 }
             }
     
             return(hh.reverse())
     
     
     
                                   });
     
     
     
     
                                 
     
     console.log(hh);
     
if (!ans){

                                   ans.push(hh);
                                   console.log(ans);
                                }
        
        getPage(page -1);
        //clear inputs....
        console.log(page)
    }

}

    const displayBoxes = (props) => {

        
        return questions.map((q,i) => {
    
            Object.keys(q).map((ca,ii)=>{
console.log(ca)
Object.keys(ca).map((e,iii)=> {
console.log(e)
    return(<> 

</>);
})

    return(<><Row key={Math.random(1000)} xs={3} md={3} lg={3} sm={3}>
    <Col xs={3} md={3} lg={3} sm={3}>
        <Form.Control
            id="when"
            index={ii}
            type="date"
            onChange={getVald1}
        />
    </Col>
    <Col xs={3} md={3} lg={3} sm={3}>
        <Form.Select
            id="type"
            index={ii}
            
            
            onChange={getValt1}
        >
            <option />
            <option>revenue</option>
            <option>deferred</option>
            <option>cash</option>
            <option>receivable</option>
            <option>contra</option>
            <option>system-credit</option>
        </Form.Select>
    </Col>{' '}
    <Col  xs={3} md={3} lg={3} sm={3}>
        <Form.Control
            id="Dr"
            index={ii}
            
            onChange={getValdr1}
            
            type="text"
            placeholder="$$$"
        />
    </Col>
    <Col
        xs={3}
        md={3}
        lg={3}
        sm={3}
        id="vl"
    >
        <Form.Control
            id="Cr"
            onChange={getValcr1}
            type="text"
            index={ii}
            
            placeholder="$$$"
        />
    </Col>
</Row>
</>);
})       


                return (
                    <>       
                    </>
                )
        })
    }

    return <>{displayBoxes(props)}
     <br />

<br />
<hr />
<br />
<br />
<Container key={page} fluid>
    <Row xs={4} md={4} lg={4} sm={4}>
        <Col xs={2} md={2} lg={2} sm={2} />
        <Col xs={4} md={4} lg={4} sm={4}>
            <Button onClick={onPrev}>Previous</Button>
        </Col>
        <Col xs={4} md={4} lg={4} sm={4}>
            <Button onClick={onNext}>Next</Button>
        </Col>
        <Col xs={2} md={2} lg={2} sm={2} />

        <br />
        <br />
    </Row>
</Container></>
}
export default Boxes;