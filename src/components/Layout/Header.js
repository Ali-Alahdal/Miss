import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import Count from "../../Context/CountContext";
import Start from "../../Context/StartContext";
import Hammer  from "../ButtonComponents/Hammer";
function Header() {
    const {count , setCount } = useContext(Count);
    const {start, setStart} = useContext(Start);
    const resRef = useRef(null);
    const [hammerPosition , setHammerPosition] = useState();
    function Back()
    {
       const currentCount = parseInt(localStorage.getItem("count"));
       if(currentCount > 0)
       {
            setCount(prev => prev - 1)
            localStorage.setItem("count" , parseInt(currentCount) - 1);
       }
     
    }
    function Rest()
    {
        setCount(0)
        localStorage.setItem("count" , parseInt(0) );
    }

    function surrender(){
        localStorage.setItem("start", "false")
        setStart(false)
        setCount(0)
    }

    useEffect(()=>{
        function pos()
        {
           
            
            if(resRef)
            {
                const hor = resRef.current.offsetLeft + 20 ;
                const ver = resRef.current.offsetTop + 8 ;
                console.log(resRef);
                
                setHammerPosition({x : hor  , y : ver })
                
            }
        }
      

        window.addEventListener("resize" , pos)
        pos();

       
    },[resRef,window])
    
    return (<header className="w-75  rounded-5  d-flex align-items-center border position-absolute start-50  translate-middle z-3  " style={{backgroundColor:"#c47d51",borderBottom:"#e3a57f",top:"12%"}}>
            <ul className="w-100 list-unstyled d-flex justify-content-around align-items-center m-2  ">
                <li className="">
              
                    <Link onClick={Back} to={"/"} className="hover_btn text-decoration-none bg-warning text-white btn border-0 ps-3 pe-3 rounded-pill  border-bottom border-warning-subtle border-3  " >
                    <i class="bi bi-arrow-left "></i> Back
                    </Link>
                </li>
                <li className=" z-3 text-white">
                    
                    {hammerPosition ? <Hammer pos={{x : hammerPosition.x , y :  hammerPosition.y}} /> : null}
                   
                    <Link  ref={resRef} onClick={Rest} to={"/"} className="hover_btn text-decoration-none  text-white bg-primary text-white  btn border-0 ps-3 pe-3 rounded-pill border-bottom border-primary-subtle border-3 " >
                        Rest
                    </Link>
                </li>
                <li className="">
                    <Link onClick={surrender} to={"/"} className="hover_btn text-decoration-none bg-danger text-white btn border-0 ps-3 pe-3 rounded-pill border-bottom border-danger-subtle border-3" >
                        <i className="bi bi-flag-fill"></i>  Surrender
                    </Link>
                </li>
                
            </ul>
    </header>  );
}

export default Header;