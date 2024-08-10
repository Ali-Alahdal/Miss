import { Link } from "react-router-dom";
import MoveableButton from "../bars/MoveableButton";
import Question from "./Question";
function Main() {
    return ( <>
        <div className="w-100">
            <MoveableButton />
            <Question/>
        </div>
       
    </> );
}

export default Main;