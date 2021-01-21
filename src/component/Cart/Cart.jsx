import React, { useState, useEffect } from 'react';
import Appbar from '../Appbar/Appbar'
import Display from '../DisplayCart/DisplayCart'
import Service from '../../services/userServices'
import Footer from '../Footer/Footer'
import PlaceOrder from '../OrderPlaced/OrderPlaced'
import { Switch, Route } from 'react-router-dom'

const services = new Service()

export default function DashBoard() {
    const [cart, setCart] = useState([])

    const getCartBooks = () => {
        services.getCartBook(localStorage.getItem("userToken")).then((res) => {
            setCart(res.data.result)
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
            <Switch>
                <Route exact path="/cart" component={() => <Display cart={cart} getCartBooks={getCartBooks} />} />
                <Route exact path="/cart/placeOrder" component={PlaceOrder} />
            </Switch>
            <Footer />
        </div>
    )
}