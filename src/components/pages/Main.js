import { useEffect, useRef, useState } from "react";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import MoveableButton from "../ButtonComponents/MoveableButton";

import { Link } from "react-router-dom";
import Question from "./Question";
function Main() {

    //Define States for The Movalbe Button to know his Current Position
    const refChild = useRef(null);
    const [childPosition , setChildPosition] = useState();

    //use Effect to Track Movable Button Places
    useEffect(()=>{
        
        //Get Active When Movable Button Moves and save his poition in insde state
        function track()
        {
            const current = refChild.current.children[0];
            setChildPosition({ x : current.offsetLeft , y : current.offsetTop  })
        }
        
        //Track Mouse Up So We Can Get Button Posiiton
        window.addEventListener('mouseup' , track)
    },[refChild])

    return ( <>
            

            {/* Div have Moveable Button And Button Holder To Test The Process of Tracking */}
            {/* Dont Touch it Husam !!!!!! */}
            <div className="position-relative w-100">
                {/* <MoveableButton text={"Button 1"} /> */}
                <div ref={refChild}>
                    <MoveableButton  text={"Button 2"} name={"c1"} /> 
                </div>
                <ButtonHolder childPosition={childPosition}  />
            </div>
               

            
            <div className="w-100">
               
                <Question/>
            </div>
       
    </> );
}

export default Main;