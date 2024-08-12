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
import Answers from "./Context/Answers.json"
function App() {
  
  const [count , setCount ] = useState(localStorage.getItem("count"))
  const [start , setStart ] = useState(localStorage.getItem("start"))
  function randomPlace   () {
    const screenWidth = window.screen.width ;
    const screenHeight = window.screen.height;
    

    const placeX = Math.random(1 , 5000);
    const placeY= Math.random(1 , 10000);

    console.log({x : placeX , y : placeY});
    
    return {x : placeX , y : placeY};
  }
  return (
    <>
        <div className='w-100 h-100 bg-secondary align-center pt-5'>
         
          <BrowserRouter >
            <div className='w-100 h-100 '>\
             
             
              <Count.Provider value={{count , setCount}}>
                <Start.Provider value={{start, setStart}}>
                  {Answers.map((answer , index) =>{
                  return(
                    <MoveableButton key={index} text={answer.value} color="success" pos={{x : Math.random(1 , window.screen.width) * 1000 , y : Math.random(1 , 10000) * 550}} />
                  );
                })}
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
