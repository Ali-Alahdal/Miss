import React, { useEffect, useState } from "react";
import Data from "../../Data.json";

function Question() {
  const [resultQ, setResultQ] = useState(null);
  const [resultA, setResultA] = useState([]);

  useEffect(() => {
    setResultQ(Data[0].question);
    setResultA(Data[0].answers)
  }, []);

  return (
    <>
      <div className="qs_style bg-warning d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="qs_box bg-danger rounded">
            <h2 className="text-light pt-5 text-center">{resultQ}</h2>
            <div className="d-flex justify-content-center">
                {
                  resultA.map((res,i)=> (
                    
                    <button className="btn btn-primary mt-5 m-3 " key={i}>
                      {res.value}
                    </button>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Question;
