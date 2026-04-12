import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from gray-50 to-gray-100 
    flex items-center justify-center p-4">
      <div className='bg-white rounded-2x1 shadow-xl w-full max-w-lg p-8'>
        <div>
          <h1>Task Manager</h1>
        </div>
      </div>
    </div>
  );
}
export default App
