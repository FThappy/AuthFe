
import './App.css'
import FloatingShape from './components/FloatingShape'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import VerifyEmail from './pages/VerifyEmail'

function App() {

  return (
    <div className='max-w-[1920px] min-h-screen bg-gradient-to-br
     from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden mx-auto'>
      <FloatingShape color="bg-green-500" size="w-64 h-64" top='-5%' left='10%' delay={0} />
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top='70%' left='80%' delay={5} />
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top='40%' left='-10%' delay={2} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route  path="/verify-email" element={<VerifyEmail />} />
         {/* <Route path="/" element={<HomePage />} /> */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App
