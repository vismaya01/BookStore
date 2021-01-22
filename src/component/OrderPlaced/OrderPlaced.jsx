import React from 'react'
import './OrderPlaced.css'
import FireWork from '../../assets/fireworks.svg'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function OrderPlaced() {
    return (
        <div className="order-paced">
            <div className="img">
                <img src={FireWork} alt='img' />
                <div className="success">
                    Order placed successfully
                </div>
            </div>
            <div className="msg">
                hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
            </div>
            <table>
                <tr className="table-head">
                    <th>Email us</th>
                    <th>Contact us</th>
                    <th>Address</th>
                </tr>
                <tr className="table-body">
                    <td>admin@bookstore.com</td>
                    <td>+91 8163475881</td>
                    <td className="admin-address">
                        42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
                    </td>
                </tr>
            </table>
            <div className="final-button">
                <Button variant="contained" color="primary" component={Link} to="/dashBoard/1">
                    Continue shopping
                </Button>
            </div>
        </div>
    )
}