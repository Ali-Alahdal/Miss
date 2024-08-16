import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react';
import HammerPosition from '../../Context/HammerPositionContext';
function BreakableButton(props) {

  const [isbroken , setIsBorken] = useState(false);
  const [firstHalf, setFirstHalf] = useState('');
  const [secHalf, setSecHalf] = useState('');
  const [isFixed , setIsFixed] = useState(false);
  const {hammerPosition } = useContext(HammerPosition)
  const refDivT = useRef(null);
  const refDiv = useRef(null);
  const splitString = (inputValue) => {
    const midpoint = Math.floor(inputValue.target.value.length / 2);
    setFirstHalf(inputValue.target.value.slice(0, midpoint));
    setSecHalf(inputValue.target.value.slice(midpoint));
    inputValue.target.style = "display: none";
    setIsBorken(true);
    setIsFixed(false)
  };
  



  useEffect(() => {
    function fix()
    {
      if(refDivT && isbroken && !isFixed){
        const disX =  hammerPosition.x-  refDiv.current.offsetLeft ;
        const disY = hammerPosition.y - refDiv.current.offsetTop ;
     
        
        console.log(disX , disY);
        if(disX > -20 && disX < 595 && disY  > 65 && disY < 130)
        {
         
         
          setIsBorken(false);
          setIsFixed(true)
          
         
          refDiv.current.style = "display: none ";
        }
      }
      if(!isbroken && isFixed){
    
        console.log(" b : " + isbroken , "f : "  + isFixed  );
        refDivT.current.className = "hover_btn d-block border-0 text-white fs-4 me-4  bg-warning rounded-pill btn border-0 text-light  ps-5 pe-5 border-bottom border-warning-subtle border-3";
        if(!refDivT.current.className.includes("pt-3 pb-3")   ){
          // refDivT.current.className = refDivT.current.className  + " pt- pb-3";
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
        <input  ref={refDivT} type='button' value={ props.text} onClick={splitString} className={props.style}/> :

        <div ref={refDiv} className=' d-flex ms-2 me-0'>
          <span className={props.styleS +  "  first_btn rounded-end-0 ps-5 "} style={firstHalf ? {display: 'block'}: {display: 'none'}}>{firstHalf}</span>
          <span className='crumbs'></span>
          <span className={props.styleS +  "  sec_btn rounded-start-0 pe-5 "} style={secHalf ? {display: 'block'}: {display: 'none'}}>{secHalf}</span>
        </div>
      }
        
        
         
      
     
      
     
    </>
  )
}

export default BreakableButton