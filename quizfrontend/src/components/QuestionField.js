import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'

const QuestionTextField = ({ label, onChange, questionNumber, required=true, helper=null }) => {
  console.log('SelectField renderöityy')
  const [text, setText] = useState('')
  const resetText = () => setText('')
  useEffect(() => {
    resetText()
  }, [questionNumber])
  return (
    <TextField
      style={{ marginTop: '10px', marginBottom: '10px' }}
      label={label}
      value={text}
      onChange={(event) => {
        setText(event.target.value)
        onChange(event.target.value)
      }}
      color="primary"
      size="large"
      fullWidth
      required={required}
      helperText={helper}
    />
  )
}

export default QuestionTextField
