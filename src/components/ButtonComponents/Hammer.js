import { useState, useEffect, useRef } from "react";

function Hammer() {

  const refDiv = useRef(null);

  const [isFollowing, setIsFollowing] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() =>{
        //Follow 
        function follow(e)
        {
            if(isFollowing )
            {
                setPosition({ x :  e.clientX - 30 , y : e.clientY - 15 });
                
                
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
    <div ref={refDiv} onPointerDown={clickMouseDown} onPointerUp={clickMouseUp}   style={{top:position.y,left:position.x}} className="bg-danger border-0 m-auto text-white p-2 rounded-2 position-absolute" >Hammer</div>
  )
}
export default Hammer