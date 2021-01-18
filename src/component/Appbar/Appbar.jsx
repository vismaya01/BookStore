import React, { useState } from 'react'
import './Appbar.css'
import education from '../../assets/education.svg'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button, IconButton, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function Appbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="header">
            <div className="heading">
                <div className="logo">
                    <img src={education} alt='img' />
                </div>
                <div className="title">
                    BookStore
                    </div>
            </div>
            <div className="search">
                <IconButton>
                    <SearchIcon fontSize="small" />
                </IconButton>
                <InputBase placeholder="Search" fullWidth />
            </div>
            <div className="person">
                <div className="profile" onClick={handleOpen}>
                    <PersonOutlineIcon fontSize="small" />
                    Profile
                </div>
                <div className={open ? "popup" : "hide"}>
                    <div className="sign">
                        <Button component={Link} to="/login">
                            Login/SignUp
                        </Button>
                    </div>
                    <div className="wishlist">
                        <FavoriteBorderIcon fontSize="small" />
                        Wishlist
                    </div>
                </div>
                <div className="cart">
                    <AddShoppingCartIcon fontSize="small" />
                    Cart
                </div>
            </div>
        </div>
    )
}