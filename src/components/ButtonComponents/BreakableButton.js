import React, { useState } from 'react'

function BreakableButton(props) {

  const [isbroken , setIsBorken] = useState(false);
  const [firstHalf, setFirstHalf] = useState('');
  const [secHalf, setSecHalf] = useState('');

  const splitString = (inputValue) => {
    const midpoint = Math.floor(inputValue.target.value.length / 2);
    setFirstHalf(inputValue.target.value.slice(0, midpoint));
    setSecHalf(inputValue.target.value.slice(midpoint));
    inputValue.target.style = "display: none";
    setIsBorken(true);
  };
  
  
  return (
    <>
      {!isbroken ?
        <input  type='button' value={ props.text} onClick={splitString} className={props.style}/> :

        <div className='mt-5 d-flex ms-5 me-5'>
          <span className={props.styleS +  "  first_btn rounded-end-0 ps-5 "} style={firstHalf ? {display: 'block'}: {display: 'none'}}>{firstHalf}</span>
          <span className={props.styleS +  "  sec_btn rounded-start-0 pe-5 "} style={secHalf ? {display: 'block'}: {display: 'none'}}>{secHalf}</span>
        </div>
      }
        
        
         
      
     
      
     
    </>
  )
}

export default BreakableButton