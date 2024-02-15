import React from 'react';
import './tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes/Router';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
