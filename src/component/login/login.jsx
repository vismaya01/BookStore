import React from 'react'
import './login.css'
import { Button, TextField, Checkbox, Snackbar } from '@material-ui/core';

export default class Registration extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className='content-head'>
                    <div>
                        <h1> Book Store </h1>
                    </div>
                    <div>
                        <h3>Sign In</h3>
                    </div>
                </div>
                <form className='form'  >
                    <div className='mail' >
                        <TextField name='email'
                            noValidate
                            size='small'
                            label="Mail Id"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className="row-content">
                        <TextField 
                            type='password'
                            name='password'
                            noValidate
                            size='small'
                            fullWidth
                            label="Password"
                            margin="normal"
                            variant="outlined"
                        />
                       
                    </div>
                    <div className="show">
                        <Checkbox color="primary"  />
                        <span>show password</span>
                    </div>
                    <div className='button-Content'>
                        <Button color="primary">create account</Button>
                        <div>
                            <Button variant="contained" color="primary">Sign In</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}