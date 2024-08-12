import { useContext, useEffect, useRef, useState } from "react";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import MoveableButton from "../ButtonComponents/MoveableButton";
import Data from "../../Data.json"
import { Link } from "react-router-dom";
import Question from "./Question";
import Count from "../../Context/CountContext";
import Start from "../../Context/StartContext";
import StartMenu from "./StartMenu";
import BreakableButton from "../ButtonComponents/BreakableButton";
import Hammer from "../ButtonComponents/Hammer";
function Main() {

    //Define States for The Movalbe Button to know his Current Position
    const {start , setStart } = useContext(Start)
    

    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const {count, setCount} = useContext(Count);
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => {
        if(count){
            setCurrentQuestion(Data[count].question);
            setCurrentAnswers(Data[count].answers);
            setCorrectAnswer(Data[count].rightAnswer);
            setCount(parseInt(localStorage.getItem("count")))
        }else{
            localStorage.setItem("count" , 0)
            setCount(parseInt(localStorage.getItem("count")))
            setCurrentQuestion(Data[0].question);
            setCurrentAnswers(Data[0].answers);
            setCorrectAnswer(Data[0].rightAnswer);
        
        }
      
    }, [count]);



    function checkAnswer(e){
        
        if(e.target.name === correctAnswer){
            setIsCorrect(true)
            
            setTimeout(() => {
                setIsCorrect(false);
                const currentCount = count + 1;
                setCount(prev => prev + 1);
                localStorage.setItem("count" , parseInt( currentCount));
                
            }, 3 * 1000);
            
        }else{
            console.log("wrong Answer");
        }
    
      }
    
   

    return ( <>
            

            {/* Div have Moveable Button And Button Holder To Test The Process of Tracking */}
            {/* Husam Dont Touch it  !!!!!! */}
            
            {/*                
            <div className="w-100 bg-warning text-center  ">
                <div className="w-100 align-items-center text-center">
                    // 


                    <div  ref={refChild}>
                        <MoveableButton text={"Button 2"} /> 
                    </div>

                    <ButtonHolder  child={refChild}  />
                </div>
            </div> */}
            
            <div className="w-75 m-auto mt-4 h-75 d-flex align-items-center text-center rounded-4" style={{backgroundColor:"#c47d51"}}>
              
                {start && count != null ? <Question question={currentQuestion} checkAnswer={checkAnswer} answers={currentAnswers} isCorrect={isCorrect} />
                :
                <StartMenu/>}
              
               
            </div>
       
    </> );
}

export default Main;