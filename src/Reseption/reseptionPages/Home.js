import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { CreateClient } from './CreateClient';

export const Home = () => {
    const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
    ];
    const [sec, setSec] = useState(new Date().getSeconds())
    const [min, setMin] = useState(new Date().getMinutes())
    const [hour, setHour] = useState(new Date().getHours())
    const [day, setDay] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    setInterval(() => {
        setSec(new Date().getSeconds())
        setMin(new Date().getMinutes())
        setHour(new Date().getHours())
        setDay(new Date().getDate())
        setMonth(new Date().getMonth())
        setYear(new Date().getFullYear())
    }, 1000);

    return (
        <div className="container">
            <CreateClient />
        </div>

    )
}
