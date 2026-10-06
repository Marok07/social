import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //https://jsonplaceholder.typicode.com/posts
  <StrictMode>
    <App/>
  </StrictMode>
)
