import { useEffect, useState } from "react";
import "../../App.css"




function MainBar() {
    const [followMode , setFollowMode] = useState(false);
    const [currentElement , setCurrentElement] = useState();
    const folloModeState = () =>{
        followMode ? setFollowMode(false) : setFollowMode(true)
        
    }

        function follow()
        {
            for (let i = 0; i < 500; i++) {
            
                    currentElement.target.animate({
                        left: `${i}px`,
                        top: `${i}px`
                    
                    }, {duration: 1000, fill: "forwards"})
               
              
            }
            
           console.log(currentElement)
        }
        if(followMode)
        {
            follow();
        }
       
 


    return (
        <>
            <div className="w-50 bg-success m-auto mt-5  ">   
                <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                       <button className="bg-warning border-5  p-2 text-white position-fixed" on onClick={(e) => {setCurrentElement(e) ; folloModeState()} } >Home </button>
                    </li>
                    <li>
                        <button  className="bg-warning border-0 p-2 text-white" >Home </button>
                    </li>
                    <li>
                    <button  className="bg-warning border-0 p-2 text-white" >Home </button>
                    </li>
                </ul>
            </div>
        </>
     );
}

export default MainBar;