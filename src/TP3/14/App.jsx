import { useState } from "react"
import Question from "./components/Question"
import Score from "./components/Score"

export default function App() {
    const [score, setScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const questions = [
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        },
        {
            question: "2+2 = ?",
            alternatives: ["1", "2", "3", "4"],
            correctAnswerIdx: 3
        }
    ]

    const onPickAlternative = (questionIdx, idx, correctIdx) => {
        if (idx == correctIdx) {
            var updatedScore = [...score];
            updatedScore[questionIdx] = 1;
            
            setScore(updatedScore);
        }
    }

    return (
        <>
            < Question questions={questions} onPickAlternative={onPickAlternative} />
            < Score score={score} />
        </>
    )
}