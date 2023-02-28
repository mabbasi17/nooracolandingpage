import './App.css';
import { Box, Dialog, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { LandingpageRoutes } from './routes';
import { createTheme } from '@mui/material/styles';
import { Theme } from './utils/theme';


function App() {
	const content = useRoutes(LandingpageRoutes);
	const theme = createTheme(Theme);
	return (
		
		<Box m={0} dir={theme.options.direction} style={{background: theme.palette.info.dark , color: theme.palette.info.light }} > 
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{content}
				</ThemeProvider>
				</Box>
	);
}

export default App;