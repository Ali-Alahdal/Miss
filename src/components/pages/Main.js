import { useEffect, useRef, useState } from "react";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import MoveableButton from "../ButtonComponents/MoveableButton";
import Data from "../../Data.json"
import { Link } from "react-router-dom";
import Question from "./Question";
import BreakableButton from "../ButtonComponents/BreakableButton";
function Main() {

    //Define States for The Movalbe Button to know his Current Position
    const refChild = useRef(null);
  

    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [count, setCount] = useState(0);
  

    useEffect(() => {
        setCurrentQuestion(Data[count].question);
        setCurrentAnswers(Data[count].answers);
        setCorrectAnswer(Data[count].rightAnswer);
    }, [count]);



    function checkAnswer(e){
        
        if(e.target.name === correctAnswer){
          
            setCount(prev => prev + 1);
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

                <Question question={currentQuestion} checkAnswer={checkAnswer} answers={currentAnswers} st={""} />
               <BreakableButton/>
            </div>
       
    </> );
}

export default Main;