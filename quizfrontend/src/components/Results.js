import { Box, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react'

const Results = ({ answers, setAnswers, quiz }) => {
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [showQuestions, setShowQuestions] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  useEffect(() => {
    const feedbackMessages = {
      perfect: [
        'You nailed it, well done!',
        'Perfect, you are a quiz master!',
        'Wow, nice job!',
      ],
      good: ['Nice job!', 'Solid performance!'],
      bad: ['Better luck next time!', `Maybe try another subject?`],
      zero: [
        'Well. There is room for improvement.',
        'That also requires skill!',
      ],
    }
    let correct = 0

    for (let i = 0; i < quiz.questions.length; i++) {
      if (answers[quiz.questions[i].question] === quiz.questions[i].answer) {
        correct += 1
      }
    }

    const correctPercentage = correct / Object.keys(answers).length
    let category =
      correctPercentage === 1
        ? 'perfect'
        : correctPercentage === 0
        ? 'zero'
        : correctPercentage >= 0.5
        ? 'good'
        : 'bad'
    const messages = feedbackMessages[category]
    const randomIndex = Math.floor(Math.random() * messages.length)
    const feedback = messages[randomIndex]

    setTotalCorrect(correct)
    setFeedbackMessage(feedback)
  }, [answers, quiz.questions])

  return (
    <Box mt={5} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">
        You got {totalCorrect} of {Object.keys(answers).length} correct!{' '}
        {feedbackMessage}
      </Typography>

      <Button onClick={() => setShowQuestions(!showQuestions)}>
        {showQuestions ? 'Hide questions' : 'Show questions'}
      </Button>

      {showQuestions && (
        <Box
          mt={5}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          {quiz.questions.map((q, i) => (
            <div key={q.question} style={{ margin: '8px' }}>
              <Typography variant="h5">{`${i + 1}. ${q.question}`}</Typography>
              <Typography variant="h5">
                Your answer: {answers[q.question]}
              </Typography>
              <Typography variant="h5">Correct answer: {q.answer}</Typography>
            </div>
          ))}
        </Box>
      )}

      {/* {quiz.questions.map((q, index) =>  (
  <>
    <Typography variant="h5">{q.question}</Typography>
    <RadioGroup aria-label="question" name={`question-${index}`}  >
      <FormControlLabel value={q.answer} control={<Radio color="primary" />} label={q.answer} />
      <FormControlLabel value={q.wrong1} control={<Radio color="primary" />} label={q.wrong1} />
      <FormControlLabel value={q.wrong2} control={<Radio color="primary" />} label={q.wrong2} />
    </RadioGroup>
  </>
))} */}
    </Box>
  )
}

export default Results
