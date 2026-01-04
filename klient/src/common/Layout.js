
import { Outlet } from 'react-router-dom';
import Navigates from './Navigates';
import { Box } from '@mui/material';


const Layout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* צד שמאל - Sidebar */}
<Box
  sx={{
    width: '300px',
    backgroundColor: '#f5f5f5',
    p: 3,
    boxShadow: 2,
    position: 'sticky',
    top: 0,            // נדבק לראש המסך
    height: '100vh',   // גובה מסך מלא
  }}
>
  <Navigates />
</Box>

      {/* צד ימין - תוכן מרכזי */}
      <Box
        sx={{
          flex: 1,                  // תופס את שאר המקום
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',     // כל התוכן במרכז
        }}
      >
        <Outlet />
      </Box>

    </Box>
  );
};

export default Layout;
