import { useEffect, useRef, useState } from "react";

function ButtonHolder(props) {
    const refDiv = useRef(null)
   
  
    const [child , setChild] = useState(props.child);
    const [isHeld , setIsHeld] = useState(false)
    useEffect(()=>{

      
        
       
      
     
        function settleButton ()
        {
            const childPosition = child.current.children[0];
            if(childPosition && !isHeld )
            {
                
                const currentDiv = refDiv.current;


                //calculating the distance between the div and the child button
                let disLeft =  childPosition.offsetLeft - currentDiv.offsetLeft;
                let disTop =  childPosition.offsetTop - currentDiv.offsetTop;

                if( disLeft > -70 && disLeft < 95 && disTop < 45 ) 
                {
                    
                    //Settle it inside this div
                    childPosition.className = "bg-success border-0 m-auto text-white p-2 rounded-2"
                    currentDiv.appendChild(childPosition);
                    setIsHeld(true);
                   
                }
            }
        }



            window.addEventListener('mouseup' , settleButton);
            
            return() =>{
                window.removeEventListener('mouseup' , settleButton);
            }
     
        

    },[]);
     
    return (
        <>
            <div ref={refDiv}   className="position-relative border border-3 border-secondary text-center ms-auto "  style={{width:100,height:50}}>
                
            </div>
        
        
        </>
      );
}

export default ButtonHolder;