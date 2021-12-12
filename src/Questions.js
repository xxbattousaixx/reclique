import React from 'react'
import 'jquery/src/jquery'

export default function Questions(props) {
    const { questions } = props
    const { page } = props
    const displayQuestions = (props) =>
        questions.map((question, i) => {
            if (i === page) {
                console.log(i)

                console.log(question)

                return (
                    <div id="cq" key="q${i}">
                        <h1 key="title${i}">{question.title}</h1>
                        <h3 key="desc${i}">{question.description}</h3>
                    </div>
                )
            }
            return ''
        })

    return <>{displayQuestions(props)}</>
}
