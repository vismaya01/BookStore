import React from 'react'
import './Order.css'
import Image from '../../assets/Image.png'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Service from '../../services/userServices'

const services = new Service()

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        height: 35,
    },
}));

const Order = (props) => {
    const classes = useStyles();

    const placeOerder = () => {
        let orders = []
        props.cart.map((item)=> {           
            let product = {
                "product_id": item.product_id._id,
                "product_name": item.product_id.bookName,
                "product_quantity": item.quantityToBuy,
                "product_price": item.product_id.price
            }
            orders = [...orders , product]            
        })      
        let data = {
            "orders" : orders
        }
        services.placeOrder(data, localStorage.getItem("userToken")).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (<>
    {props.cart.map(item => (
        <div className="bookdetails1" >
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
            </div>
        </div >
        ))}
         <div className="checkout">
         <Button className={classes.MuiButtonRoot} onClick={placeOerder}  variant="contained" color="primary">
             CHECKOUT
         </Button>
     </div>
     </>
    )
}

export default Order