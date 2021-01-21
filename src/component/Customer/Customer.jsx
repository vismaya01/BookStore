import React, { useState } from 'react'
import './Customer.css'
import { TextField, Radio, Button } from '@material-ui/core'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Service from '../../services/userServices'

const services = new Service()

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        height: 35,
    },
    MuiFormControlRoot: {
        height: 82,
        width: 500,
        marginTop: 20,
        marginBottom: 5,
    },
}));

const Customer = (props) => {
    const classes = useStyles();
    const [name ,setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [pincode, setPincode] = useState("")
    const [locality, setLocality] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [type, setType] = useState("")
    const [errorName ,setErrorName] = useState("")
    const [errorphoneNumber, setErrorPhoneNumber] = useState("")
    const [errorpincode, setErrorPincode] = useState("")
    const [errorlocality, setErrorLocality] = useState("")
    const [erroraddress, setErrorAddress] = useState("")
    const [errorcity, setErrorCity] = useState("")
    const [errorState, setErrorState] = useState("")
    const [flagName ,setflagName] = useState(false)
    const [flagphoneNumber, setflagPhoneNumber] = useState(false)
    const [flagpincode, setflagPincode] = useState(false)
    const [flaglocality, setflagLocality] = useState(false)
    const [flagaddress, setflagAddress] = useState(false)
    const [flagcity, setflagCity] = useState(false)
    const [flagState, setflagState] = useState(false)

    const validate = () => {
        let valid = false
        if(name === "" ) {
            valid = true
            setErrorName("name is required")
            setflagName(true)
        }
        if(phoneNumber === "" ) {
            valid = true
            setErrorPhoneNumber("phoneNumber is required")
            setflagPhoneNumber(true)
        }
        if(pincode === "" ) {
            valid = true
            setErrorPincode("pincode is required")
            setflagPincode(true)
        }
        if(locality === "" ) {
            valid = true
            setErrorLocality("locality is required")
            setflagLocality(true)
        }
        if(address === "" ) {
            valid = true
            setErrorAddress("address is required")
            setflagAddress(true)
        }
        if(city === "" ) {
            valid = true
            setErrorCity("city/town is required")
            setflagCity(true)
        }
        if(state === "" ) {
            valid = true
            setErrorState("land mark  is required")
            setflagState(true)
        }
        return valid
    }

    const CustomerDetails = () => {
        if(validate()) {
            console.log("failed")
        }
        else {
            console.log("successed")
            let data =  {
                "addressType": type,
                "fullAddress": address +","+ locality +"," + pincode ,
                "city": city,
                "state": state,
            }
            services.customerDetails(data, localStorage.getItem("userToken")).then(res => {
                console.log(res)
                props.setOpen(true)
            }).catch(err => {
                console.log(err)
            })
            
        }
       
    } 

    return (
        <div className="form1">
            <div className="first">
                <TextField noValidate size='small' label="Name" onChange={(e) => setName(e.target.value)}
                    error={flagName} helperText={errorName} fullWidth margin="normal" variant="outlined" 
                    className="fullName1" />
                <TextField noValidate size='small' label="Phone number" onChange={(e) => setPhoneNumber(e.target.value)}
                    error={flagphoneNumber} helperText={errorphoneNumber} fullWidth 
                    margin="normal" variant="outlined" />
            </div>
            <div className="first">
                <TextField noValidate size='small' label="Pincode" onChange={(e) => setPincode(e.target.value)}
                    error={flagpincode} helperText={errorpincode} fullWidth margin="normal" 
                    variant="outlined" className="fullName1" />
                <TextField noValidate size='small' label="Locality" onChange={(e) => setLocality(e.target.value)}
                    error={flaglocality} helperText={errorlocality} fullWidth margin="normal" variant="outlined" />
            </div>
            <div className="first">
                    <TextField noValidate size='small' label="Address"
                       onChange={(e) => setAddress(e.target.value)} multiline fullWidth 
                       error={flagaddress} helperText={erroraddress} margin="normal" variant="outlined" />
            </div>
            <div className="first">
                <TextField noValidate size='small' label="city/town" onChange={(e) => setCity(e.target.value)}
                     error={flagcity} helperText={errorcity} fullWidth margin="normal" 
                     variant="outlined" className="fullName1" />
                <TextField noValidate size='small' label="State" onChange={(e) => setState(e.target.value)}
                     error={flagState} helperText={errorState} fullWidth margin="normal" variant="outlined" />
            </div>
            <div className="type">
                Type
                   <RadioGroup onClick={(e) => setType(e.target.value)}>
                    <FormControlLabel value={"Home"} control={<Radio />} label="Home" />
                    <FormControlLabel value={"Work"} control={<Radio />} label="Work" />
                    <FormControlLabel value={"Other"} control={<Radio />} label="Other" />
                </RadioGroup>
            </div>
            <div className={props.open ? "placeorder1" : "placeorder"}>
                <Button className={classes.MuiButtonRoot} onClick={() =>  CustomerDetails()} variant="contained" color="primary">
                    CUNTINUE
                </Button>
            </div>
        </div>
    )
}

export default Customer