import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our App
      </Typography>
      <Typography variant="h6" paragraph>
        This is a simple app where you can manage users, view and create
        accounts. You can fetch a list of all users, as well as register new
        users.
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Go to Register Page
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
