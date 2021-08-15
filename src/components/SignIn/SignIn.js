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
import "../Registration/RegistrationForm.css";
import { NavLink } from "react-router-dom";

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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <div className={classes.root}>
        <h1 style={{ textAlign: "center" }}>Sign In to Vidu</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            className={clsx(classes.margin, classes.textField)}
          />
          {/* <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            className={clsx(classes.margin, classes.textField)}
          /> */}

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
                  ></IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          {/*  */}
        </div>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "15px", maxWidth: "450px" }}
        >
          Sign In
        </Button>
        <NavLink to="/sign-up" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            style={{ marginTop: "15px", maxWidth: "450px" }}
          >
            Create a New Vidu Account
          </Button>
        </NavLink>
        <div style={{ width: "450px" }}>
          {/* <div>
            <p style={{ textAlign: "center" }}>Or Sign Up With</p>
          </div> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
              marginTop: "10px"
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
