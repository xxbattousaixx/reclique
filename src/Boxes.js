import React from 'react'
import 'jquery/src/jquery'
import { Row, Col, Form } from 'react-bootstrap'

export default function Boxes(props) {
    const { questions } = props
    const { getD1 } = props
    const { getT1 } = props
    const { getDr1 } = props
    const { getCr1 } = props

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
                        <Row key="row1${i}" xs={3} md={3} lg={3} sm={3}>
                            <Col key="col2${i}" xs={3} md={3} lg={3} sm={3}>
                                <Form.Control
                                    key="date${i}"
                                    name="date"
                                    value=""
                                    type="date"
                                    onChange={(e) => getD1(e.target.value)}
                                />
                            </Col>
                            <Col key="col3${i}" xs={3} md={3} lg={3} sm={3}>
                                <Form.Select
                                    key="type${i}"
                                    name="type"
                                    defaultValue=""
                                    onChange={(e) => getT1(e.target.value)}
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
                            <Col key="col4${i}" xs={3} md={3} lg={3} sm={3}>
                                <Form.Control
                                    key="dr${i}"
                                    name="Dr"
                                    onChange={(e) => getDr1(e.target.value)}
                                    defaultValue=""
                                    type="text"
                                    placeholder="$$$"
                                />
                            </Col>
                            <Col
                                key="col5${i}"
                                xs={3}
                                md={3}
                                lg={3}
                                sm={3}
                                id="vl"
                            >
                                <Form.Control
                                    key="cr${i}"
                                    name="Cr"
                                    onChange={(e) => getCr1(e.target.value)}
                                    defaultValue=""
                                    type="text"
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
