import './App.css';
import AddMovie from './components/AddMovie';
import Cards from './components/Cards';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}></Route>
        <Route path='/addmovie' element={<AddMovie/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
