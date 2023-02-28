
import { Box, FormControlLabel, Switch, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../utils/theme";
import { useContext } from 'react';





function NavBar() {
const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box >
       <FormControlLabel control={<Switch  />} label="Dark Mode"  onChange={colorMode.toggleColorMode} />

    </Box>
  );
}

export default NavBar;