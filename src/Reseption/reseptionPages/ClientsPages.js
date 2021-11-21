import React, { useCallback, useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { useHttp } from '../hooks/http.hook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faSearch, faSort } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import DatePicker from "react-datepicker"
import './tableStyle.css'

import "react-datepicker/dist/react-datepicker.css"
const mongoose = require('mongoose')

toast.configure()
export const ClientsPages = () => {
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

    useEffect(() => {
        getClients()
        getAllSections()
    }, [getClients, getAllSections])


    const searchDate = () => {
        let c = []
        AllSections.map((section) => {
            if (setSortDate(section)) {
                c.push(section)
            }
        })
        setSections(c)
    }

    const searchId = () => {
        let c = []
        AllSections.map((section) => {
            AllClients.map((client) => {
                if (client.id === clientId && section.client === client._id) {
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
                if (date1 === date2 && section.client === client._id) {
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
        <div className="container m-5"  >

                <div className="row mb-3">
                    <div className="col-md-2 col-sm-4">
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => { setStartDate(date) }} />
                    </div>
                    <div className="col-md-2 col-sm-4 ">
                        <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    <div className="col-md-1 col-sm-4 ">
                        <button onClick={searchDate} className="btn text-white" style={{ backgroundColor: "#45D3D3" }}> <FontAwesomeIcon icon={faSearch} /> </button>
                    </div>
                    <div className=" col-md-2 col-sm-6 ">
                        <input defaultValue={clientId} onChange={(event) => { setClientId(parseInt(event.target.value)) }} className="form-control" type="number" placeholder="ID qidiruvi" />
                    </div>
                    <div className=" col-md-1 col-sm-6 ">
                        <button onClick={searchId} className="btn text-white" style={{ backgroundColor: "#45D3D3" }}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <div className=" col-md-2 col-sm-6 ">
                        <input className="form-control" type="date" onChange={(event) => { setBorn(new Date(event.target.value)) }} />
                    </div>
                    <div className=" col-md-2 col-sm-6 ">
                        <button onClick={searchBornDate} className="btn text-white" style={{ backgroundColor: "#45D3D3" }}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>

                <div className="" >
                    <table className="table-striped table-hover" style={{ borderBottom: "1px solid #aaa", marginBottom: "10px" }} >
                        <thead>
                            <tr>
                                <th className="no" scope="" >№ <FontAwesomeIcon icon={faSort} /> </th>
                                <th scope="" className="date text-center" >Kelgan vaqti <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="fish text-center">F.I.Sh <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="id text-center">ID <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="turn text-center">Navbati <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="phone text-center">Tel <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="section text-center">Bo'limi <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="edit text-center">Tahrirlash <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="" className="prices text-center">To'lov <FontAwesomeIcon icon={faSort} /></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="overflow-auto" style={{ height: "70vh" }}>
                <table className="table table-striped table-hover"  >
                    <tbody className="" >
                        {sections.map((section, key) => {
                            return AllClients.map(client => {
                                if (client._id === section.client) {
                                    k++
                                    return (
                                        <tr key={key} >
                                            <td className="no" >{k}</td>
                                            <td className="date" >{new mongoose.Types.ObjectId(client._id).getTimestamp().toLocaleDateString()} {new mongoose.Types.ObjectId(client._id).getTimestamp().toLocaleTimeString()}</td>
                                            <td className="fish" ><Link to={`/reseption/clientallhistory/${client._id}`} > {client.lastname} {client.firstname} {client.fathername} </Link></td>
                                            <td className="id" >{client.id}</td>
                                            <td className="turn">{section.turn}</td>
                                            <td className="phone">+{client.phone}</td>
                                            <td className="section"> <Link to={`/reseption/clienthistory/${section._id}`} > {section.name} </Link></td>
                                            <td className="edit"> <Link to={`/reseption/edit/${client._id}`} > <FontAwesomeIcon icon={faPenAlt} /> </Link>  </td>
                                            <td className={section.payment === "kutilmoqda prices" ? "text-warning prices" : (section.payment === "to'langan" ? "text-success" : "text-danger")} >{section.payment}</td>
                                        </tr>
                                    )
                                }
                            })

                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
