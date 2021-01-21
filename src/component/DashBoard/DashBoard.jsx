import React, { useState, useEffect } from 'react';
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


    return (
        <div className="container">
            <Appbar cart={cart} />
            <Display cart={cart} />
            <Footer />
        </div>
    )
}