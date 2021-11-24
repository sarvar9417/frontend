
import { useCallback, useEffect, useState } from 'react'

const storageName = 'doctorData'
export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [doctorId, setDoctorId] = useState(null)
    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setDoctorId(id)

        localStorage.setItem(storageName, JSON.stringify({ 
            doctorId: id, 
            token: jwtToken }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setDoctorId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.doctorId)
        }
    }, [login])

    return { login, logout, token, doctorId }
}
