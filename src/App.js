import './App.css';

import { useRoutes } from 'react-router-dom';
import { LandingpageRoutes } from './routes';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../src/utils/theme";
import { useTranslation } from 'react-i18next';
function App() {

	  const [theme, colorMode] = useMode();

	
	const content = useRoutes(LandingpageRoutes);
const { t, i18n } = useTranslation();
 document.body.dir =  document.body.dir = i18n.dir();
	
	return (
		<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
				<CssBaseline />
				{content}
			</ThemeProvider>
			    </ColorModeContext.Provider>
	);
}

export default App;