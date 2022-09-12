import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home';
import Games from './pages/Games';
import Reviews from './pages/Reviews';
import Account from './pages/Account';

const API = 'http.//localhost:3001'

function App() {
  return (
    <div>
      <div className="Nav">
        <h1>GameBook</h1>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/account" element={<Account/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
