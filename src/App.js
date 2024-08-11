import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
import Header from './components/Layout/Header';
function App() {
  return (
    <>
        <div className='w-100 h-100 bg-secondary align-center pt-5'>
         
          <BrowserRouter >
            <Header />
            <Routes>

              <Route index path='/' element={<Main />} />
              
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
