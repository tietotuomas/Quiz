import { Box, Typography, Button, List, ListItem } from '@mui/material'
import { useState } from 'react'
import SelectField from './SelectField'

const Quiz = ({ quiz }) => {
  //   const [questionNumber, setQuestionNumber] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [isQuestionTrue, setIsQuestionTrue] = useState('')
  const [answers, setAnswers] = useState(null)

  const handleStartQuiz = () => {
    setQuizStarted(true)
    setAnswers(Array(quiz.questions.length).fill(''))
  }

  const handleAnswersSubmit = (event) => {
    console.log('vastaukset lähetetty')
    console.log({answers});
    event.preventDefault()
    setAnswers(null)
    setIsQuestionTrue('')
    setQuizStarted(false)

    
  }

  const handleTrueFalseChange = (event, i) => {
    setIsQuestionTrue(event.target.value)
    setAnswers(answers.map((a, index) => index === i ? event.target.value : a))
  }

  const AnswerFields = (q, i) => {
    console.log([{q}, {i}]);
    if (quiz.type === 'True/False answers') {
      return (
        <SelectField
          label="Select the correct answer to the question"
          option={isQuestionTrue}
          handleOptionChange={(event, i) => handleTrueFalseChange(event, i)}
          options={['True', 'False']}
          required={false}
        />
      )
    }
    // if (quiz.type === 'Multichoice answers') {
    //   return (
    //     <>
    //       <QuestionTextField
    //         questionNumber={questionNumber}
    //         label={`Fill the correct choice/answer`}
    //         onChange={handleCorrectAnswerChange}
    //       />
    //       <QuestionTextField
    //         questionNumber={questionNumber}
    //         label={`Fill the first wrong choice/answer`}
    //         onChange={handleFirstWrongChange}
    //       />
    //       <QuestionTextField
    //         questionNumber={questionNumber}
    //         label={`Fill the second wrong choice/answer`}
    //         onChange={handleSecondWrongChange}
    //       />
    //       <QuestionTextField
    //         questionNumber={questionNumber}
    //         label={`Fill the third wrong choice/answer`}
    //         onChange={handleThirdWrongChange}
    //         required={false}
    //         helper="optional"
    //       />
    //       <QuestionTextField
    //         questionNumber={questionNumber}
    //         label={`Fill the fourth wrong choice/answer`}
    //         onChange={handleFourthWrongChange}
    //         required={false}
    //         helper="optional"
    //       />
    //     </>
    //   )
    // }
    // if (quiz.type === 'Open answer (exact string)') {
    //   return (
    //     <QuestionTextField
    //       questionNumber={questionNumber}
    //       label={`Fill the correct answer`}
    //       onChange={handleCorrectAnswerChange}
    //     />
    //   )
    // }
  }

  if (!quizStarted) {
    return (
      <Box
        mt={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography variant="h3">{quiz.topic}</Typography>
        <Typography variant="h5" margin={3}>
          {quiz.introduction}
        </Typography>
        <Button
          variant="contained"
          type="submit"
          onClick={handleStartQuiz}
        >
          Start the quiz
        </Button>
      </Box>
    )
  }

  return (
    <Box
      mt={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <form onSubmit={handleAnswersSubmit}>
        {quiz.questions.map((q, i) => (<div key={q.question} >
          <Typography variant="h5">
            {q.question}
            
          </Typography>
          {AnswerFields(q, i)}
          </div>
        ))}
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </Box>
  )

  //   if (questionNumber < quiz.questions.length) {
  //       return (
  //       <Box mt={5} display="flex" alignItems="center">
  //         <Typography variant="h4">
  //           {`Question number ${questionNumber}/${quiz.questions.length}`}:
  //         </Typography>
  //         <form
  //           onSubmit={handleQuestionSubmit}
  //           style={{
  //             width: '50%',
  //             margin: 'auto',
  //             position: 'relative',
  //             paddingBottom: '50px',
  //           }}
  //         >
  //           <QuestionTextField
  //             questionNumber={questionNumber}
  //             label={`Question number ${questionNumber}`}
  //             onChange={handleQuestionChange}
  //           />
  //           {/* {AnswerFields()} */}
  //           <Button
  //             style={{ position: 'absolute', bottom: '0', right: '0' }}
  //             variant="contained"
  //             type="submit"
  //           >
  //             {questionNumber < quiz.questions.length ? 'NEXT' : 'FINISH'}
  //           </Button>
  //         </form>
  //       </Box>
  //     )
}

export default Quiz
