import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path='/' element={<Body />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>

    </Routes>
  )
}

export default App;