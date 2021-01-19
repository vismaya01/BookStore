import React, { useState} from 'react'
import './Customer.css'
import { TextField, Radio, Button } from '@material-ui/core'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MuiButtonRoot: {
        height: 35,
    },
    MuiFormControlRoot: {
        height: 82,
        width: 500,
        marginTop: 10,
        marginBottom: 5,
    },
}));

const Customer = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className="form1">
                <div className="first">
                    <TextField noValidate size='small' label="Name"
                        fullWidth margin="normal" variant="outlined" className="fullName1" />
                    <TextField noValidate size='small' label="Phone number"
                        fullWidth margin="normal" variant="outlined" />
                </div>
                <div className="first">
                    <TextField noValidate size='small' label="Pincode"
                        fullWidth margin="normal" variant="outlined" className="fullName1" />
                    <TextField noValidate size='small' label="Locality"
                        fullWidth margin="normal" variant="outlined" />
                </div>
                <div className={classes.MuiFormControlRoot}>
                    <TextField className={classes.MuiInputBaseRoot}  noValidate size='small' label="Address" 
                        multiline fullWidth margin="normal" variant="outlined" />
                </div>
                <div className="first">
                    <TextField noValidate size='small' label="city/town"
                        fullWidth margin="normal" variant="outlined" className="fullName1" />
                    <TextField noValidate size='small' label="LandMark"
                        fullWidth margin="normal" variant="outlined" />
                </div>
                <div className="type">
                    Type
                   <RadioGroup>
                        <FormControlLabel control={<Radio />} label="Home" />
                        <FormControlLabel control={<Radio />} label="Work" />
                        <FormControlLabel control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>
                <div className={props.open? "placeorder1" : "placeorder"}>
                    <Button className={classes.MuiButtonRoot} onClick={() => props.setOpen(true)} variant="contained" color="primary">
                        CUNTINUE
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Customer