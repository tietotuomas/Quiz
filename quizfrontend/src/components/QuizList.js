import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Button
} from '@mui/material'
const QuizList = ({ quizzes }) => {
  return (
    <Box sx={{ width: '400px', mt: '5px' }}>
      <List>
        {quizzes.map((q) => (
          <ListItem sx={{ py: 0.5 }} key={q.topic}>
            <Button variant='contained' sx={{width:'100%'}}>
              <ListItemText
                primary={q.topic}
                secondary={`${q.questions.length} questions, ${q.type}`}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
export default QuizList
