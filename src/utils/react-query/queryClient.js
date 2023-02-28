import { QueryClient } from 'react-query';

function queryErrorHandler() {
	// error: unknown
	// @TODO: Handle Errors globally
}

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			onError: () =>
				// error
				queryErrorHandler(),
			// error
			// --- Defaults ---
			// staleTime: 0,
			// cacheTime: 300000,
			// refetchOnMount: true,
			// refetchOnWindowFocus: true,
			// refetchOnReconnect: true,
		},
		mutations: {
			onError: () =>
				// error
				queryErrorHandler(),
			// error
		},
	},
});
