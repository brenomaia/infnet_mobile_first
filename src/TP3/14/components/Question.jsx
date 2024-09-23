const Question = ({ questions, onPickAlternative }) => {
    return (
    <div className="questions">
        <h2>Clique na opção e veja o score ao fim da página</h2>
        {questions.map((question, index) => (
            <div className="question" key={index}>
                <h3>{question.question}</h3>
                <ul className="alternatives">
                    {question.alternatives.map((alternative, idx) => (
                        <li key={idx} onClick={() => onPickAlternative(index, idx, question.correctAnswerIdx)}>{alternative}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
    )
}

export default Question;