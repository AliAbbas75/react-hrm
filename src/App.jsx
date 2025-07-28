import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './pages/page'
import {Routes,Route } from 'react-router-dom'
const Designation = React.lazy(()=>import("@/pages/designation"))
const Holidays = React.lazy(()=>import("@/pages/hoildays"))
const AssetsPage = React.lazy(()=>import("@/pages/assets"))
const AttendanceDetails = React.lazy(()=>import("@/pages/attendanceDetails"))
const Leaves = React.lazy(()=>import("@/pages/leaves"))
const LoginPage = React.lazy(()=>import("@/pages/LoginPage"))
const Department = React.lazy(()=>import("@/pages/departments"))
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
        <Route path="/department" element={<Department/>}/>
        <Route path='/employees' element= {<EmployeesPage/>} />
        <Route path='/designation' element= {<Designation/>} />
        <Route path= '/test' element= {<></>}/>
      </Routes>
    
    </>
  )
}

export default App
