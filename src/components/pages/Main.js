import { useEffect, useRef, useState } from "react";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import MoveableButton from "../ButtonComponents/MoveableButton";

import { Link } from "react-router-dom";
import Question from "./Question";
function Main() {

    //Define States for The Movalbe Button to know his Current Position
    const refChild = useRef(null);
  

   

    return ( <>
            

            {/* Div have Moveable Button And Button Holder To Test The Process of Tracking */}
            {/* Husam Dont Touch it  !!!!!! */}
            
               
            <div className="w-100 bg-warning text-center  ">
                <div className="w-100 align-items-center text-center">
                    {/* <MoveableButton text={"Button 1"} /> */}


                    <div  ref={refChild}>
                        <MoveableButton text={"Button 2"} /> 
                    </div>
                    
                    <ButtonHolder  child={refChild}  />
                </div>
            </div>
            
            <div className="w-100">

               

                <Question/>
            </div>
       
    </> );
}

export default Main;