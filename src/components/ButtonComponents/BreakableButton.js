import React, { useState } from 'react'

function BreakableButton() {

  const [firstHalf, setFirstHalf] = useState('');
  const [secHalf, setSecHalf] = useState('');

  const splitString = (inputValue) => {
    const midpoint = Math.floor(inputValue.target.name.length / 2);
    setFirstHalf(inputValue.target.name.slice(0, midpoint));
    setSecHalf(inputValue.target.name.slice(midpoint));
    inputValue.target.style = "display: none";
  };
  
  
  return (
    <>
      <button className='btn btn-light' name={"btnBreak"} onClick={splitString}>btnBreak</button>
      <span className='first_btn btn ' style={firstHalf ? {display: 'block'}: {display: 'none'}}>{firstHalf}</span>
      <span className='sec_btn btn ' style={secHalf ? {display: 'block'}: {display: 'none'}}>{secHalf}</span>
    </>
  )
}

export default BreakableButton