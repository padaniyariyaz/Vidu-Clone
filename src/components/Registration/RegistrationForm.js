import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import RegistrationFormHeader from "./RegistrationFormHeader";
import "./RegistrationForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  margin: {
    margin: "1px",
    marginTop: "8px"
  },
  formControl: {
    maxWidth: "450px"
  },
  formgrp: {
    display: "inline"
  }

  // withoutLabel: {
  //   marginTop: theme.spacing(1)
  // }
}));

const RegistrationForm = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form">
      <RegistrationFormHeader />
      <div className={classes.root}>
        <h1>Create a New Account</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
          />

          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              className={clsx(classes.margin, classes.textField)}
            />
          </div>
          <FormControl
            fullWidth
            className={clsx(classes.margin)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          {/*  */}
        </div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup className={classes.formgrp}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChangeCheckbox}
                  name="gilad"
                />
              }
              // label="I certify that I am at least 18 years old and that I agree to the Terms and Policies and Privacy Policy. This service is for the U.S. only."
            />
            <span>
              I certify that I am at least 18 years old and that I agree to the{" "}
              <b style={{ color: "blue" }}>Terms and Policies </b> and
              <b style={{ color: "blue" }}> Privacy Policy</b>. This service is
              for the U.S. only.
            </span>
          </FormGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "15px", maxWidth: "450px" }}
        >
          Sign Up
        </Button>
        <div style={{ width: "450px" }}>
          <div>
            <p style={{ textAlign: "center" }}>Or Sign Up With</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
            >
              Walmart{" "}
              <WbSunnyRoundedIcon
                style={{ marginLeft: "5px", color: "orange" }}
              />
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "5px", width: "100%" }}
            >
              facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
