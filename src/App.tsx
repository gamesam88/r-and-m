import { Outlet } from 'react-router';
import { Header } from '@/widgets/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <header className='app__header'>
        <div className='container'>
          <Header />
        </div>
      </header>
      <main className='app__main'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <footer className='app__footer'>
        <h3 className='container'>Made with love by gamesam88</h3>
      </footer>
    </div>
  );
};

export default App;
