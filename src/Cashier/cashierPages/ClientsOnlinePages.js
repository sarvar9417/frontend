import React, { useCallback, useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { useHttp } from '../hooks/http.hook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
const mongoose = require('mongoose')

toast.configure()
export const ClientsOnlinePages = () => {
    let k = 0
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [born, setBorn] = useState('')
    const { loading, request } = useHttp()
    const [clients, setClients] = useState([])
    const [sections, setSections] = useState([])
    const [AllSections, setAllSections] = useState([])
    const [AllClients, setAllClients] = useState([])
    const [clientId, setClientId] = useState('')

    const getClients = useCallback(async () => {
        try {
            const fetch = await request('/api/clients/', 'GET', null)
            setAllClients(fetch)
        } catch (e) {

        }
    }, [request])

    const getAllSections = useCallback(async () => {
        try {
            const fetch = await request('/api/section/', 'GET', null)
            setAllSections(fetch)
            setSections(fetch)
        } catch (e) {

        }
    }, [request])

    const positionUpdate = useCallback(async (id, positionSection) => {
        try {
            const fetch = await request(`/api/section/${id}`, 'PUT', { position: positionSection })
            getAllSections()
            getClients()
        } catch (e) {

        }
    }, [request])

    useEffect(() => {
        getClients()
        getAllSections()
    }, [getClients, getAllSections])


    const searchDate = () => {
        let c = []
        AllSections.map((section) => {
            if (setSortDate(section) && section.bron === "online") {
                c.push(section)
            }
        })
        setSections(c)
    }

    const searchId = () => {
        let c = []
        AllSections.map((section) => {
            AllClients.map((client) => {
                if (client.id === clientId && section.client === client._id && section.bron === "online") {
                    c.push(section)
                }
            })
        })
        setSections(c)
    }

    const searchBornDate = () => {
        let c = []
        AllSections.map((section) => {
            AllClients.map((client) => {
                let year = born.getFullYear().toString()
                let month = born.getMonth().toString() < 10 ? "0" + born.getMonth().toString() : born.getMonth().toString()
                let day = born.getDate().toString() < 10 ? "0" + born.getDate().toString() : born.getDate().toString()
                let date1 = parseInt(year + month + day)

                year = new Date(client.born).getFullYear().toString()
                month = new Date(client.born).getMonth().toString() < 10 ? "0" + new Date(client.born).getMonth().toString() : new Date(client.born).getMonth().toString()
                day = new Date(client.born).getDate().toString() < 10 ? "0" + new Date(client.born).getDate().toString() : new Date(client.born).getDate().toString()
                let date2 = parseInt(year + month + day)
                if (date1 === date2 && section.client === client._id && section.bron === "online") {
                    console.log(date1);
                    c.push(section)
                }
            })

        })
        setSections(c)
    }

    const setSortDate = (section) => {

        let year = startDate.getFullYear().toString()
        let month = startDate.getMonth().toString() < 10 ? "0" + startDate.getMonth().toString() : startDate.getMonth().toString()
        let day = startDate.getDate().toString() < 10 ? "0" + startDate.getDate().toString() : startDate.getDate().toString()
        let date1 = parseInt(year + month + day)

        year = endDate.getFullYear().toString()
        month = endDate.getMonth().toString() < 10 ? "0" + endDate.getMonth().toString() : endDate.getMonth().toString()
        day = endDate.getDate().toString() < 10 ? "0" + endDate.getDate().toString() : endDate.getDate().toString()
        let date3 = parseInt(year + month + day)

        year = new mongoose.Types.ObjectId(section._id).getTimestamp().getFullYear().toString()
        month = new mongoose.Types.ObjectId(section._id).getTimestamp().getMonth().toString() < 10 ? "0" + new mongoose.Types.ObjectId(section._id).getTimestamp().getMonth().toString() : new mongoose.Types.ObjectId(section._id).getTimestamp().getMonth().toString()
        day = new mongoose.Types.ObjectId(section._id).getTimestamp().getDate().toString() < 10 ? "0" + new mongoose.Types.ObjectId(section._id).getTimestamp().getDate().toString() : new mongoose.Types.ObjectId(section._id).getTimestamp().getDate().toString()
        let date2 = parseInt(year + month + day)
        return (date1 <= date2 && date2 <= date3)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="container m-5" >
            <div className="row">
                <div className="col-md-2 col-sm-6 mt-3">
                    <DatePicker className="form-control" selected={startDate} onChange={(date) => { setStartDate(date) }} />
                </div>
                <div className="col-md-2 col-sm-6 mt-3">
                    <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                    <button onClick={searchDate} className="btn btn-success mt-1">Qidirish</button>
                </div>
                <div className=" offset-md-2 col-md-2 col-sm-6 mt-3">
                    <input defaultValue={clientId} onChange={(event) => { setClientId(parseInt(event.target.value)) }} className="form-control" type="number" placeholder="ID qidiruvi" />
                    <button onClick={searchId} className="btn btn-success mt-1">Qidirish</button>
                </div>
                <div className="offset-md-2 col-md-2 col-sm-6 mt-3">
                    <input className="form-control" type="date" onChange={(event) => { setBorn(new Date(event.target.value)) }} />
                    <button onClick={searchBornDate} className="btn btn-success mt-1">Qidirish</button>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Kelgan vaqti</th>
                        <th scope="col">F.I.Sh</th>
                        <th scope="col">ID</th>
                        <th scope="col">Navbati</th>
                        <th scope="col">Tel</th>
                        <th scope="col">Bo'limi</th>
                        <th scope="col">Tahrirlash</th>
                        <th scope="col">To'lov</th>
                        <th scope="col">Holati</th>
                    </tr>
                </thead>
                <tbody>
                    {sections.map((section, key) => {
                        return AllClients.map(client => {
                            if (client._id === section.client && section.bron === "online") {
                                k++
                                return (
                                    <tr key={key} >
                                        <td>{k}</td>
                                        <td>{new mongoose.Types.ObjectId(client._id).getTimestamp().toLocaleDateString()} {new mongoose.Types.ObjectId(client._id).getTimestamp().toLocaleTimeString()}</td>
                                        <td><Link to={`/reseption/clientallhistory/${client._id}`} > {client.lastname} {client.firstname} {client.fathername} </Link></td>
                                        <td>{client.id}</td>
                                        <td>{new Date(section.bronDay).toLocaleDateString()}</td>
                                        <td>+{client.phone}</td>
                                        <td> <Link to={`/reseption/clienthistory/${section._id}`} > {section.name} </Link></td>

                                        <td> <Link to={`/reseption/edit/${client._id}`} > <FontAwesomeIcon icon={faPenAlt} /> </Link>  </td>
                                        <td className={section.payment === "kutilmoqda" ? "text-warning" : (section.payment === "to'langan" ? "text-success" : "text-danger")} >{section.payment}</td>
                                        <td >{
                                            section.position === "kutilmoqda" ?
                                                <><Link onClick={() => positionUpdate(section._id, "kelgan")} className="btn btn-success" to={`/reseption/reciept/${client._id}`} >Qabul qilish</Link>
                                                    <button onClick={() => positionUpdate(section._id, "kelmagan")} className="btn btn-danger" >Rad etish</button></> :
                                                section.position
                                        }</td>
                                    </tr>
                                )
                            }
                        })
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}
