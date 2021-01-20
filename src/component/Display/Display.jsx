import { Button, FormControl, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Display.css'
import Image from "../../assets/Image.png"
import Service from '../../services/userServices'

const services = new Service()

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        width: 95,
        height: 40,
        padding: 4,
        fontSize: 12,
    },
    MuiButtonContainedPrimary: {
        backgroundColor: '#3f51b5',
        width: 215,
    },
    MuiOutlinedInputRoot: {
        width: 170,
        height: 40,
    },
}));
export default function Display(props) {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [key, setKey] = useState(false)

    const getAllBooks = () => {
        services.getAllBook().then((res) => {
            setBooks(res.data.result)
            console.log(res.data.result)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    const addCartBook = (value) => {
        setKey(true)
        services.addCart(value._id, localStorage.getItem("userToken")).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleCart = (e) => {
        setKey(false)
        let key = e.target.value;
        setCart(cart.filter((e) => (e !== key)))
    };

    const handleButton = (index) => {
        let button = false
        props.cart.map(item => {
            if(item.product_id._id === index._id ) {
                button = true
            }
            else{
                button = false
            }
        })
        return button
    }

    return (
        <div className="books">
            <div className="head">
                <div className="books1">
                    <span className="title2"> Books </span>
                    <span>({books.length} items) </span>
                </div>
                <FormControl variant="outlined">
                    <Select className={classes.MuiOutlinedInputRoot} native >
                        <option value={10}>Sort by referance</option>
                        <option value={20}>Price: Low to High</option>
                        <option value={30}>Price: High to Low</option>
                        <option value={40}>Newest Arrival</option>
                    </Select>
                </FormControl>
            </div>
            <div className="display-book">
                {books.map((item, index) => (
                    <div className="display" key={index}>
                        <div className="image">
                            <img src={Image} alt="img" />
                        </div>
                        <div className="details">
                            <div className="title1">
                                {item.bookName}
                            </div>
                            <div className="auther">
                                {item.author}
                            </div>
                            <div className="cash">
                                RS. {item.price}
                            </div>
                            <div className="button">
                                {console.log(handleButton(item))?
                                        <Button onClick={(e) => handleCart(e)} variant="contained" color="primary" className={classes.MuiButtonContainedPrimary}>
                                            ADDED TO BAG
                                        </Button>
                                        :
                                        <>
                                            <Button onClick={() => { setCart([...cart, index]); addCartBook(item) }} variant="contained" color="primary" className={classes.MuiButtonRoot}>
                                                ADD TO BAG
                                            </Button>
                                            <Button variant="outlined" className={classes.MuiButtonRoot}>
                                                WISHlIST
                                            </Button>
                                        </>                               
                                    }                              
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}