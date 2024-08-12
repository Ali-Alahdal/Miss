import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
import Header from './components/Layout/Header';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Count from './Context/CountContext';
import Start from './Context/StartContext';
import MoveableButton from './components/ButtonComponents/MoveableButton';
function App() {
  
  const [count , setCount ] = useState(localStorage.getItem("count"))
  const [start , setStart ] = useState(localStorage.getItem("start"))
  return (
    <>
        <div className='w-100 h-100 bg-secondary align-center pt-5'>
         
          <BrowserRouter >
            <div className='w-100 h-100 '>
              <MoveableButton text={"w"} color="success" />
              <Count.Provider value={{count , setCount}}>
                <Start.Provider value={{start, setStart}}>
                  <Header />
                  <Routes>

                    <Route index path='/' element={<Main />} />

                  </Routes>
                </Start.Provider>
              </Count.Provider>
          
            </div>

          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
