import './Home.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'jquery/src/jquery'
import Questions from './Questions'
import Results from './Results'
import Boxes from './Boxes'

// this input reference will be placed in the active input (onChange)
export default function Home() {
    const [d1, getD1] = useState('');
const [t1, getT1] = useState('')
const [dr1, getDr1] = useState('');
const [cr1, getCr1] = useState('');
const [page, getPage] = useState('');
const [sub, getSub] = useState([{0:{0:{'When':'',
'Type':'',
'Dr':'',
'Cr':''}}}]);
const [res, getRes] = useState([{0:{}}]);
const [ans, getAns] = useState([{0:{}}]);
const [questions, getQuestions] = useState([{0:{'correct_answers':[{0:{0:{'When':'',
'Type':'',
'Dr':'',
'Cr':''}}}]}}]);

    let qs = ans
    let q = sub
    let p = 0

    const baseURL =
        'https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json'
    //CALL HOOK -- gets starter JSON array
    useEffect(() => {
        getAllQuestions()
        getPage(p)
    }, [p])
    //CALL HOOK -- updates entry when adequate and provides it --> getUpdate at SUB, and getAnswers()
    const onNext = (e) => {
        e.preventDefault()

        if (p < questions.length - 1) {
            p++

            if (p >= 0 && p < questions.length) {
                getUpdate({
                    when: d1,
                    type: t1,
                    Dr: dr1,
                    Cr: cr1,
                })

                getAns(
                    questions.correct_answers.entries.map((e, i) => {
                        //e will be an integer value
                        [
                            {
                                i: {
                                    when: e.when,
                                    type: e.type,
                                    Dr: e.dr1,
                                    Cr: e.cr1,
                                }}
                            
                        ]
                    })
                )
                getPage(p)
                p--
            }
        } else if (p === questions.length - 1) {
            // getPage(p);
        }
    }
    //CALL HOOK -- update current entry if adequate --> getUpdate at SUB, and getAnswers()
    const onPrev = (e) => {
        e.preventDefault()

        if (p > 0) {
            p--

            if (p <= questions.length - 1 && p >= 0) {
                //every time we success hit to a different question, answer will become populated at each entry-level... this is a good time to populate RES
                getUpdate({
                    when: d1,
                    type: t1,
                    Dr: dr1,
                    Cr: cr1,
                })
                getSub(
                    update.map((e, i) => {
                        //e will be an integer value

                        ;[
                            {
                                i: {
                                    when: v.when,
                                    type: v.type,
                                    Dr: v.dr1,
                                    Cr: v.cr1,
                                },
                            },
                        ]
                    })
                )
                getAns(
                    questions.correct_answers.entries.map((e, i) => {
                        //e will be an integer value
                        ;[
                            {
                                i: {
                                    when: e.when,
                                    type: e.type,
                                    Dr: e.dr1,
                                    Cr: e.cr1,
                                },
                            },
                        ]
                    })
                )

                //getRes();
                getPage(p)
            }
        } else if (p === 0) {
            // getPage(p);
        }
    }
    //CALL HOOK -- updates the results that will be shown. Gets the current submission, which consists of the actual value at each box
    const submitButton = (e) => {
        e.preventDefault()

        //this will grab the submission at this current page as UPDATE and
        getSub(
            update.map((v, i) => {
                //e will be an integer value

                ;[
                    {
                        i: { when: v.when, type: v.type, Dr: v.dr1, Cr: v.cr1 },
                    },
                ]
            })
        )

        //every time we submit, sub will become populated at each entry-level... -- this is a good time to populate RES ..  --

        //will have to place qs inside with a 3D JSON array mapping -- of your answers at every entry vs. all possible answers.. --
        getRes(
            questions.correct_answers.map((entry, i) => {
                for (let c = 0; c < Object.keys(questions).length - 1; c++) {
                    for (
                        let y = 0;
                        y <
                        Object.keys(question.correct_answers.entries).length -
                            1;
                        y++
                    ) {
                        //   qs[p][i] = m;
                        //   if ((Cr1 || Dr1) && t1 && d1) {
                        //     res22[c][y].push({
                        //       when: d1.slice(2, 7),
                        //       type: t1,
                        //       Dr:'',
                        //       Cr:'',
                        //     });
                        //   }

                        //   var res11 = res;
                        //   res11[c][y] = {
                        //     when: question.correct_answers.entries[m].when,
                        //     type: question.correct_answers.entries[m].type,
                        //     Dr: question.correct_answers.entries[m].Dr,
                        //     Cr: question.correct_answers.entries[m].Cr,
                        //   };
                        //   getAns(res11);
                        //   const rowAns = res;
                        //   const res222 = res22;
                        if (sub.when == ans[c][y].when) {
                            qs[c][y].when = 'correct'
                        } else {
                            res22[c].type = 'incorrect'
                        }

                        if (res22[c][y].type == ans[c][y].type) {
                            sub.Dr = 'correct'

                            qs[c][y].Dr = 'correct'
                        } else {
                            if (sub.Dr == ans[c][y].Dr) {
                                sub.Dr = 'correct'

                                qs[c][y].Dr = 'correct'
                            }

                            if (sub.Cr == ans[c][y].Cr) {
                                qs[c][y].Cr = 'correct'
                            }
                            if (
                                (qs[c][y].Cr === 'correct' ||
                                    qs[c].Dr === 'correct') &&
                                qs[c].type === 'correct' &&
                                qs[c].when === 'correct'
                            ) {
                                qs[c][y] = 'correct'
                            }

                            // qs[question#][entry#].row contains the result at every question entry, if ANY if these are correct the question is right...
                            if (qs[c][y] == 'correct') {
                                q[c].type = 'correct'
                                // q just contains the final result at each question
                            }
                        }

                        // if (i===page){
                    }
                }
                return qs
            })
        )

        scrollToBottom()
    }
    //function to scroll on result render
    const scrollToBottom = () => {
        Results.scrollIntoView({ behavior: 'smooth' })
    }
    // function that will grab JSON with the use of axios
    const getAllQuestions = () => {
        axios
            .get(baseURL)
            .then((response) => {
                const allQuestions = JSON.parse(JSON.stringify(response.data))
                getQuestions(allQuestions)
            })
            .catch((error) => console.error(`Error: ${{ error }}`))
    }
    // On render we will grab the JSON and start at page p=0 which is actively updated
    // grabs the page number ++ and updates the current state to show the page

    //this fires everytime you hit next or previous
    const createResultArr = () => {
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
        for (let n = 0; n < Object.keys(sub).length - 1; n++) {
            // cycle through each correct answer for this question ~ submissions are correct if they match any of these....
            // possible answer array
            temp.push([])
            // submission array
            temp2.push([])
            for (let b = 0; b < Object.keys(ans[n]).length - 1; b++) {
                temp[n] = questions[n].correct_answers.entries
            }
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
                Object.keys(questions[n].correct_answers[b].entries).length - 1;
                a++
            ) {
                // now you can use n,b,a to populate a temporary array with correct/incorrect at each given submission vs answer given
                temp[n][b] = questions[p].correct_answers.entries[b]
                result[n][b][a] = thisbox
            }
        }
        return result
    }

    // the submit button essentially displays the result after comparing complete SUB vs ANS
    // const submitButton = (e) => {
    //   e.preventDefault();
    //   updateInput();
    //   scrollToBottom();
    // };
    // here we return the frame of the website with the three child components making it up -- Questions, Boxes, Results
    return (
        <>
            <Questions
                key="questions${page}"
                questions={questions}
                page={page}
            />
            <Container key="head${page}" id="cf" fluid>
                <br />
                <hr />
                <br />
                <br />
                <Row xs={3} md={3} lg={3} sm={3}>
                    <Col xs={3} md={3} lg={3} sm={3} />
                    <Col xs={3} md={3} lg={3} sm={3} />
                    <Col xs={3} md={3} lg={3} sm={3}>
                        &nbsp;
                    </Col>
                    <Col xs={3} md={3} lg={3} sm={3} id="vl">
                        &nbsp;
                    </Col>
                </Row>
                <Row xs={3} md={3} lg={3} sm={3} id="bb">
                    <Col xs={3} md={3} lg={3} sm={3} />
                    <Col xs={3} md={3} lg={3} sm={3} />
                    <Col xs={3} md={3} lg={3} sm={3}>
                        {' '}
                        Dr
                    </Col>
                    <Col xs={3} md={3} lg={3} sm={3} id="vl">
                        Cr
                    </Col>
                </Row>
                <Row xs={3} md={3} lg={3} sm={3}>
                    <Col xs={3} md={3} lg={3} sm={3} />
                    <Col xs={3} md={3} lg={3} sm={3} />
                    <Col xs={3} md={3} lg={3} sm={3}>
                        &nbsp;
                    </Col>
                    <Col xs={3} md={3} lg={3} sm={3} id="vl">
                        &nbsp;
                    </Col>
                </Row>
            </Container>
            <Container key="boxes" fluid>
                <div id="box" key="box${p}" className="b">
                    <Boxes
                        key="boxes"
                        questions={questions}
                        getD1={getD1}
                        getT1={getT1}
                        getdr1={getDr1}
                        getCr1={getCr1}
                    />
                </div>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container key="buttons${p}" fluid>
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
                    <br />
                    <br />
                </Row>
            </Container>
            <Container key="results{p}" fluid>
                <Row xs={12} md={12} lg={12} sm={12}>
                    <Col xs={12} md={12} lg={12} sm={12}>
                        <Button onClick={submitButton}>Submit</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <div id="containerEndRef" />
                <br />
                <br />
                <Results
                    key="resultslist${p}"
                    sub={sub}
                    ans={ans}
                    res={res}
                    questions={questions}
                />
            </Container>
        </>
    )
}
