import { Button, FormControl, Select, Popover, Typography } from '@material-ui/core'
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
    MuiButtonContainedPrimary1: {
        backgroundColor: ' #A03037',
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
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));
export default function Display(props) {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const getAllBooks = () => {
        services.getAllBook().then((res) => {
            setBooks(res.data.result)
            console.log(res.data.result)
            books.map(item => item.isAdded = false)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    const addCartBook = (value) => {
        services.addCart(value._id, localStorage.getItem("userToken")).then((res) => {
            console.log(res)
            getAllBooks()
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleButton = (index) => {
        props.cart.map(item => {
            if (item.product_id._id === index._id) {
                index.isAdded = true
            }
        })
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
                        {handleButton(item)}
                        <div className="image" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                            <img src={Image} alt="img" />
                                {/* <Popover
                                    id="mouse-over-popover"
                                    className={classes.popover}
                                    classes={{
                                        paper: classes.paper,
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus> */}
                                    <div className={anchorEl? "description" : "description1"}  onClose={handlePopoverClose}>
                                        <div className="book-details">
                                            Book Details
                                        </div>
                                        {item.description}
                                    </div>
                                {/* </Popover> */}
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
                                {item.isAdded ?
                                    <Button variant="contained" color="primary" className={classes.MuiButtonContainedPrimary}>
                                        ADDED TO BAG
                                        </Button>
                                    :
                                    <>
                                        <Button onClick={() => { addCartBook(item) }}
                                            variant="contained" color="primary" className={classes.MuiButtonContainedPrimary1}>
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