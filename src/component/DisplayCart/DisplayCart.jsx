import React from 'react'
import './DisplayCart.css'
import Image from '../../assets/Image.png'
import {Button} from '@material-ui/core'

export default function DisplayCart() {
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
                                
                            </div>
                            <div className="auther">
                            </div>
                            <div className="cash">
                                RS. 
                            </div>
                    </div>
                </div>
                <div className="quantity">
                    <div className="control">
                        -
                    </div>
                    <div className="value1">

                    </div>
                    <div className="control">
                        +
                    </div>
                    <div className="remove">
                        Remove
                    </div>
                </div>
                <dis className="placeorder">
                    <Button variant="contained" color="primary">PLACE ORDER</Button>
                </dis>
            </div>
            <div className="customer">
                
            </div>
        </div>
    )
}