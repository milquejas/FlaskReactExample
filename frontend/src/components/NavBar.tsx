import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Link to="/homepage" style={{ textDecoration: "none" }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Users</Button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button color="inherit">Register</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
