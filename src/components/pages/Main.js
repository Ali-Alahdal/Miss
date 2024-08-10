import { useEffect, useRef, useState } from "react";
import ButtonHolder from "../ButtonComponents/ButtonHolder";
import MoveableButton from "../ButtonComponents/MoveableButton";

function Main() {
    const refChild = useRef(null);
    const [childPosition , setChildPosition] = useState();
    useEffect(()=>{
        function track()
        {
            // const ch = window.document.getElementsByName("c1");
            // console.log(ch[0].offsetTop, ch[0].offsetLeft);
            console.log(refChild.current.children[0].offsetLeft , refChild.current.children[0].offsetTop);
            setChildPosition({ x : refChild.current.children[0].offsetLeft , y : refChild.current.children[0].offsetTop  })
        }
    
       
        window.addEventListener('mouseup' , track)
    },[refChild])
    return ( <>
        <div className="position-relative w-100">
            {/* <MoveableButton text={"Button 1"} /> */}
            <div ref={refChild}>
             <MoveableButton  text={"Button 2"} name={"c1"} /> 
            </div>
           
            <ButtonHolder childPosition={childPosition}  />
        </div>
       
    </> );
}

export default Main;