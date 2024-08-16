import { useRef } from "react";
import MoveableButton from "./MoveableButton";
import Answers from "../../Context/Answers.json" 
function RandomButtons(props) {

    // const refBtnsDiv = useRef(null)

    function randomPlace   () {
        const screenWidth = window.screen.width ;
        const screenHeight = window.screen.height;
        
    
        const placeX =  Math.floor(Math.random() * ((window.innerWidth - 100)  - 50 + 1) ) + 50;
       
        const placeY= Math.random(1 , 10000);
    
       
                              
    
        const colors = [
          "success" , "danger" , "info" , "primary" , "warning" , "secondary"
        ]
        
        return {x : placeX , y : placeY  };
    
    }




    return (
        <div ref={props.refBtnsDiv}>

                      
        {Answers.map((answer , index) =>{
          
            const r =  parseInt(Math.random()*2)
            const rD = parseInt(Math.random()*360)
            
        return(
          
          <MoveableButton key={answer.id} style={rD} text={answer.value}  pos={{x : randomPlace().x , y : Math.random(1 , 10000) * 550}} />
        );
        })}
      </div> 
     );
}

export default RandomButtons;