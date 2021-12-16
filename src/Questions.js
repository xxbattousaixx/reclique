
import React from 'react'
import 'jquery/src/jquery'

function Questions(props) {
    const { questions } = props
    const { page } = props
    
    const displayQuestions = (props) =>{
   return     questions.map((question, i) => {
            if (i === page) {
                console.log(i)

                console.log(question)

                return (
                    <div>
                        <h1 key={page}>{question.title}</h1>
                        <h3 key={i+1}>{question.description}</h3>
                    </div>
                )
            }
            return ''
        })
    }
    return <>{displayQuestions(props)}</>
}
export default Questions;