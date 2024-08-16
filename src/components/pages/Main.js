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
import BreakableButtonHolder from "../ButtonComponents/BreakableButtonHolder";
function Main(props) {

    //Define States for The Movalbe Button to know his Current Position
    const {start , setStart } = useContext(Start);
    //Defining States
    

    const [currentQuestion, setCurrentQuestion] = useState("");
 
    const [correctAnswer, setCorrectAnswer] = useState("");
    const {count, setCount} = useContext(Count);
    const {isCorrect, setIsCorrect} = useContext(IsCorrect)
    const [answerBtn , setAnswerBtn] = useState();
    const [allBtns , setAllBtns] = useState()

    useEffect(() => {
        if(count && start){

        
        if( count <  Data.length ){
            setCount(parseInt(localStorage.getItem("count")));
            setCurrentQuestion(Data[parseInt(localStorage.getItem("count"))].question);
            setCorrectAnswer(Data[parseInt(localStorage.getItem("count"))].rightAnswer);
            
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
    }else{
        setCount(0)
        setStart("false")
    }
        
        
      
    }, [count,start,isCorrect,correctAnswer,answerBtn,currentQuestion]);

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
            
            <div  className="w-75 m-auto mt-4 h-75 d-flex align-items-center text-center border rounded-4 z-1 translate-middle start-50 position-absolute " style={{backgroundColor:"#c47d51" , top:"55%"}}>
              
                {start === "true" && answerBtn && correctAnswer  && count >= 0  ? <Question question={currentQuestion}  isCorrect={setIsCorrect} child={answerBtn} />
                :
                <StartMenu/>}
              {/* <BreakableButtonHolder child={answerBtn}  style={" border-3 border-secondary me-4  rounded-pill btn   ps-5 pe-5 "}
                            styleS={"border-3 border-secondary  rounded-pill btn ps-4 pe-4"} /> */}
               
            </div>
       
    </> );
}

export default Main;