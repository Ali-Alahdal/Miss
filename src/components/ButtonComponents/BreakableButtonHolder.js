import React, { useContext, useEffect, useRef, useState } from 'react'
import HammerPosition from '../../Context/HammerPositionContext';

import IsCorrect from '../../Context/IsCorrectContext';
function BreakableButtonHolder(props) {

  const [isbroken , setIsBorken] = useState(false);
  const [firstHalf, setFirstHalf] = useState('');
  const [secHalf, setSecHalf] = useState('');
  const [isFixed , setIsFixed ] = useState(false);
  const {hammerPosition , setHammerPosition} = useContext(HammerPosition)

  const [child , setChild] = useState(props.child);
  const [isHeld , setIsHeld] = useState(false)
  const  {setIsCorrect }   = useContext(IsCorrect);
  const refDivT = useRef(null);
  const refDiv = useRef(null);



      const splitString = () => {
        const midpoint = Math.floor(refDivT.current.innerHTML.length / 2);
        
        
        setFirstHalf(refDivT.current.innerHTML.slice(0, midpoint));
        setSecHalf(refDivT.current.innerHTML.slice(midpoint));
        
        console.log(refDivT);
        refDivT.current.style = "display: hidden";
        setIsBorken(true);

      };

    useEffect(()=>{

          
            
          
          
        
      function settleButton ()
      {
          const childPosition = props.child;
      

          if(childPosition && !isHeld )
          {
            
            
           
            //calculating the distance between the div and the child button
            if(!isbroken && refDivT.current )
            {
                
              const currentDiv = refDivT.current;
            
              let disLeft =  childPosition.offsetLeft - currentDiv.offsetLeft ;
              let disTop =  childPosition.offsetTop - currentDiv.offsetTop;
              // console.log(disLeft , disTop);
              
              
              
              if( disLeft > 50 && disLeft < 230 && disTop > 230 && disTop < 315 ) 
              {
               
                  
                  //Settle it inside this div
                  if(!isbroken && isFixed)
                  {
                    childPosition.className = "bg-success  border-0 btn  text-white   w-100 rounded-pill h-100 border-bottom border-success-subtle border-3 pe-5 ps-5"
                    refDivT.current.className = "  me-4  rounded-pill   "
                    currentDiv.appendChild(childPosition);
                    setIsHeld(true);
                    setTimeout(() => {
                        setIsCorrect(true);    
                    }, 2 * 1000);
                  }
                  if(!isbroken && !isFixed)
                  {
                    splitString();
                    
                    console.log(isFixed , " bro");
                    setIsCorrect(false);
                    
                  }
                
              }
            }
            
          }
        }



          window.addEventListener('mouseup' , settleButton);
          
           return () =>{
            window.removeEventListener("mouseup" , settleButton)
      }
  
        

    },[IsCorrect,props.child,isFixed ]);


    useEffect(() => {
      function fix()
      {
        if(refDivT && isbroken && !isFixed){
          const disX =  hammerPosition.x-  refDiv.current.offsetLeft ;
          const disY = hammerPosition.y - refDiv.current.offsetTop ;
       
          
          console.log(disX , disY);
          if(disX > 345 && disX < 595 && disY  > 240 && disY < 300)
          {
           
           
            setIsBorken(false);
            setIsFixed(true)
            
            
           
            refDiv.current.style = "display: none ";
          }
        }
        if(!isbroken && isFixed){
          refDivT.current.style = "display: inline-block ";
          console.log(" b : " + isbroken , "f : "  + isFixed  );
          
          if(!refDivT.current.className.includes("pt-3 pb-3")   ){
            refDivT.current.className = refDivT.current.className  + " pt-3 pb-3";
          }
         
        }
  
      }
      
      fix()
      window.addEventListener('mouseup' , fix);
     
      return () =>{
        window.removeEventListener("mouseup" , fix)
      }
     
    },[hammerPosition,isbroken,isFixed])
  
  return (
    <>
      {!isbroken ?
        <div  className={props.style}  ref={refDivT} style={{height:40}} >   </div> :

        <div ref={refDiv} className="posiion-absolute pt-auto pb-auto w-auto">
          <span className={props.styleS +  "  first_btn rounded-end-0 ps-3 "} style={{height:40}}> </span>
          <span className='crumbsG'></span>
          <span className={props.styleS +  "  sec_btn rounded-start-0 pe-3 "} style={{height:40}}> </span>
        </div>
      }
        
        
         
      
     
      
     
    </>
  )
}

export default BreakableButtonHolder