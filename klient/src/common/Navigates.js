
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { MdTaskAlt, MdOutlinePostAdd, MdSupervisedUserCircle, MdAddPhotoAlternate } from "react-icons/md";

const Navigates = () => {
  const links = [
    { to: "/users", label: "users", icon: <MdSupervisedUserCircle /> },
    { to: "/todos", label: "todos", icon: <MdTaskAlt /> },
    { to: "/posts", label: "posts", icon: <MdOutlinePostAdd /> },
    { to: "/photos", label: "photos", icon: <MdAddPhotoAlternate /> },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: 3, pt: 3 }}>
      
      {/* Home page במרכז */}
      <Typography sx={{ textAlign: 'center', width: '100%', mb: 4 }}>
        <NavLink
          to="/"
          style={{
            textDecoration: 'none',
            color: '#ff6f00',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          home page
        </NavLink>
      </Typography>

      {/* שאר הקישורים בצד שמאל */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#ff6f00' : '#000',
              fontSize: '18px',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '8px',
              transition: 'background-color 0.2s, color 0.2s',
            })}
            className="nav-link"
          >
            {link.icon} {link.label}
          </NavLink>
        ))}
      </Box>

      {/* CSS לאפקט הובר */}
      <style>{`
        .nav-link:hover {
          background-color: #fff3e0;
          color: #e65100 !important;
        }
      `}</style>
    </Box>
  );
}

export default Navigates;
