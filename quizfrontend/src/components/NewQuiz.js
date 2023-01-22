import { Box, Button } from '@mui/material'
import { useState } from 'react'
import SelectField from './SelectField'

const NewQuiz = () => {
  console.log('NewQuiz renderöityy')
  const [categories, setCategories] = useState([
    'General Knowledge',
    'Art',
    'Sports',
    'Custom',
  ])
  const [category, setCategory] = useState('')
  const [amountOfQuestions, setAmountOfQuestions] = useState('')
  const [type, setType] = useState('')

  const handleOptionChange = (event, setOption) => {
    console.log(setOption)
    console.log('change')
    console.log(event)
    setOption(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!category || !amountOfQuestions || !type) {
      console.log('Please fill all the fields')
    } else {
      console.log('submit')
      setCategory('')
      setType('')
      setAmountOfQuestions('')
    }
  }

  return (
    <>
      <Box mt={5} display="flex" alignItems="center">
        <form onSubmit={handleSubmit} style={{ width: '50%', margin: 'auto', position: 'relative', paddingBottom: '50px' }}>
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

          <Button style={{position: 'absolute', bottom: '0', right: '0'}} variant="contained" type="submit">
            NEXT
          </Button>
        </form>
      </Box>
    </>
  )
}

export default NewQuiz
