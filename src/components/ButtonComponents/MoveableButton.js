import { useState, useEffect, useRef } from "react";

function MoveableButton(props) {

    const refDiv = useRef(null);
    //Defining States
    const [isFollowing, setIsFollowing] = useState(false);
    const [position, setPosition] = useState({ x: props.pos.x, y: props.pos.y });

    useEffect(() =>{
        
        //Follow 
        function follow(e)
        {
            if(isFollowing )
            {
                setPosition({ x :  e.clientX - 30 , y : e.clientY - 15 });
                refDiv.current.className = refDiv.current.className + " z-3"
                if(refDiv.current.className !== refDiv.current.className + " z-3"){
                  refDiv.current.className = refDiv.current.className + " z-3"
                }
                
            }else
            {
              setPosition({ x :  position.x  , y : position.y });
            }
        }


        // Listen to the mouse of the user
        window.addEventListener("mousemove" ,  follow );
        window.addEventListener("mouseup",  clickMouseUp );

          
    },[isFollowing])
    

    //Methods to Listen to the user
    function clickMouseDown()
    {

     setIsFollowing(true) 
  
    }
    function clickMouseUp()
    {
     
      setIsFollowing(false);
     
    }
  

  return (
      // A Button With Some Style
      <button ref={refDiv}  onPointerDown={clickMouseDown} onPointerUp={clickMouseUp}   style={{top:position.y,left:position.x,translate:`rotate(${props.style}deg)` } }  className={" border-0 m-auto text-white p-2  position-absolute pe-3 ps-3 rounded-pill border-bottom border-3  border-"+props.color +  "-subtle  bg-"   + props.color} >{props.text} </button>
     
  );
}

export default MoveableButton;