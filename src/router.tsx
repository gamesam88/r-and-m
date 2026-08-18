import { createBrowserRouter } from 'react-router';

import App from './App';
import { CharacterInfoPage } from './pages/CharacterInfoPage';
import { CharacterListPage } from './pages/CharacterListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: CharacterListPage
      },
      {
        path: '/:id',
        Component: CharacterInfoPage
      }
    ]
  }
]);
