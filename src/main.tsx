import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-full'>
      <div className="max-w-screen-sm relative min-w-screen min-h-screen mx-auto h-full bg-white">
        <App />
      </div>
  </div>
)
