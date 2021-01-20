import React from 'react'
import './login.css'
import { Button, TextField, Checkbox, Snackbar} from '@material-ui/core';
import Service from '../../services/userServices';
import { Link } from 'react-router-dom'
import education from '../../assets/education.svg'

const services = new Service()

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
            hidden: true,
            email: '',
            password: '',
            emailFlag: false,
            passwordFlag: false,
            errorEmail: '',
            errorPassword: '',
            snackBarOpen: false,
            snackBarMsg: '',
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if (this.validate()) {
            this.emptyField();
        }
    }

    validate() {
        let isValid = false;
        this.setState({
            emailFlag: false,
            passwordFlag: false,
            errorEmail: '',
            errorPassword: '',
        })

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
        return isValid;
    }

    emptyField = () => {
        this.setState({
            emailFlag: false,
            passwordFlag: false,
            errorEmail: '',
            errorPassword: '',
        })
    }

    emptyTextField = () => {
        this.setState({
            hidden: true,
            email: '',
            password: '',
            emailFlag: false,
            passwordFlag: false,
            errorEmail: '',
            errorPassword: '',
            snackBarOpen: false,
            snackBarMsg: '',
        })
    }

    handleSubmit = () => {
        if (this.validate()) {
            this.setState({
                snackBarOpen: true, snackBarMsg: 'Login is failed'
            })
        }
        else {
            let userData = {
                'email': this.state.email,
                'password': this.state.password,
            }
            this.emptyTextField()
            services.login(userData).then(res => {
                console.log(res.data.result.accessToken)
                localStorage.setItem("userToken", res.data.result.accessToken);
                this.setState({
                    snackBarOpen: true, snackBarMsg: 'Registration is successfull',
                });
            }).catch(err => {
                console.log(err)
                this.setState({
                    snackBarOpen: true, snackBarMsg: 'Registration is failed',
                });
            })   
            console.log(userData)
        }
    }

    snackBarClose = () => {
        this.setState({
            snackBarOpen: false
        })
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div className="Content1">
                <div className='content-head'>
                <div className="Book">
                        <img src={education} alt="img"/>
                        <h1> Book Store </h1>
                    </div>
                    <div className="Book1">Sign In</div>
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
                            onChange={this.handleChange}
                            error={this.state.emailFlag}
                            helperText={this.state.errorEmail}
                            value={this.state.email}
                        />
                    </div>
                    <div className="row-content">
                        <TextField
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

                    </div>
                    <div className="show">
                        <Checkbox color="primary" onClick={this.toggleShow} />
                        <span>show password</span>
                    </div>
                    <div className='button-Content'>
                        <Button color="primary" component={Link} to="/registration" >create account</Button>
                        <div>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit} >Sign In</Button>
                            <Snackbar open={this.state.snackBarOpen} autoHideDuration={3000} message={this.state.snackBarMsg} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}