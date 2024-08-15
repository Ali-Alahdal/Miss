import React, { useContext, useEffect, useRef, useState } from "react";
import Data from "../../Data.json";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import IsCorrect from "../../Context/IsCorrectContext";

function Question(props) {
    
   
    const {isCorrect , setIsCorrect} = useContext(IsCorrect);
    const [child , setChild] = useState(props.child);
    useEffect(() =>{
      setChild(props.child);
   
     
  
    },[props.question,isCorrect,props.child])

    


  return (
    <>
    {!isCorrect && props.question  && props.child ?  <div className="w-100   text-center text-light ">
        <h2 className="mb-5">{props.question}</h2>
        
        <ButtonHolder  child={child} />
    </div>   : 
      <div className="w-100 display-1  text-center">
          <i class="bi bi-check2 display-1 text-success w-100 h-100"></i>

      </div>
    
    
    }
   
     
         
              
       
    </>
  );
}
export default Question;
