import React from 'react'
import './Order.css'
import Image from '../../assets/Image.png'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        height: 35,
    },
}));

const Order = (props) => {
    const classes = useStyles();

    return (<>
        <div className="bookdetails1" >
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
        </div >
         <div className="checkout">
         <Button className={classes.MuiButtonRoot} onClick={() => props.setOpen(true)} variant="contained" color="primary">
             CHECKOUT
         </Button>
     </div>
     </>
    )
}

export default Order