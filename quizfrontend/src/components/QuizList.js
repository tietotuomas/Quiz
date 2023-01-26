import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material'
const QuizList = ({ quizzes }) => {
  return (
    <Box mt={5} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
      <List>
        {quizzes.map((q) => (
          <ListItem sx={{ py: 0.5 }} key={q.topic}>
            <Button variant='contained' sx={{width:'100%'}} href={`/quizzes/${q.id}`}>
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
