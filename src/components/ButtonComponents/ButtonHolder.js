import { useContext, useEffect, useRef, useState } from "react";
import IsCorrect from "../../Context/IsCorrectContext";

function ButtonHolder(props) {
    const refDiv = useRef(null)
   
    
    const [child , setChild] = useState(props.child);
    const [isHeld , setIsHeld] = useState(false)
    const  {setIsCorrect }   = useContext(IsCorrect);
    useEffect(()=>{

      
        
       
      
     
        function settleButton ()
        {
            const childPosition = props.child;
            console.log(props.child);
            
            if(childPosition && !isHeld )
            {
                
                const currentDiv = refDiv.current;


                //calculating the distance between the div and the child button
                let disLeft =  childPosition.offsetLeft - currentDiv.offsetParent.offsetLeft + currentDiv.offsetWidth / 2;
                let disTop =  childPosition.offsetTop - currentDiv.offsetParent.offsetTop;
               
                
                if( disLeft > -45 && disLeft < 195 && disTop < 60 && disTop > -25 ) 
                {
                    
                    //Settle it inside this div
                    childPosition.className = "bg-success border-0  m-auto text-white p-2 rounded-2 w-100 rounded-pill h-100 border-bottom border-success-subtle border-3"
                    currentDiv.appendChild(childPosition);
                  
                    setIsHeld(true);
                    setTimeout(() => {
                        setIsCorrect(true);    
                    }, 2 * 1000);
                    
                   
                }
            }
        }



            window.addEventListener('mouseup' , settleButton);
            
            return() =>{
                window.removeEventListener('mouseup' , settleButton);
            }
     
        

    },[IsCorrect,props.child]);
     
    return (
        <>
            <div ref={refDiv}   className={ !isHeld ? "position-relative border border-3 border-secondary text-center m-auto rounded-pill " :  " position-relative  text-center m-auto " }  style={{width:"15%",height:50}}>
                
            </div>
        
        
        </>
        
      );
}

export default ButtonHolder;