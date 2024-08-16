import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
import Header from './components/Layout/Header';
import { useEffect, useRef, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Count from './Context/CountContext';
import Start from './Context/StartContext';
import MoveableButton from './components/ButtonComponents/MoveableButton';
import Answers from "./Context/Answers.json"
import IsCorrect from './Context/IsCorrectContext';
import HammerPosition from './Context/HammerPositionContext';
import RandomButtons from './components/ButtonComponents/RandomButton';
function App() {
  
  const [count , setCount ] = useState(localStorage.getItem("count"))
  const [start , setStart ] = useState(localStorage.getItem("start"))
  const [hammerPosition , setHammerPosition] = useState({x : 0 , y : 0});
  const [isCorrect , setIsCorrect] = useState(false);
  const refBtnsDiv = useRef();
  const [renderd , setRenderd] = useState(0); 
 

  useEffect(()=>{
     
      setCount(parseInt( localStorage.getItem("count")));
  
      if(renderd == 0)
      {
        setRenderd(refBtnsDiv.current.children.length)
        
        
        
      }
     
      
    },[count])
  return (
    <>
        <div className='w-100 h-100 bg-secondary align-center pt-5'>
         
          <BrowserRouter >
            <div className='w-100 h-100 '>
                 
              <RandomButtons refBtnsDiv={refBtnsDiv} />
             <IsCorrect.Provider value={{isCorrect , setIsCorrect}} >
              <Count.Provider value={{count , setCount}}>
                <Start.Provider value={{start, setStart}}>
                <HammerPosition.Provider value={{hammerPosition , setHammerPosition}}>
                      <Header />

                      <Routes>

                        <Route  index path='/' element={<Main btns={refBtnsDiv} />} />

                      </Routes>
                      </HammerPosition.Provider>
                    </Start.Provider>
                  </Count.Provider>
                </IsCorrect.Provider>
             
            </div>

          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
