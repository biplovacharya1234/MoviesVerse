import './App.css';
import AddMovie from './components/AddMovie';
import Cards from './components/Cards';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}></Route>
        <Route path='/addmovie' element={<AddMovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
