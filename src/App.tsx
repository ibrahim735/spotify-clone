import LoginPage from "./features/auth/LoginPage"
import ForgotPassword from "./features/auth/ForgotPassword"
import SignUp from "./features/auth/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./features/home/Home"



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App