import Body from './components/Body';
import {Routes, Route} from 'react-router-dom';
import MainLayout from './pages/layout/MainLayout';
import './css/homepage.css';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';

function App() {
  return(
    <Routes>

      <Route element={<MainLayout />}>
        <Route path='/' element={<Body />} />
        <Route path='/html' element={<Html />} />
        <Route path='/css' element={<Css />} />
        <Route path='/js' element={<Javascript />} />
      </Route>

    </Routes>
  )
}

export default App;