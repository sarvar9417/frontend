import React from 'react'
import { DoctorRoutes } from './DoctorRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'

export const Doctor = () => {
    const { login, token, logout, doctorId } = useAuth()
    // const isAuthenticated = true
    const isAuthenticated = !!token
    const doctorRouter = DoctorRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{ login, logout, token, doctorId, isAuthenticated }} >
            <Router>
                {isAuthenticated && <Navbar />}
                {doctorRouter}
            </Router>
        </AuthContext.Provider>
    )
}



