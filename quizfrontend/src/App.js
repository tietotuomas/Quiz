import { Route, Routes } from 'react-router-dom'
import Results from './components/Results'
import Questions from './components/Questions'
import Home from './components/Home'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from '@mui/material'
import QuizIcon from '@mui/icons-material/Quiz'

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <QuizIcon />
              <Typography variant="h4" sx={{ margin: 3, flexGrow: 1 }}>
                QUIZ APP
              </Typography>
            </IconButton>
          </div>
          <Stack direction="row" spacing={4}>
            <Button style={{width: '100px', height: '50px'}}  size="large" color="inherit">
              Quiz
            </Button>
            <Button style={{width: '100px', height: '50px'}}  size="large" color="inherit">
              Login
            </Button>
            <Button style={{width: '100px', height: '50px'}}  size="large" color="inherit">
              About
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </>
  )
}

export default App
