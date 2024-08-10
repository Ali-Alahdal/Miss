import { useEffect, useRef, useState } from "react";

function ButtonHolder(props) {
    const refDiv = useRef(null)
    const [position , setPosition] = useState()
    const [child , setChild] = useState(props.childPosition)


    useEffect(()=>{
        setChild(props.childPosition);
        function deced ()
        {
            if(child)
                {
                    const current = refDiv.current;
                    if(child.x <= current.offsetLeft + current.offsetWidth - 10 && child.y <=  current.offsetTop + current.offsetHeight - 10  ){
                         console.log("works" );
                    }
                }
        }
        console.log( refDiv);
     
            deced()
        

    },[position,props.childPosition,child,refDiv]);
     
    return (
        <>
            <div ref={refDiv}   className="w-25 border border-3 border-secondary">
 d
            </div>
        
        
        </>
      );
}

export default ButtonHolder;