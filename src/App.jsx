import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/Signup/SignUp'
import Login from './components/Login/Login'
import React from 'react'
import Main from './components/Main/Main'
import SendOtp from './components/ForgotPassword/SendOtp'
import VerifyOtp from './components/ForgotPassword/VerifyOtp'
import ResetPassword from './components/ForgotPassword/ResetPassword'
function App() {

  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<Main />} />
          <Route path='/loginhelp' element={<SendOtp />} />
          <Route path='/loginhelp/otp/:token' element={<VerifyOtp />} />
          <Route path='/loginhelp/ResetPassword' element={<ResetPassword />} />
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App
