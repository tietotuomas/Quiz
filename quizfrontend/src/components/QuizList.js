import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const QuizList = ({ quizzes }) => {
  const [filter, setFilter] = useState('')

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredQuizzes = quizzes.filter((q) =>
    q.topic.toLowerCase().includes(filter.toLowerCase())
  )
  return (
    <Box
      mt={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <TextField
        label="Filter Quizzes"
        value={filter}
        onChange={handleChange}
      />
      <Typography variant="h5" mt={5} mb={3}>
        Showing {filteredQuizzes.length} of total {quizzes.length} quizzes
      </Typography>
      <List mt={10}>
        {filteredQuizzes.map((q) => (
          <ListItem
            sx={{ width: '150%', transform: 'translateX(-15%)', py: 0.5 }}
            key={q.topic}
          >
            <Button
            component={Link}
              variant="contained"
              sx={{ width: '100%' }}
              to={`/quizzes/${q.id}`}
            >
              <ListItemText
                primary={q.topic}
                secondary={`${q.questions.length} questions, ${q.type}`}
                sx={{ textAlign: 'center' }}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default QuizList
