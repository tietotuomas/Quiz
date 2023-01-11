import { Route, Routes } from 'react-router-dom'
import Results from './components/Results'
import Questions from './components/Questions'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/questions" element={<Questions />}></Route>
      <Route path="/results" element={<Results />}></Route>
    </Routes>
  )
}

export default App
