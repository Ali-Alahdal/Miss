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
import IsCorrect from "../../Context/IsCorrectContext";
function Main(props) {

    //Define States for The Movalbe Button to know his Current Position
    const {start , setStart } = useContext(Start)
    

    const [currentQuestion, setCurrentQuestion] = useState("");
 
    const [correctAnswer, setCorrectAnswer] = useState("");
    const {count, setCount} = useContext(Count);
    const {isCorrect, setIsCorrect} = useContext(IsCorrect)
    const [answerBtn , setAnswerBtn] = useState();
    const [allBtns , setAllBtns] = useState()

    useEffect(() => {
        if(count && count <  Data.length ){
            setCurrentQuestion(Data[count].question);
            setCorrectAnswer(Data[count].rightAnswer);
            setCount(parseInt(localStorage.getItem("count")));
            console.log(count , start);
        }else{
            if(count >=  Data.length)
            {
                localStorage.setItem("count" , 0)
                localStorage.setItem("start" , "false");
                setStart("false");
                setCount(0);
            }else{
                // localStorage.setItem("count" , 0)
                // setCount(parseInt(localStorage.getItem("count")))
                // setCurrentQuestion(Data[0].question);
                // setCorrectAnswer(Data[0].rightAnswer);
            }
          
        
        }
        
        
      
    }, [count,start,isCorrect,correctAnswer,answerBtn]);

    useEffect(()=>{
      


        setAllBtns(props.btns.current.children)
        if( allBtns){
            Object.values( Object.entries(allBtns)).map((btn , index)=>{
                if(btn[1].name == correctAnswer)
                {
                    setAnswerBtn(btn[1]);
                   
                }   
            
            })
        }
        console.log("worked" , props.btns.current.children);
       
      
       
        
    },[allBtns,props.btns,correctAnswer,isCorrect,start])


    

      useEffect(() =>{
        if(isCorrect){
            setTimeout(() => {
                setIsCorrect(false);
                const currentCount = count + 1;
                setCount(prev => prev + 1);
                localStorage.setItem("count" , parseInt( currentCount));
                
            }, 3 * 1000);
        }
      },[isCorrect])
    
   

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
            
            <div className="w-75 m-auto mt-4 h-75 d-flex align-items-center text-center border rounded-4 z-2 position-absolute  start-50 translate-middle" style={{backgroundColor:"#c47d51" , top:"55%"}}>
              
                {start === "true" && answerBtn && correctAnswer  && count >= 0  ? <Question question={currentQuestion}  isCorrect={setIsCorrect} child={answerBtn} />
                :
                <StartMenu/>}
              
               
            </div>
       
    </> );
}

export default Main;