import React, { useEffect, useRef, useState } from "react";
import Data from "../../Data.json";

function Question(props) {
    const refBtn = useRef(null);
    const [answers , setAnswers ] = useState(props.answers);
    const [isCorrect , setIsCorrect] = useState(props.isCorrect)
    useEffect(() =>{
      setAnswers(props.answers);
      setIsCorrect(props.isCorrect)
     
      
    },[props.answers,props.question,props.isCorrect])

 


  return (
    <>
    {!isCorrect ?  <div className="w-100   text-center text-light ">
        <h2 className="mb-5">{props.question}</h2>
        
        { answers ?  answers.map((answer,index)=> {
         
           return(
            <button ref={refBtn}  onClick={props.checkAnswer} name={answer.value}   className="btn text-light bg-success border-0  pe-5 ps-5 ms-5 mt-5 me-5 rounded-pill " key={index}>
                {answer.value}
              </button>
           ) ;  
          })
        : null }
    </div>   : 
      <div className="w-100 display-1  text-center">
          <i class="bi bi-check2 display-1 text-success w-100 h-100"></i>

      </div>
    
    
    }
   
     
         
              
       
    </>
  );
}
export default Question;
