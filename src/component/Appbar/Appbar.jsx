import React, {useState} from 'react'
import './Appbar.css'
import education from '../../assets/education.svg'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button, IconButton, InputBase} from '@material-ui/core';

export default function Appbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="container">
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
                        <SearchIcon style={{ width: 15, height: 15 }} />
                    </IconButton>
                    <InputBase placeholder="Search" fullWidth />
                </div>
                <div className="person">
                    <div className="profile" onClick={handleOpen}>
                        <PersonOutlineIcon />
                        Profile
                    </div>
                    <div className={open? "popup" : "hide"}>
                        <div className="sign">
                            <Button>
                                Login/SignUp
                            </Button>
                        </div>
                        <div className="wishlist">
                            <FavoriteBorderIcon style={{ width: 15, height: 15 }}/>
                            Wishlist
                        </div>
                    </div>
                    <div className="cart">
                        <AddShoppingCartIcon />
                        Cart
                    </div>
                </div>
            </div>
        </div>
    )
}