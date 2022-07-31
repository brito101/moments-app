import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ProtectedRoute from "./Components/Helper/ProtectedRoute"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import NotFound from "./Components/NotFound"
import Photo from "./Components/Photo/Photo"
import User from "./Components/User/User"
import UserProfile from "./Components/User/UserProfile"
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/user';
import React from "react"

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter>
          <Header />
          <main className='app-body'>
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
              <Route path='foto/:id' element={<Photo />}></Route>
              <Route path='perfil/:user' element={<UserProfile />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
