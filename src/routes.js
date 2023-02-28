import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { Landingpage_Layout } from './layout/landingpage_layout';
import NavBar from './components/navbar';
export const LandingpageRoutes = [
	{
		path: '/',
		element: (
			<Landingpage_Layout>
				<NavBar />
			</Landingpage_Layout>
		),
	},

	
	{
		path: '*',
		element: <Navigate to="/" />,
	},
	
];
