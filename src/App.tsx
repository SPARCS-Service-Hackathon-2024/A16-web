import React from 'react';
import './tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes/Router';
import { AuthProvider } from './api/hooks/AuthProvider';
import api from './api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) =>
        api.get(queryKey[0] as string, {
          params: queryKey[1],
        }),
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
