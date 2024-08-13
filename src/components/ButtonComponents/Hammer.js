import { useState, useEffect, useRef } from "react";

function Hammer(props) {

  const refDiv = useRef(null);

    const [isFollowing, setIsFollowing] = useState(false);
    const [position, setPosition] = useState({ x: props.pos.x , y: props.pos.y });
    const [isMoved , setIsMoved ] = useState(false);
    useEffect(() =>{
        //Follow 
        function follow(e)
        {
            if(isFollowing )
            {
                setPosition({ x :  e.clientX  , y : e.clientY });
                if(!isMoved){
                  setIsMoved(true);
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
    
    useEffect(()=>{
        function fix()
        {
          if(!isMoved)
            {
              setPosition({ x: props.pos.x  , y: props.pos.y  })
            }
        }
       fix();
     

    
    },[props.pos.x , props.pos.y])
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
    <div ref={refDiv} onPointerDown={clickMouseDown} onPointerUp={clickMouseUp}   style={{top:position.y,left:position.x}} className="bi bi-hammer  position-absolute z-3" ></div>
  )
}
export default Hammer