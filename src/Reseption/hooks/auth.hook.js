
import { useCallback, useEffect, useState } from 'react'

const storageName = 'reseptionData'
export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [reseptionId, setReseptionId] = useState(null)
    const [type, setType] = useState(null)

    const login = useCallback((jwtToken, id, type) => {
        setToken(jwtToken)
        setReseptionId(id)
        setType(type)

        localStorage.setItem(storageName, JSON.stringify({
            reseptionId: id,
            token: jwtToken,
            type: type,
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setReseptionId(null)
        setType(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.reseptionId, data.type)
        }
    }, [login])

    console.log(type);
    return { login, logout, token, reseptionId, type }
}
