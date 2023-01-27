import { Box, Typography, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import SelectField from './SelectField'

const Quiz = ({ quiz }) => {
  console.log({ quiz })
  //conditional rendering is set using the questionNumber
  const [questionNumber, setQuestionNumber] = useState(0)
  const [answer, setAnswer] = useState('')
  const [answers, setAnswers] = useState([])

  const handleStartQuiz = () => {
    setQuestionNumber(1)
  }

  useEffect(() => {
    if (questionNumber > quiz.questions.length) {
      setAnswers([])
      setQuestionNumber(0)
      setAnswer('')
    }
  }, [questionNumber, quiz.questions.length])

  const handleAnswersSubmit = (event) => {
    console.log({ answers })
    event.preventDefault()

    setQuestionNumber(questionNumber + 1)
    setAnswers(answers.concat(answer))
    setAnswer('')
  }

  const AnswerFields = (question) => {
    if (quiz.type === 'True/False answers') {
      return (
        <SelectField
          label="Select the correct answer"
          option={answer}
          handleOptionChange={(event) => setAnswer(event.target.value)}
          options={['True', 'False']}
          required={false}
        />
      )
    }
    if (quiz.type === 'Multichoice answers') {
      const choices = [
        question.answer,
        question.wrong1,
        question.wrong2,
        question.wrong3,
        question.wrong4,
      ]

      const shuffledChoices = choices
        .filter((c) => c !== '')
        .sort(() => Math.random() - 0.5)

      return (
        <SelectField
          label="Select the correct answer"
          option={answer}
          handleOptionChange={(event) => setAnswer(event.target.value)}
          options={shuffledChoices}
          required={false}
        />
      )
    }

    if (quiz.type === 'Open answer (exact string)') {
      return (
        <TextField
          style={{ marginTop: '10px', marginBottom: '10px' }}
          fullWidth
          label={`Fill the correct answer`}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
      )
    }
  }

  if (questionNumber === 0) {
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
        <Button variant="contained" type="submit" onClick={handleStartQuiz}>
          Start the quiz
        </Button>
      </Box>
    )
  }

  if (questionNumber <= quiz.questions.length) {
    return (
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
        <form
          onSubmit={handleAnswersSubmit}
          style={{
            width: '50%',
            margin: 'auto',
            position: 'relative',
            paddingBottom: '50px',
          }}
        >
          <Typography variant="h5">
            {quiz.questions[questionNumber - 1].question}
          </Typography>
          {AnswerFields(quiz.questions[questionNumber - 1])}

          <Button
            variant="contained"
            type="submit"
            sx={{
              position: 'absolute',
              bottom: '0',
              right: '0',
            }}
          >
            {questionNumber < quiz.questions.length ? 'NEXT' : 'FINISH'}
          </Button>
        </form>
      </Box>
    )
  }
}

export default Quiz
