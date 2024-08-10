import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      
      </BrowserRouter>
    
    </>
  );
}

export default App;
