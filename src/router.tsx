import { createBrowserRouter } from 'react-router';
import App from './App';
import { CharacterListPage } from './pages/CharacterListPage';
import { CharacterInfoPage } from './pages/CharacterInfoPage';

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
