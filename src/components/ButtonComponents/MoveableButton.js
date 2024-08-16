import { useState, useEffect, useRef } from "react";

function MoveableButton(props) {

    const refDiv = useRef(null);
    //Defining States
    const [isFollowing, setIsFollowing] = useState(false);
    const [position, setPosition] = useState({ x: props.pos.x, y: props.pos.y });
    const [currentColor , setCurrentColor ] = useState(""); 

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

      return () =>{
        window.removeEventListener("mousemove" , follow);
        window.removeEventListener("mouseup" , clickMouseUp) 
      }
    },[isFollowing,refDiv,props.pos.x , props.pos.y , props.pos])

    useEffect(()=>{
      const colors = [
        "success" , "danger" , "info" , "primary" , "warning" , "secondary"
      ]
      const rC =  parseInt(Math.random()*6);
      setCurrentColor(colors[rC])
    },[])
    

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
      <button ref={refDiv} name={props.text}  onPointerDown={clickMouseDown} onPointerUp={clickMouseUp}   style={{top:position.y,left:position.x,translate:`rotate(${props.style}deg)` } }  className={" border-0 m-auto text-white p-2  position-absolute pe-3 ps-3 rounded-pill border-bottom border-3 z-3 border-"+currentColor +  "-subtle  bg-"   + currentColor} >{props.text} </button>
     
  );
}

export default MoveableButton;