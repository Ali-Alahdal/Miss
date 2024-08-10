import { useEffect, useState } from "react";
import "../../App.css"




function MainBar() {
    const [followMode , setFollowMode] = useState(false);
    const [currentElement , setCurrentElement] = useState();
    const folloModeState = () =>{
        followMode ? setFollowMode(false) : setFollowMode(true)
        
    }

        function follow(e)
        {
            
            for (let i = 0; i < 500; i++) {
            
                e.target.animate({
                        left: `${e.clientX  + 1}px`,
                        
                    
                    }, {duration: 15000, fill: "forwards"})
               
              
            }
            
           console.log(e)
        }
       
 


    return (
        <>
            <div className="w-50 bg-success m-auto mt-5  ">   
                <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                       <button className="bg-warning border-5  p-2 text-white position-fixed" on onClick={(e) => {setCurrentElement(e) ; follow(e);} } >Home </button>
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