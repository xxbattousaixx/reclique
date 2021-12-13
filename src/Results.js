
import React from 'react'
import 'jquery/src/jquery'
import { Col, Container } from 'react-bootstrap'

// to display results we will need the JSON feed to know answers and compare it against SUB

 function Results(props) {
    const { questions } = props
const { sub } = props
const { ans } = props
const { res } = props

    //can only call Hooks here -- you only need RES in order to show the final output...and thats already in state so no hooks anyway
    let qs = []
    const createResultArr = (props) => {
        // first change the state of SUB to reflect the values inside your current BOX
        // current submissions will be organized in one array
        const thisbox = 'wrong.'
        
        const result = [
            //n
            [
                //b
                [],
                [],
                //a refers to the index of the entry array
            ],
            [[], []],
        ]
        const temp = []
        const temp2 = []
        // cycle through each question n ~ for every question there are a number of possible answers....
        for (let n = 0; n < sub.length - 1; n++) {
            // cycle through each correct answer for this question ~ submissions are correct if they match any of these....
            // possible answer array
            temp.push([])
            // submission array
            temp2.push([])
            for (let b = 0; b < Object.keys(ans[n].length) - 1; b++) {
                temp[n] = questions[n].correct_answers.entries
            
            // push every answers on this page into a comparison updater~~
            temp2[n] = []
            temp2[n].push([])
            temp[n] = []
            temp[n].push([])
            result[n] = []
            result[n].push([])
            // cycle through the total number of entries ~ can assign correct/incorrect at any given current input
            for (
                let a = 0;
                a <
                questions[n].correct_answers[b].entries.length - 1;
                a++) {
                // now you can use n,b,a to populate a temporary array with correct/incorrect at each given submission vs answer given
                temp[n][b] = questions[n].correct_answers.entries[b]
                result[n][b][a] = thisbox
            };
        }
 }
        return result;
    }

    const displayResults = (props) => {
        // the input reference can be accessed at every change -- a changed value will be held inside this variable
         var qs = createResultArr();

        return questions.map((question, i) => {
            const res22 = []
            let q = []

            // questions
            for (let c = 0; c < question.length - 1; c++) {
                res22.push([c])
                qs.push([c])
                // entry #
                for (
                    let y = 0;
                    y <
                    question.correct_answers.entries.length - 1;
                    y++
                ) {
                    // empty res at every entry -- corrects/incorrects live in q[]
                    // getRes();
                    return (
                        <>
                            <Col  xs={3} md={3} lg={3} sm={3}>
                                <p className="qt">
                                    {res}
                                </p>
                                <p>{q[c]}</p>
                                <br />
                            </Col>
                            <Col xs={1} md={1} lg={1} sm={1} />
                        </>
                    )
                }
                res22[c].push([])

                // populate response22 @ each row - update res

                //CHECK YOUR SUBMISSION AGAINST EVERY POSSIBLE CORRECT ANSWER
                return (
                    <Container fluid>
                        <h4 className="qt">
                            <Col xs={3} md={3} lg={3} sm={3}>
                                <p className="qt">
                                    Question #{i} --
                                    {res[i]}
                                </p>
                                <br />
                            </Col>
                            <Col xs={1} md={1} lg={1} sm={1} />
                            {ans.map((ce, i) => (
                                <Col xs={2} md={2} lg={2} sm={2}>
                                    <div>
                                        <h4>
                                            Date--
                                            <br /> Answer:
                                            {ce}
                                            <br /> vs.
                                            <br /> Your answer: {sub[i].when}
                                        </h4>
                                        <h4>
                                            Type--
                                            <br /> Answer:
                                            {ce.type}
                                            <br /> vs.
                                            <br /> Your answer: {sub[i].type}
                                        </h4>
                                        <h4>
                                            Dr--
                                            <br /> Answer:
                                            {ce.Dr}
                                            <br /> vs.
                                            <br /> Your answer:
                                            {sub[i].Dr}
                                        </h4>
                                        <h4>
                                            Cr--
                                            <br /> Answer:
                                            {ce.cr}
                                            <br /> vs.
                                            <br /> Your answer:
                                            {sub[i].Cr}
                                        </h4>
                                    </div>
                                </Col>
                            ))}
                        </h4>
                        <br />
                    </Container>
                )
            }
    
            return(qs);
        }
        
       )

    }

    return <>{displayResults(props)}</>
}
export default Results;