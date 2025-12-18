import { createRouter, RouterProvider } from '@tanstack/react-router';
import '@/global.css';
import { envVar } from '@/helpers/constants';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({ routeTree });

const App = () => {
  return (
    <RouterProvider
      router={router}
      basepath={envVar.isProd ? envVar.base : ''}
    />
  );
};

export default App;
