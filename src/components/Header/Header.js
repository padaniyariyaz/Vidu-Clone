import React from "react";
import {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Button } from "@material-ui/core";
import { react } from "@babel/types";
import { LocationSearching } from "@material-ui/icons";




const Header = () => {
  const [searchText, setsearchText] = useState('')
  const history = useHistory();
  const onSubmit = ()=>{
    fetch(`https://viduclonebackend.herokuapp.com/movie?name=${searchText}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        history.push(`/movies/${json.body[0].id}`)
        
      });

  }


  return (
    <div className="topnav">
      <div className="mainLogo">
        <NavLink activeClassName="active" to="/" exact>
          VIDU
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tv">TV</NavLink>
        {/* <NavLink to="/free">Free</NavLink> */}
        <NavLink to="/sign-up">Sign Up</NavLink>
      </div>
      <div className="topnav-right">
        {/* <NavLink to="/redeem">Redeem</NavLink> */}
        <NavLink to="/sign-in">Sign In</NavLink>
        <TextField variant = "outlined" onChange = {(e)=>{
          setsearchText(e.target.value)
        }}></TextField>
        <Button onClick = {()=>
        onSubmit()
        } >
          <SearchIcon fontSize="large" />
        </Button> 
      </div>
    </div>
  );
};

export default Header;
