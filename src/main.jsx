import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './com/Dashboard.jsx'
import Show from './com/Show.jsx'
import MainDashboard from './com/MainDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<App/>}>
      <Route index element={<p>Welcome place Dashboard click</p>}/>
    </Route>
    
    <Route path='dashboard' element={<MainDashboard/>}>
     <Route index element={<Dashboard/>}/>
     <Route path='show/:id' element={<Show/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)
