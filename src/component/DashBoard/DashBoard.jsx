import React, { useState, useEffect, Profiler } from 'react';
import Appbar from '../Appbar/Appbar'
import Display from '../Display/Display'
import Service from '../../services/userServices'
import Footer from '../Footer/Footer'

const services = new Service()

export default function DashBoard() {
    const [cart, setCart] = useState([])

    const getCartBooks = () => {
        services.getCartBook(localStorage.getItem("userToken")).then((res) => {
            setCart(res.data.result)
            console.log(res.data.result)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCartBooks()
    }, [])

    const callback = (
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
    ) => {
        console.log(
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions
        )
    }

    return (
        <div className="container">
            <Profiler id="Main" onRender={callback}>
                <Appbar cart={cart} />
            </Profiler>
            <Profiler id="Main" onRender={callback}>
                <Display cart={cart} getCartBooks={getCartBooks} />
            </Profiler>
            <Profiler id="Main" onRender={callback}>
                <Footer />
            </Profiler>
        </div>
    )
}