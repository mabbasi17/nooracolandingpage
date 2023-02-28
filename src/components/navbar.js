
import { Box, FormControlLabel, Switch } from '@mui/material';

import { useContext } from 'react';
import { ThemeContext } from './../context/themeContext';


function NavBar() {
const {toogletheme} =useContext(ThemeContext)
  return (
    <Box >
       <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode"  onChange={toogletheme}/>

    </Box>
  );
}

export default NavBar;