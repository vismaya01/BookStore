import React, { useState } from 'react'
import './DisplayCart.css'
import Image from '../../assets/Image.png'
import { Button } from '@material-ui/core'
import Customer from '../Customer/Customer'
import Order from '../Order/Order'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Service from '../../services/userServices'

const services = new Service()

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        height: 35,
    },
}));

export default function DisplayCart(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)

    const quantityUpdate = (value, quantity) => {
        let data = {
            "quantityToBuy": quantity,
        }
        services.quantity(data, value._id, localStorage.getItem("userToken")).then(res => {
            props.getCartBooks()
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteCart = (value) => {
        services.deleteCart(value._id, localStorage.getItem("userToken")).then(res => {
            console.log(res)
            props.getCartBooks()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="display-cart">
            {props.cart.length === 0 ?
                <div className="cart2">
                    Cart is Empty
                    <Button className="cart3" variant="contained" color="primary" component={Link} to="/dashBoard/1">
                        Shop now
                    </Button>
                </div>
                :
                <>
                    <div className="cart1">
                        <div className="myCart">
                            My cart ({props.cart.length})
                        </div>
                        {props.cart.map((item, index) =>
                            <div className="bookdetails" key={index}>
                                <div className="image1">
                                    <img src={Image} alt="img" />
                                </div>
                                <div className="details1">
                                    <div className="Booktitle">
                                        {item.product_id.bookName}
                                    </div>
                                    <div className="auther">
                                        {item.product_id.author}
                                    </div>
                                    <div className="cash">
                                        RS. {item.product_id.price}
                                    </div>
                                    <div className="quantity">
                                        <div className="control" onClick={() => { quantityUpdate(item, item.quantityToBuy - 1) }}>
                                            -
                                </div>
                                        <div className="value1">
                                            {item.quantityToBuy}
                                        </div>
                                        <div className="control" onClick={() => { quantityUpdate(item, item.quantityToBuy + 1) }}>
                                            +
                                </div>
                                        <div className="remove" onClick={() => deleteCart(item)}>
                                            Remove
                                 </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={open ? "placeorder1" : "placeorder"}>
                            <Button className={classes.MuiButtonRoot} onClick={() => setOpen(true)} variant="contained" color="primary">
                                PLACE ORDER
                    </Button>
                        </div>
                    </div>
                    <div className={open ? "customer1" : "customer"}>
                        Customer Details
                {open ? <Customer open={openOrder} setOpen={setOpenOrder} /> : null}
                    </div>
                    <div className={openOrder ? "order1" : "order"}>
                        Order Summery
                {openOrder ? <Order cart={props.cart} /> : null}
                    </div>
                </>
            }
        </div>
    )
}