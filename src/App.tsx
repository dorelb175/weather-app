import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
    </>
  )
}

export default App;
