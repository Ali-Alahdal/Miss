import BreakableButton from "../ButtonComponents/BreakableButton";
import Count from "../../Context/CountContext";
import Start from "../../Context/StartContext";
import { useContext } from "react";

function StartMenu() {

    const {count, setCount} = useContext(Count);
    const {start, setStart} = useContext(Start);

    function handleStart(){
        setCount(count + 1)
        localStorage.setItem("start", "true")
        setStart(true)
    }
    return ( 
        <>
            <div className="w-100 text-center ">

                <h1 className="mb-5 text-white">Game Name</h1>

                <div className="d-flex justify-content-center align-items-center ">
                    <ul className="list-unstyled d-flex mb-0 text-white  ">

                        <li  className="">
                            <BreakableButton text={"Hint"} style={"hover_btn border-0 text-white fs-4 me-4  bg-warning rounded-pill btn border-0 text-light  ps-5 pe-5 border-bottom border-warning-subtle border-3"}
                            styleS={"border-0 bg-warning rounded-pill fs-4 border-bottom border-warning-subtle border-3 p-1"}
                            
                            />
                        </li>

                        <li onClick={handleStart} style={{cursor: "pointer"}} className="hover_btn ms-5 fs-4 bg-success rounded-pill btn border-0 text-light  ps-5 pe-5 border-bottom border-success-subtle border-3" >

                             Start              
                         </li>
                      
                    </ul>
                </div>
                
            </div>
        </>
     );
}

export default StartMenu;