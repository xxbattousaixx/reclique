import React from 'react'
import 'jquery/src/jquery'
import { Row, Col, Form } from 'react-bootstrap'

export default function Boxes(props) {
    const { questions } = props
    const {getVald1} = props;
    const {getValt1} = props;
    const {getValdr1} = props;
    const {getValcr1} = props;

    
    let g =2;
    const displayBoxes = (props) => {
        return questions.map((q) => {
            for (
                let b = 0;
                b < Object.keys(q.correct_answers).length - 1;
                b++
            ) {
                // cycle through the total number of entries ~
                for (
                    let a = 0;
                    a < Object.keys(q.correct_answers[b]).length - 1;
                    a++
                ) {
                    // assign the longest entry length for this question to g
                    if (a > g) {
                        g = a
                    }
                }
            }

            for (let c = 0; c < g; c++) {
                return (
                    <>
                        <Row xs={3} md={3} lg={3} sm={3}>
                            <Col xs={3} md={3} lg={3} sm={3}>
                                <Form.Control
                                    id="when"
                                    value=""
                                    type="date"
                                    onChange={getVald1}
                                />
                            </Col>
                            <Col xs={3} md={3} lg={3} sm={3}>
                                <Form.Select
                                    id="type"
                                    value=""
                                    defaultValue=""
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
                                    value=""
                                    onChange={getValdr1}
                                    defaultValue=""
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
                                    defaultValue=""
                                    type="text"
                                    value=""
                                    placeholder="$$$"
                                />
                            </Col>
                        </Row>
                    </>
                )
            }
            return <></>
        })
    }

    return <>{displayBoxes(props)}</>
}
