import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import QuestionTextField from './QuestionField'
import SelectField from './SelectField'

const NewQuiz = () => {
  console.log('NewQuiz renderöityy')

  const [quiz, setQuiz] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [categories, setCategories] = useState([
    'General Knowledge',
    'Art',
    'Sports',
    'Custom',
  ])
  const [category, setCategory] = useState('')
  const [amountOfQuestions, setAmountOfQuestions] = useState('')
  const [type, setType] = useState('')
  const [isQuestionTrue, setIsQuestionTrue] = useState('')
  const [question, setQuestion] = useState({
    question: '',
    answer: '',
    wrong1: '',
    wrong2: '',
  })

  const handleOptionChange = (event, setOption) => {
    console.log('option change')
    setOption(event.target.value)
  }

  const handleSettingsSubmit = (event) => {
    event.preventDefault()
    if (!category || !amountOfQuestions || !type) {
      console.log('Please fill all the fields')
    } else {
      console.log('submit')
      setQuestionNumber(1)
    }
  }

  if (questionNumber === 0) {
    return (
      <Box mt={5} display="flex" alignItems="center">
        <form
          onSubmit={handleSettingsSubmit}
          style={{
            width: '50%',
            margin: 'auto',
            position: 'relative',
            paddingBottom: '50px',
          }}
        >
          <SelectField
            label="Select the category of the quiz"
            option={category}
            handleOptionChange={(event) =>
              handleOptionChange(event, setCategory)
            }
            options={categories}
          />
          <SelectField
            label="Select the amount of questions"
            option={amountOfQuestions}
            handleOptionChange={(event) =>
              handleOptionChange(event, setAmountOfQuestions)
            }
            options={[3, 4, 5, 6, 7, 8, 9, 10]}
          />
          <SelectField
            label="Select the type of questions"
            option={type}
            handleOptionChange={(event) => handleOptionChange(event, setType)}
            options={['True/False', 'Multichoice', 'Open (exact string)']}
          />

          <Button
            style={{ position: 'absolute', bottom: '0', right: '0' }}
            variant="contained"
            type="submit"
          >
            NEXT
          </Button>
        </form>
      </Box>
    )
  }

  const handleQuestionChange = (changedQuestion) => {
    setQuestion({ ...question, question: changedQuestion })
  }

  const handleCorrectAnswerChange = (correctAnswer) => {
    setQuestion({ ...question, answer: correctAnswer })
  }

  const handleFirstWrongChange = (changedAnswer) => {
    setQuestion({ ...question, wrong1: changedAnswer })
  }

  const handleSecondWrongChange = (changedAnswer) => {
    setQuestion({ ...question, wrong2: changedAnswer })
  }

  const handleQuestionSubmit = (event) => {
    event.preventDefault()
    console.log('submit question')
    console.log(questionNumber, '+1')
    if (type === 'True/False') {
      setQuestion({ ...question, answer: isQuestionTrue })
    }
    setIsQuestionTrue('')

    setQuestionNumber(questionNumber + 1)
    setQuiz(quiz.concat(question))
    setQuestion({ question: '', answer: '', wrong1: '', wrong2: '' })

    if (questionNumber === amountOfQuestions) {
      console.log('QUIZ RDY')
      setQuestionNumber(0)
      setCategory('')
      setAmountOfQuestions('')
      setType('')
      setQuiz([])
    }
  }

  const AnswerFields = () => {
    if (type === 'True/False') {
      return (
        <SelectField
          label="Select the correct answer to the question"
          option={isQuestionTrue}
          handleOptionChange={(event) =>
            handleOptionChange(event, setIsQuestionTrue)
          }
          options={['True', 'False']}
        />
      )
    }
    if (type === 'Multichoice') {
      return (
        <>
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Fill the correct choice/answer`}
            onChange={handleCorrectAnswerChange}
          />
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Fill the first wrong choice/answer`}
            onChange={handleFirstWrongChange}
          />
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Fill the second wrong choice/answer`}
            onChange={handleSecondWrongChange}
          />
        </>
      )
    }
    if (type === 'Open (exact string)') {
      return (
        <QuestionTextField
          questionNumber={questionNumber}
          label={`Fill the correct answer`}
          onChange={handleCorrectAnswerChange}
        />
      )
    }
  }

  console.log({ quiz })

  return (
    <Box mt={5} display="flex" alignItems="center">
      <Typography variant="h4">
        {`Question number ${questionNumber}/${amountOfQuestions}`}:
      </Typography>
      <form
        onSubmit={handleQuestionSubmit}
        style={{
          width: '50%',
          margin: 'auto',
          position: 'relative',
          paddingBottom: '50px',
        }}
      >
        <QuestionTextField
          questionNumber={questionNumber}
          label={`Question number ${questionNumber}`}
          onChange={handleQuestionChange}
        />
        {AnswerFields()}
        <Button
          style={{ position: 'absolute', bottom: '0', right: '0' }}
          variant="contained"
          type="submit"
        >
          {questionNumber < amountOfQuestions ? 'NEXT' : 'CREATE'}
        </Button>
      </form>
    </Box>
  )
}

export default NewQuiz
