import { useContext, useEffect, useRef, useState } from "react";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import MoveableButton from "../ButtonComponents/MoveableButton";
import Data from "../../Data.json"
import { Link } from "react-router-dom";
import Question from "./Question";
import Count from "../../Context/CountContext";
import StartMenu from "./StartMenu";
function Main() {

    //Define States for The Movalbe Button to know his Current Position
    const [start , setStart ] = useState(false)
    

    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const {count, setCount} = useContext(Count);
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => {
        setCurrentQuestion(Data[count].question);
        setCurrentAnswers(Data[count].answers);
        setCorrectAnswer(Data[count].rightAnswer);
        setCount(parseInt(localStorage.getItem("count")))
    }, [count,localStorage]);



    function checkAnswer(e){
        
        if(e.target.name === correctAnswer){
            setStart(true)
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
            
            <div className="w-75 m-auto mt-4 h-75 d-flex align-items-center text-center" style={{backgroundColor:"#c47d51"}}>
                {start ? <Question question={currentQuestion} checkAnswer={checkAnswer} answers={currentAnswers} isCorrect={isCorrect} />
                :
                <StartMenu/>}
                
               
            </div>
       
    </> );
}

export default Main;