import NavBar from './../components/navbar';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


export const Landingpage_Layout = () => {
const { t } = useTranslation();

    return (
   
        <>
          <NavBar/>
          <Box>
      <Typography variant='h4'>{t('welcome')}</Typography>

    </Box>
            <div>slider</div>
            <div>section</div>
              <div>section</div>
             <div>section</div>
            <div>section</div>
          <div>footer</div>
          </>
   
  )
}
