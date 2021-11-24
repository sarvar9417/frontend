import React from 'react'
import { ReseptionRoutes } from './ReseptionRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'

export const Reseption = () => {
    const { login, token, logout, reseptionId } = useAuth()
    console.log(token);
    const isAuthenticated = true
    // const isAuthenticated = !!token
    const reseptionRouter = ReseptionRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{ login, logout, token, reseptionId, isAuthenticated }} >
            <Router>
                {isAuthenticated && <Navbar />}
                {reseptionRouter}
            </Router>
        </AuthContext.Provider>
    )
}



