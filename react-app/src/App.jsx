import QuizApp from "./components/QuizApp"
import quizData from "./quiz.json"

import "./App.scss"
const App = () => {
  return (
    <>
    <QuizApp data={quizData}/>
    </>
  )
}

export default App