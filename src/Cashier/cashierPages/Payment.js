import React, { useCallback, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

export const Payment = () => {
    const { loading, request, error, clearError } = useHttp()
    const [clientId, setClientId] = useState(useParams().id)
    const [client, setClient] = useState('')
    const [sections, setSections] = useState([])
    const searchId = () => {

    }

    const getClient = useCallback(async () => {
        try {
            const data = await request(`/api/clients/${clientId}`, 'GET', null)
            getSections()
            setClient(data)
        } catch (e) {
        }
    }, [request, clientId])

    const getSections = useCallback(async () => {
        try {
            const data = await request(`/api/section/${clientId}`, 'GET', null)
            setSections(data)
        } catch (e) {
        }
    }, [request, clientId])

    console.log(sections);
    useEffect(() => {
        if (client === '') {
            getClient()
        }
    }, [getClient, client])

    return (
        <div className="container">
            <div className="row">
                <div className=" offset-md-2 col-md-4 col-sm-6 mt-3">
                    <input defaultValue={clientId} onChange={(event) => { setClientId(parseInt(event.target.value)) }} className="form-control" type="number" placeholder="ID qidiruvi" />
                    <button onClick={searchId} className="btn btn-success mt-1">Qidirish</button>
                </div>
            </div>

        </div>
    )
}
