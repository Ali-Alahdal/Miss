import React, { useEffect, useState } from "react";
import Data from "../../Data.json";

function Question() {
  const [resultQ, setResultQ] = useState(null);
  const [resultA, setResultA] = useState([]);
  const [rightA, setRightA] = useState(null);
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    setResultQ(Data[count].question);
    setResultA(Data[count].answers);
    setRightA(Data[count].rightAnswer);
  }, [count]);


  function nextQuestion(e){
    const myBtn = e;
    console.log(myBtn.target.value)
    if(myBtn.target.name == rightA){
      
      setCount(prev => prev + 1)
    }else{

      myBtn.target.className = myBtn.target.className + " broke_btn ";
      console.log(myBtn)
    }

  }



  return (
    <>
      <div className="qs_style bg-warning d-flex justify-content-center align-items-center">
          <div className="qs_box bg-danger rounded">
            <h2 className="text-light pt-5 text-center">{resultQ}</h2>
            <div className="d-flex justify-content-center">
                {
                  resultA.map((res,i)=> (

                    <button onClick={nextQuestion} name={res.value} className= "answer_btn btn btn-primary mt-5 m-3 text-light" key={i}>
                      {res.value}
                    </button>
                  ))
                }
            </div>
          </div>
      </div>
    </>
  );
}
export default Question;
