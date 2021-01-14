import React from 'react'
import './registration.css'
import { Button, TextField, Checkbox, Snackbar } from '@material-ui/core';

const validNameRegex = RegExp(/^[A-Z]{1}[a-zA-z\s]{2,}$/i);
const validEmailRegex = RegExp(
    /[a-zA-Z]{1,}([.\-+]?[a-zA-Z0-9]+)?@[a-z0-9]{1,}\.([a-z]{2,4})(\.[a-z]{2,4})?$/i
);
const validPasswordRegex = RegExp(
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?!(?:.*[!@#$%^&*]){2})[a-zA-Z0-9!@#$%^&*]{8,}$/i
);

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: '',
            hidden: true,
            firstNameFlag: false,
            lastNameFlag: false,
            emailFlag: false,
            passwordFlag: false,
            confirmFlag: false,
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirm: '',
            snackBarOpen: false,
            snackBarMsg: '',
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    snackBarClose = () => {
        this.setState({
            snackBarOpen: false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if (this.validate()) {
            this.emptyField();
        }
    }

    emptyField = () => {
        this.setState({
            firstNameFlag: false,
            lastNameFlag: false,
            emailFlag: false,
            passwordFlag: false,
            confirmFlag: false,
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirm: '',
        })
    }

    validate = () => {
        let isValid = false
        if (this.state.firstName === '') {
            this.setState({
                errorFirstName: 'First Name is requied',
                firstNameFlag: true
            })
            isValid = true;
        }
        else {
            if (!validNameRegex.test(this.state.firstName)) {
                this.setState({
                    errorFirstName: 'First Name is invalid',
                    firstNameFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.lastName === '') {
            this.setState({
                errorLastName: 'Last Name is requied',
                lastNameFlag: true
            })
            isValid = true;
        }
        else {
            if (!validNameRegex.test(this.state.lastName)) {
                this.setState({
                    errorLastName: 'Last Name is invalid',
                    lastNameFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.email === '') {
            this.setState({
                errorEmail: 'email is requied',
                emailFlag: true
            })
            isValid = true;
        }
        else {
            if (!validEmailRegex.test(this.state.email)) {
                this.setState({
                    errorEmail: 'email is invalid',
                    emailFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.password === '') {
            this.setState({
                errorPassword: 'password is requied',
                passwordFlag: true
            })
            isValid = true;
        }
        else {
            if (!validPasswordRegex.test(this.state.password)) {
                this.setState({
                    errorPassword: 'password is invalid',
                    passwordFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.confirm === '') {
            this.setState({
                errorConfirm: 'confirm is requied',
                confirmFlag: true
            })
            isValid = true;
        }
        else {
            if (this.state.password !== this.state.confirm) {
                this.setState({
                    errorConfirm: "password didn't match",
                    confirmFlag: true
                })
                isValid = true;
            }
        }
        return isValid;
    }

    emptyTextField = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: '',
            hidden: true,
            firstNameFlag: false,
            lastNameFlag: false,
            emailFlag: false,
            passwordFlag: false,
            confirmFlag: false,
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirm: '',
        })
    }

    handleSubmit = () => {
        if (this.validate()) {
            this.setState({
                snackBarOpen: true, snackBarMsg: 'Registration is failed'
            })
        }
        else {
            let userData = {
                'firstName': this.state.firstName,
                'lastName': this.state.lastName,
                'service': 'advance',
                'email': this.state.email,
                'password': this.state.password,
            }
            this.emptyTextField();
            this.setState({
                snackBarOpen: true, snackBarMsg: 'Registration is successfull',
            });
            console.log(userData)
        }
    }


    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div className="Content">
                <div className='content-head'>
                    <div>
                        <h1> Book Store </h1>
                    </div>
                    <div>Create your Book store Account</div>
                </div>
                <form className='form'  >
                    <div className="row-content">
                        <TextField className='mr'
                            size='small'
                            fullWidth
                            name='firstName'
                            label="First name"
                            margin="normal"
                            variant="outlined"
                            error={this.state.firstNameFlag}
                            helperText={this.state.errorFirstName}
                            value={this.state.firstName}
                            onChange={this.handleChange} noValidate
                        />
                        <TextField name='lastName'
                            fullWidth
                            label="Last name"
                            noValidate
                            size='small'
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.lastNameFlag}
                            helperText={this.state.errorLastName}
                            value={this.state.lastName}
                        />
                    </div>
                    <div className='mail' >
                        <TextField name='email'
                            noValidate
                            size='small'
                            label="Mail Id"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.emailFlag}
                            helperText={this.state.errorEmail}
                            value={this.state.email}
                        />
                    </div>
                    <div className="row-content">
                        <TextField className='mr'
                            type={this.state.hidden ? 'password' : 'text'}
                            name='password'
                            noValidate
                            size='small'
                            fullWidth
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.passwordFlag}
                            helperText={this.state.errorPassword}
                            value={this.state.password}
                        />
                        <TextField
                            type={this.state.hidden ? 'password' : 'text'}
                            name='confirm'
                            noValidate
                            fullWidth
                            size='small'
                            label="Confirm"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.confirmFlag}
                            helperText={this.state.errorConfirm}
                            value={this.state.confirm}
                        />
                    </div>
                    <div className="show">
                        <Checkbox color="primary" onClick={this.toggleShow} />
                        <span>show password</span>
                    </div>
                    <div className='button-Content'>
                        <Button color="primary">sign in instead</Button>
                        <div>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Sign Up</Button>
                            <Snackbar open={this.state.snackBarOpen} autoHideDuration={3000} close={!this.state.snackBarOpen} message={this.state.snackBarMsg} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}