import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Home.css'
import Image from "../../assets/Image.png"
import Service from '../../services/userServices'

const services = new Service()

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        fontSize : 12,
        width: 100,
        height: 40,
        padding: 5,
    },
    MuiButtonCcontainedPrimary: {
        backgroundColor: '#3f51b5',
        width: 215,
    },
}));
export default function Home() {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    const [cart , setCart] = useState(false)

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

    return (
        <div className="books">
            <div className="books1">
                <span className="title2"> Books </span>
                <span>({books.length} items) </span>
            </div>
            <div className="display-book">
                {books.map((item, index) => (
                    <div className="display" key={index}>
                        <div className="image">
                            <img src={Image} alt="img"/>
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
                            {cart ?
                                <Button onClick={() => setCart(false)} variant="contained" color="primary" className={classes.MuiButtonCcontainedPrimary} >ADDED TO BAG</Button> 
                            :
                                <>
                                <Button onClick={() => setCart(true)} variant="contained" color="primary" className={classes.MuiButtonRoot}>
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