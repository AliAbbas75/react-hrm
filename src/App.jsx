import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './pages/page'
import {Routes,Route } from 'react-router-dom'
import Holidays from './pages/hoildays'
import AssetsPage from './pages/assets'
import AttendanceDetails from './pages/attendanceDetails'
import Leaves from './pages/leaves'
import LoginPage from './pages/LoginPage'
import TestTable from './pages/table'
const EmployeesPage = React.lazy(() => import("@/pages/employeePage"));
// import { Button, buttonVariants } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/attendance" element={<AttendanceDetails />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path='/login' element= {<LoginPage/>} />
        <Route path='/employees' element= {<EmployeesPage/>} />
        <Route path= '/test' element= {<TestTable/>}/>
      </Routes>
    
    </>
  )
}

export default App
