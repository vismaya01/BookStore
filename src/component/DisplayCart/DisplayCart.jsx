import React, { useState } from 'react'
import './DisplayCart.css'
import Image from '../../assets/Image.png'
import {Button} from '@material-ui/core'
import Customer from '../Customer/Customer'
import Order from '../Order/Order'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        height: 35,
    },
}));

export default function DisplayCart() {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1)
    const [open, setOpen] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)

    return (
        <div className="display-cart">
            <div className="cart1">
                <div className="myCart">
                    My cart
                </div>
                <div className="bookdetails">
                    <div className="image1">
                        <img src={Image} alt="img" />
                    </div>
                    <div className="details1">
                            <div className="Booktitle">
                                Don't Make Me Think
                            </div>
                            <div className="auther">
                                by Steve Krug
                            </div>
                            <div className="cash">
                                RS. 1500
                            </div>
                    </div>
                </div>
                <div className="quantity">
                    <div className="control" onClick={() => setQuantity(quantity-1)}>
                        -
                    </div>
                    <div className="value1">
                        {quantity}
                    </div>
                    <div className="control" onClick={() => setQuantity(quantity+1)}>
                        +
                    </div>
                    <div className="remove">
                        Remove
                    </div>
                </div>
                <div className={open? "placeorder1" : "placeorder"}>
                    <Button className={classes.MuiButtonRoot} onClick={() => setOpen(true)} variant="contained" color="primary">
                        PLACE ORDER
                    </Button>
                </div>
            </div>
            <div className={open? "customer1" : "customer" }>
                Customer Details
                {open? <Customer open={openOrder} setOpen={setOpenOrder} /> : null }              
            </div>
            <div className={openOrder? "order1" : "order" }>
                Order Details
                {openOrder? <Order /> : null }
            </div>
        </div>
    )
}