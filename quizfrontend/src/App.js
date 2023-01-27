import { Route, Routes, useMatch, Link } from 'react-router-dom'
import Results from './components/Results'
import Questions from './components/Questions'
import Home from './components/Home'
import Login from './components/Login'
import Statistics from './components/Statistics'
import About from './components/About'
import NewQuiz from './components/NewQuiz'
import QuizList from './components/QuizList'
import Quiz from './components/Quiz'

import QuizIcon from '@mui/icons-material/Quiz'


import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Container,
} from '@mui/material'

import { useState } from 'react'


const App = () => {
  const intialTrueFalseQuiz = {
    id: 1,
    topic: 'GraphQL true/false',
    introduction: 'GraphQL is a query language for your API',
    type: 'True/False answers',
    questions: [
      {
        question: 'GraphQL is a query language for RESTful APIs',
        answer: 'True',
        wrong1: '',
        wrong2: '',
        wrong3: '',
        wrong4: '',
      },
      {
        question:
          'GraphQL allows for multiple queries to be sent in a single request:',
        answer: 'True',
        wrong1: '',
        wrong2: '',
        wrong3: '',
        wrong4: '',
      },
      {
        question:
          'GraphQL only supports read operations and not write operations',
        answer: 'False',
        wrong1: '',
        wrong2: '',
        wrong3: '',
        wrong4: '',
      },
    ],
  }
  const intialMultichoiceQuiz = {
    id: 2,
    topic: 'GraphQL multichoice',
    introduction: '',
    type: 'Multichoice answers',
    questions: [
      {
        question: 'What is the primary advantage of using GraphQL over a traditional REST API?',
        answer: 'Reduced number of API calls',
        wrong1: 'Stronger typing',
        wrong2: 'More flexibility in querying data',
        wrong3: 'None of these',
        wrong4: '',
      },
      {
        question:
          'Which of the following is a valid operation in GraphQL?',
        answer: 'MUTATION',
        wrong1: 'DELETE',
        wrong2: 'GET',
        wrong3: 'None of these',
        wrong4: '',
      },
      {
        question:
          'GraphQL What is the primary benefit of using GraphQL for client-side applications?',
        answer: 'More control over the data retrieved from the server',
        wrong1: 'More efficient use of network bandwidth',
        wrong2: 'Reduced network latency',
        wrong3: 'None of these',
        wrong4: '',
      },
    ],
  }

  const initialOpenQuiz = {
    id: 3,
    topic: 'Famous artists',
    introduction: '',
    type: 'Open answer (exact string)',
    questions: [
      {
        question: 'Who painted the famous artwork "Mona Lisa"?',
        answer: 'Leonardo da Vinci',
        wrong1: '',
        wrong2: '',
        wrong3: '',
        wrong4: '',
      },
      {
        question:
          'Who is known for painting "The Scream"?',
        answer: 'Edvard Munch',
        wrong1: '',
        wrong2: '',
        wrong3: '',
        wrong4: '',
      },
      {
        question:
          'Who is known for creating the sculpture "David"?',
        answer: 'Michelangelo',
        wrong1: '',
        wrong2: '',
        wrong3: '',
        wrong4: '',
      },
    ],
  }
  const [quizzes, setQuizzes] = useState([intialTrueFalseQuiz, intialMultichoiceQuiz, initialOpenQuiz])
  const match = useMatch('/quizzes/:id')

  const quiz = match 
    ? quizzes.find(q => q.id === Number(match.params.id))
    : null

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
            component={Link}
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              to="/"
            >
              <QuizIcon />
              <Typography variant="h4" sx={{ margin: 3, flexGrow: 1 }}>
                QUIZ APP
              </Typography>
            </IconButton>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
            component={Link}
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              to="/quizzes"
            >
              Quiz
            </Button>
            

            <Button
            component={Link}
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              to="/create-quiz"
            >
              Create
            </Button>

            <Button
            component={Link}
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              to="/login"
            >
              Login
            </Button>
            <Button
            component={Link}
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              to="/stats"
            >
              Stats
            </Button>
            <Button
            component={Link}
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              to="/about"
            >
              About
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/quizzes"
          element={<QuizList quizzes={quizzes} />}
        ></Route>
        <Route
          path="/create-quiz"
          element={<NewQuiz quizzes={quizzes} setQuizzes={setQuizzes} />}
        ></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/quizzes/:id" element={<Quiz quiz={quiz}/>} />
        <Route path="/results" element={<Results />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stats" element={<Statistics />}></Route>
      </Routes>
    </Container>
  )
}

export default App
