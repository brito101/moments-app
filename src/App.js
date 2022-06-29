import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ProtectedRoute from "./Components/Helper/ProtectedRoute"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import User from "./Components/User/User"
import { UserStorage } from "./UserContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='login/*' element={<Login />}></Route>
            <Route
              path='conta/*'
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
