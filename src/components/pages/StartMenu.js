import BreakableButton from "../ButtonComponents/BreakableButton";

function StartMenu() {
    return ( 
        <>
            <div className="w-100 text-center ">

                <h1 className="mb-5 text-white">Game Name</h1>

                <div className="d-flex m-auto">
                    <ul className="list-unstyled d-flex m-auto text-white fs-5 ">

                        <li  className="">
                            <BreakableButton text={"Hint"} style={"border-0 text-white me-5 ms-5 mt-5 bg-warning rounded-pill ps-5 pe-5 p-2 border-bottom border-warning-subtle border-3"}
                            styleS={"border-0    bg-warning rounded-pill  p-2 border-bottom border-warning-subtle border-3"}
                            
                            />
                        </li>

                        <li className="me-5 ms-5 mt-5 bg-success rounded-pill  ps-5 pe-5 p-2 border-bottom border-success-subtle border-3" >

                             Start 
                                                    
                         </li>
                      
                    </ul>
                </div>
                
            </div>
        </>
     );
}

export default StartMenu;