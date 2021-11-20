import React from 'react'
import { CashierRoutes } from './CashierRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'

export const Cashier = () => {
    const { login, token, logout, reseptionId } = useAuth()
    const isAuthenticated = !!token
    const reseptionRouter = CashierRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{ login, logout, token, reseptionId, isAuthenticated }} >
            <Router>
                {isAuthenticated && <Navbar />}
                {reseptionRouter}
            </Router>
        </AuthContext.Provider>
    )
}



