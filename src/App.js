<<<<<<< HEAD
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
=======
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
<<<<<<< HEAD

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}/>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
=======
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
}

export default App;
