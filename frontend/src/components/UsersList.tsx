import { useState } from "react";
import { Button, Box, List, ListItem, Typography } from "@mui/material";
import api from "../api/api"; // Tarkista polku

const UsersList = () => {
  const [users, setUsers] = useState<
    { id: number; username: string; email: string }[]
  >([]);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>
      <Button
        onClick={fetchUsers}
        variant="contained"
        color="primary"
        sx={{ padding: "10px 20px", fontSize: "16px", marginBottom: 2 }}
      >
        Fetch Users
      </Button>

      <List sx={{ maxWidth: 400, margin: "0 auto", padding: 0 }}>
        {users.map((user) => (
          <ListItem
            key={user.id}
            sx={{
              marginTop: 1,
              padding: 2,
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">{user.username}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UsersList;
