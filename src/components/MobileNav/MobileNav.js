import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import "./MobileNav.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink
          to="/movies"
          exact
          style={{ textDecoration: "none", color: "#000" }}
        >
          <ListItem button>
            <ListItemText primary="Movies" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/tv"
          exact
          style={{ textDecoration: "none", color: "#000" }}
        >
          <ListItem button>
            <ListItemText primary="Tv" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/sign-in"
          exact
          style={{ textDecoration: "none", color: "#000" }}
        >
          <ListItem button>
            <ListItemText primary="Sign In" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/sign-up"
          exact
          style={{ textDecoration: "none", color: "#000" }}
        >
          <ListItem button>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div className="mobileNav">
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <div className="mobileNav-right">
        <NavLink to="/" exact>
          VIDU
        </NavLink>
      </div>
    </div>
  );
}
