import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
import Header from './components/Layout/Header';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Count from './Context/CountContext';
function App() {
  
  const [count , setCount ] = useState(localStorage.getItem("count"))
  return (
    <>
        <div className='w-100 h-100 bg-secondary align-center pt-5'>
         
          <BrowserRouter >
            <div className='w-100 h-100 '>
              <button className='position-absolute ' style={{left:"50%"}}></button>
              <Count.Provider value={{count , setCount}}>
                <Header />
                <Routes>

                  <Route index path='/' element={<Main />} />
                  
                </Routes>
              </Count.Provider>
            </div>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
