import React, { useState, useEffect } from "react";

function MoveableButton() {

  const [isFollowing, setIsFollowing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() =>{


    function follow(e){
      if(isFollowing)
        {
         setPosition({ x :  e.clientX - 30 , y : e.clientY - 15 });
        
        }else{
       
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
    <>
        <button  onPointerDown={clickMouseDown} onPointerUp={clickMouseUp}   style={{top:position.y,left:position.x}}  className="bg-success border-0 m-auto text-white p-2 rounded-2 position-absolute" >Follow </button>
     </>
  );
}

export default MoveableButton;