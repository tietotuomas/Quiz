import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import QuestionTextField from './QuestionField'
import SelectField from './SelectField'
import { useNavigate } from 'react-router-dom'

const NewQuiz = ({ quizzes, setQuizzes }) => {
  console.log('NewQuiz renderöityy')

  const [quiz, setQuiz] = useState({
    topic: '',
    introduction: '',
    questions: [],
    type: '',
    id: 0,
  })
  //conditional rendering is set using the questionNumber
  const [questionNumber, setQuestionNumber] = useState(0)
  const [categories, setCategories] = useState([
    'Information Technology',
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
    wrong3: '',
    wrong4: '',
  })

  const navigate = useNavigate()

  //handle resetting the forms after quiz is fully created
  //and add a new quiz to App state
  useEffect(() => {
    if (questionNumber > amountOfQuestions) {
      console.log('QUIZ RDY')
      console.log({ quiz })
      setQuizzes(quizzes.concat(quiz))
      setQuestionNumber(0)
      setCategory('')
      setAmountOfQuestions('')
      setType('')
      setQuiz({
        topic: '',
        introduction: '',
        questions: [],
        type: '',
        id: 0,
      })
      navigate('/quizzes')
    }
  }, [questionNumber, setQuizzes, amountOfQuestions, quiz, quizzes, navigate])

  const handleOptionChange = (event, setOption) => {
    console.log('option change')
    setOption(event.target.value)
  }

  const handleSettingsSubmit = (event) => {
    event.preventDefault()
    setQuiz({ ...quiz, type: type, id: quizzes.length + 1 })
    setQuestionNumber(1)
  }

  const handleTopicChange = (changedTopic) => {
    setQuiz({ ...quiz, topic: changedTopic })
  }

  const handleIntroductionChange = (changedIntroduction) => {
    setQuiz({ ...quiz, introduction: changedIntroduction })
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
            label="Select the type of quiz"
            option={type}
            handleOptionChange={(event) => handleOptionChange(event, setType)}
            options={[
              'True/False answers',
              'Multichoice answers',
              'Open answer (exact string)',
            ]}
          />
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Topic of the quiz`}
            onChange={handleTopicChange}
          />
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Introduction to the topic/quiz`}
            onChange={handleIntroductionChange}
            required={false}
            helper="optional"
          />

          <Button
            sx={{ position: 'absolute', bottom: '0', right: '0' }}
            variant="contained"
            type="submit"
          >
            NEXT
          </Button>
        </form>
      </Box>
    )
  }

  const handleTrueFalseChange = (event) => {
    setIsQuestionTrue(event.target.value)
    setQuestion({ ...question, answer: event.target.value })
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

  const handleThirdWrongChange = (changedAnswer) => {
    setQuestion({ ...question, wrong3: changedAnswer })
  }

  const handleFourthWrongChange = (changedAnswer) => {
    setQuestion({ ...question, wrong4: changedAnswer })
  }

  const handleQuestionSubmit = (event) => {
    event.preventDefault()
    console.log('submit question')
    console.log(questionNumber, '+1')

    setQuestionNumber(questionNumber + 1)
    setQuiz({ ...quiz, questions: quiz.questions.concat(question) })
    setIsQuestionTrue('')
    setQuestion({
      question: '',
      answer: '',
      wrong1: '',
      wrong2: '',
      wrong3: '',
      wrong4: '',
    })
  }

  const AnswerFields = () => {
    if (type === 'True/False answers') {
      return (
        <SelectField
          label="Select the correct answer to the question"
          option={isQuestionTrue}
          handleOptionChange={handleTrueFalseChange}
          options={['True', 'False']}
        />
      )
    }
    if (type === 'Multichoice answers') {
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
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Fill the third wrong choice/answer`}
            onChange={handleThirdWrongChange}
            required={false}
            helper="optional"
          />
          <QuestionTextField
            questionNumber={questionNumber}
            label={`Fill the fourth wrong choice/answer`}
            onChange={handleFourthWrongChange}
            required={false}
            helper="optional"
          />
        </>
      )
    }
    if (type === 'Open answer (exact string)') {
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
          style={{ position: 'relative', bottom: '0', right: '0' }}
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
