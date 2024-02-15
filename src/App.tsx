import React from 'react';
import './tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes/Router';
import { AuthProvider } from './api/hooks/AuthProvider';

const queryClient = new QueryClient();

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
