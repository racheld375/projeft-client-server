import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import UsersItem from './UsersItem';
import {
  Grid,
  Typography,
  TextField,
  Card,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import { FiSearch } from "react-icons/fi";
import InputAdornment from '@mui/material/InputAdornment';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const fechUsers = async () => {
    const { data } = await Axios.get("http://localhost:7500/ContentManager/users/");
    setUsers(data);
  };

  useEffect(() => {
    fechUsers();
  }, []);

  if (users.length === 0) return <h2>loading</h2>;

  return (
    <>
      {/* Add user */}
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
        <Link
          to="/users/Add"
          style={{
            textDecoration: 'none',
            color: '#ff6f00',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Add user
        </Link>
      </Typography>

      {/* Search + radios */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>

        {/* Search input */}
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            value={search}
            label="Search"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              searchBy === "email"
                ? "example@email.com"
                : searchBy === "phone"
                  ? "050-0000000"
                  : "Search..."
            }
            sx={{ backgroundColor: '#e0f7fa', borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Radio filter */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              p: 1,
              borderRadius: 2,
              backgroundColor: '#fff3e0',
            }}
          >
            <RadioGroup
              row
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <FormControlLabel value="name" control={<Radio />} label="Name" />
              <FormControlLabel value="username" control={<Radio />} label="Username" />
              <FormControlLabel value="email" control={<Radio />} label="Email" />
              <FormControlLabel value="phone" control={<Radio />} label="Phone" />
            </RadioGroup>
          </Card>
        </Grid>
      </Grid>

      {/* Users list */}
      <Grid container direction="column" spacing={1}>
        {users
          .filter(u =>
            u[searchBy]?.toLowerCase().includes(search.toLowerCase())
          )
          .map(user => (
            <Grid item key={user._id} sx={{ width: '900px' }}>
              <UsersItem user={user} fechUsers={fechUsers} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default UsersList;

