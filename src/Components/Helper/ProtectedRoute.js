import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const { data } = useSelector((state) => state.user);
  return data ? children : <Navigate to='/login' />
}
