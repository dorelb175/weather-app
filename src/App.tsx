import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-b from-indigo-700 from-10%'>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
