import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import { UserStorage } from "./UserContex"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login/*' element={<Login />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
