
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
                    <div id="cq">
                        <h1>{question.title}</h1>
                        <h3>{question.description}</h3>
                    </div>
                )
            }
            return ''
        })

    return <>{displayQuestions(props)}</>
}
