import './App.css';

import { useRoutes } from 'react-router-dom';
import { LandingpageRoutes } from './routes';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../src/utils/theme";

function App() {

	  const [theme, colorMode] = useMode();

	
	const content = useRoutes(LandingpageRoutes);


	
	return (
		<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
				<CssBaseline />
				{content}
			</ThemeProvider>
			    </ColorModeContext.Provider>
	);
}

export default App;