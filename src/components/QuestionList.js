import React, { useState, useEffect } from "react";
import QuestionForm from "./QuestionForm";


function QuestionList() {
  const [questions, setQuestions] = useState([])

  function handleAddQuestion (newQuestion) {
     setQuestions([...questions, newQuestion])
  }
  function handleDeleteQuestion(deletedQuestion) {
    setQuestions(questions.filter((question)=> question.id !==deletedQuestion.id))
  }

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((r)=>r.json())
    .then((questions)=>setQuestions(questions))
  }, [])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm onDeleteQuestion={handleDeleteQuestion} onAddQuestion={handleAddQuestion} />
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map((question) => (
          <li key={question.id}> {question.prompt} {question.answers} {question.correctIndex} </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
