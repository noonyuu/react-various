import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {

  return (
    <BrowserRouter >
    {/* <BrowserRouter basename={'/react-various/'}> */}
      <Router />
    </BrowserRouter>
  )
}

export default App
