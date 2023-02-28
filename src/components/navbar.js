
import { Box, Button, FormControlLabel, Switch, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../utils/theme";
import { useContext, useState } from 'react';
import '../i18n';
import i18next from 'i18next'



function NavBar() {
const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [lang, setLang] = useState('ar')
  
  const togglelang = () => {
lang === 'ar' ? setLang('en') : setLang('ar') 
i18next.changeLanguage(lang).then((t) => {
   
  });
  }
  return (
    <Box bgcolor={ colors.redAccent[500]} display={'flex'} justifyContent='space-between'>
       <FormControlLabel control={<Switch  />} label={theme.palette.mode === 'dark' ? 'Dark' : 'Light'}   onChange={colorMode.toggleColorMode} />
      <Button variant='contained'  onClick={togglelang}>{lang}</Button>
    </Box>
  );
}

export default NavBar;