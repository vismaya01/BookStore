import { Button, FormControl, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Display.css'
import Image from "../../assets/Image.png"
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from "@material-ui/lab/PaginationItem";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
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
        backgroundColor: '#A03037',
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
        width: 175,
        height: 40,
        padding: 5,
    },
}));
export default function Display(props) {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    let history = useHistory();

    const getAllBooks = (sort) => {
        services.getAllBook().then((res) => {
            setBooks(res.data.result)
            console.log(res.data.result)
            books.map(item => item.isAdded = false)
            console.log(sort)
            switch (sort) {
                case "20":
                    setBooks(books.sort((a, b) => (
                        a.price > b.price ? 1 : -1
                    )))
                    break;
                case "30":
                    setBooks(books.sort((a, b) => (
                        a.price < b.price ? 1 : -1
                    )))
                    break;
                case "40":
                    setBooks(books.sort((a, b) => (
                        a.updatedAt < b.updatedAt ? 1 : -1
                    )))
                    break;
                default:
                    break;
            }
            console.log(books)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    const addCartBook = (value) => {
        services.addCart(value._id, localStorage.getItem("userToken")).then((res) => {
            console.log(res)
            props.getCartBooks()
            history.push("/cart")
        }).catch((err) => {
            console.log(err)
            history.push("/login")
        })
    }

    const handleButton = (index) => {
        props.cart.map(item => {
            if (item.product_id._id === index._id) {
                index.isAdded = true
            }
        })
    }

    const handleSort = (e) => {
        let selectedValue = e.target.value;
        getAllBooks(selectedValue)
    }

    const USER_PATH = "/dashBoard";

    const { pageNumber = 1 } = useParams();

    return (
        <div className="books">
            <div className="head">
                <div className="books1">
                    <span className="title2"> Books </span>
                    <span>({books.length} items) </span>
                </div>
                <FormControl variant="outlined">
                    <Select className={classes.MuiOutlinedInputRoot} id="selectBox" native onChange={(e) => handleSort(e)}  >
                        <option value={10}>Sort by referance</option>
                        <option value={20}>Price: Low to High</option>
                        <option value={30}>Price: High to Low</option>
                        <option value={40}>Newest Arrival</option>
                    </Select>
                </FormControl>
            </div>
            <div className="display-book">{(2 > 0 ? books.slice(
                (Number(pageNumber) - 1) * 5,
                (Number(pageNumber) - 1) * 5 + 5) : books).map((item, index) => (
                    <div className="display" key={index} >
                        {handleButton(item)}
                        <div className="image">
                            <img src={Image} alt="img" />
                            <div className="description">
                                <div className="book-details">
                                    Book Details
                                        </div>
                                {item.description}
                            </div>
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
                )
                )}
            </div>
            <div className="pagination">
                <Pagination
                    count={Math.ceil(books.length / 5)}
                    size="small"
                    renderItem={(item) => (
                        <PaginationItem
                            type={"start-ellipsis"}
                            component={Link}
                            selected
                            to={`${USER_PATH}/${item.page}`}
                            {...item}
                        />
                    )}
                />
            </div>
        </div>
    )
}