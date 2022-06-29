import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Login from './src/screens/auth/Login';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
};

export default App;
