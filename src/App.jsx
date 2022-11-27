import './App.css'
import { Routes, Route } from "react-router-dom"
import SharedLayout from './components/SharedLayout';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
function App() {

  return (
    <div className="App bg-main w-full h-[600px] text-white">
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="profile/" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
