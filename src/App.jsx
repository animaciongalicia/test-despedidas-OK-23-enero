import { Analytics } from '@vercel/analytics/react'
import Wizard from './components/Wizard'
import './App.css'

function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <Wizard />
      <Analytics />
    </div>
  )
}

export default App
