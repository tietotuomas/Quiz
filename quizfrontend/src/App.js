import { Route, Routes } from 'react-router-dom'
import Results from './components/Results'
import Questions from './components/Questions'
import Home from './components/Home'
import Login from './components/Login'
import Statistics from './components/Statistics'
import About from './components/About'
import NewQuiz from './components/NewQuiz'
import ChooseQuiz from './components/ChooseQuiz'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Container,
} from '@mui/material'
import QuizIcon from '@mui/icons-material/Quiz'

const App = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              href="/"
            >
              <QuizIcon />
              <Typography variant="h4" sx={{ margin: 3, flexGrow: 1 }}>
                QUIZ APP
              </Typography>
            </IconButton>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              href="/choose-quiz"
            >
              Quiz
            </Button>

            <Button
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              href="/create-quiz"
            >
              Create
            </Button>

            <Button
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              href="/login"
            >
              Login
            </Button>
            <Button
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              href="/stats"
            >
              Stats
            </Button>
            <Button
              style={{ width: '100px', height: '50px' }}
              size="large"
              color="inherit"
              href="/about"
            >
              About
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/choose-quiz" element={<ChooseQuiz/>}></Route>
        <Route path="/create-quiz" element={<NewQuiz />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stats" element={<Statistics />}></Route>
      </Routes>
    </Container>
  )
}

export default App
