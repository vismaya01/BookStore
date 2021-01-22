import React, { useState } from 'react'
import './Appbar.css'
import education from '../../assets/education.svg'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button, IconButton, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        padding: '0 4px',
        backgroundColor: '#ffffff',
        color: 'black',
    },
}))(Badge);

export default function Appbar(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleLogout = () => {
        localStorage.clear();
    }

    return (
        <div className="header">
            <div className="heading">
                <div className="logo">
                    <IconButton style={{ padding: 0 }} component={Link} to="/dashBoard/1">
                        <img src={education} alt='img' />
                    </IconButton>
                </div>
                <div className="title">
                    BookStore
                </div>
                <div className="search">
                    <IconButton>
                        <SearchIcon fontSize="small" />
                    </IconButton>
                    <InputBase placeholder="Search" fullWidth />
                </div>
            </div>
            <div className="person">
                <div className="profile" onClick={handleOpen}>
                    <PersonOutlineIcon fontSize="small" />
                    Profile
                </div>
                <div className={open ? "popup" : "hide"}>
                    <div className="sign">
                        {localStorage.getItem("userToken") === "" ?
                            <Button component={Link} to="/login">
                                Login/SignUp
                            </Button>
                            :
                            <Button onClick={handleLogout} >
                                LogOut
                            </Button>
                        }
                    </div>
                    <div className="wishlist">
                        <FavoriteBorderIcon fontSize="small" />
                        Wishlist
                    </div>
                </div>
                <div className="cart">
                    Cart
                    <IconButton aria-label="cart" style={{ color: '#ffffff' }} component={Link} to="/cart">
                        <StyledBadge badgeContent={props.cart.length}>
                            <AddShoppingCartIcon fontSize="small" />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}