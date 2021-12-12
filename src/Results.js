import React from 'react'
import 'jquery/src/jquery'
import { Col, Container } from 'react-bootstrap'

// to display results we will need the JSON feed to know answers and compare it against SUB

export default function Results(props) {
    const { questions } = props
    const { sub } = props
    const { ans } = props
    const { res } = props
    //can only call Hooks here -- you only need RES in order to show the final output...and thats already in state so no hooks anyway
    let qs = []

    const displayResults = (props) => {
        // the input reference can be accessed at every change -- a changed value will be held inside this variable
        // var qs = [];

        return questions.map((question, i) => {
            const res22 = []
            // questions
            for (let c = 0; c < Object.keys(questions).length - 1; c++) {
                res22.push([c])
                qs.push([c])
                // entry #
                for (
                    let y = 0;
                    y <
                    Object.keys(question.correct_answers.entries).length - 1;
                    y++
                ) {
                    // empty res at every entry -- corrects/incorrects live in q[]
                    // getRes();
                    return (
                        <>
                            <Col key="col${y}" xs={3} md={3} lg={3} sm={3}>
                                <p key="${y}" className="qt">
                                    {res}
                                </p>
                                <p>{q[c]}</p>
                                <br />
                            </Col>
                            <Col key="col${c}" xs={1} md={1} lg={1} sm={1} />
                        </>
                    )
                }
                res22[c].push([])
                let q = []

                // populate response22 @ each row - update res

                //CHECK YOUR SUBMISSION AGAINST EVERY POSSIBLE CORRECT ANSWER
                return (
                    <Container key="overview" fluid>
                        <h4 key="n9" className="qt">
                            <Col key="col${y}" xs={3} md={3} lg={3} sm={3}>
                                <p key="${y}" className="qt">
                                    Question #{i} --
                                    {res[i]}
                                </p>
                                <br />
                            </Col>
                            <Col key="col${c}" xs={1} md={1} lg={1} sm={1} />
                            {ans.map((ce, i) => (
                                <Col key="col${i}" xs={2} md={2} lg={2} sm={2}>
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
        })
    }

    return <>{displayResults(props)}</>
}
