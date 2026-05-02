import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostProvider } from './Components/PostContext.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostProvider>
        <App />
      </PostProvider>
    </BrowserRouter>
  </React.StrictMode>
)