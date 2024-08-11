import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
import Header from './components/Layout/Header';
function App() {
  return (
    <>
        <div className='w-100 h-100 bg-primary align-center pt-5'>
          <Header />
          <BrowserRouter >
            <Routes>

              <Route index path='/' element={<Main />} />
              
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
