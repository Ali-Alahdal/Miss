import React, { useEffect, useRef, useState } from "react";
import Data from "../../Data.json";

function Question(props) {
    const refBtn = useRef(null);
    const [answers , setAnswers ] = useState(props.answers);
    const [btnStyle , setBtnStyle ] = useState("answer_btn btn btn-primary mt-5 m-3 text-light")
    useEffect(() =>{
      setAnswers(props.answers);
      
     
      
    },[props.answers,props.question])

 


  return (
    <>
    <div className="w-100   text-center  ">
        <h2 className="">{props.question}</h2>
        { answers ?  answers.map((answer,index)=> {
         
           return(
            <button ref={refBtn}  onClick={props.checkAnswer} name={answer.value}   className="answer_btn btn btn-primary mt-5 m-3 text-light pe-4 ps-4" key={index}>
                {answer.value}
              </button>
           ) ;  
          })
        : null }
    </div>  
     
         
              
       
    </>
  );
}
export default Question;
