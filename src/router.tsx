import { createBrowserRouter } from 'react-router';
import App from './App';
import { CharacterListPage } from './pages/CharacterListPage/CharacterListPage';
import { CharacterInfoPage } from './pages/CharacterInfoPage/CharacterInfoPage';

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
