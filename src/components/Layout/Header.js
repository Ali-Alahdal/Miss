import { Link } from "react-router-dom";
import { useContext } from "react";
import Count from "../../Context/CountContext";
import Start from "../../Context/StartContext";

function Header() {
    const {count , setCount } = useContext(Count);
    const {start, setStart} = useContext(Start);
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
    return (<header className="w-75 m-auto rounded-5 ps-5 pe-5 d-flex align-items-center border  " style={{height:"10%",backgroundColor:"#c47d51",borderBottom:"#e3a57f"}}>
            <ul className="w-100 list-unstyled d-flex justify-content-between align-items-center mt-auto  ">
                <li className="">
              
                    <Link onClick={Back} to={"/"} className="text-decoration-none bg-warning text-white p-2 rounded-pill ps-5 pe-5 border-bottom border-warning-subtle border-3 " >
                    <i class="bi bi-arrow-left "></i> Back
                    </Link>
                </li>
                <li className="position-relative text-white">
                    <i class="bi bi-hammer  position-absolute  " style={{left:"22%",lineHeight:"1.7em"}}></i>
                    <Link onClick={Rest} to={"/"} className="text-decoration-none  text-white bg-primary text-white  p-2 rounded-pill ps-5 pe-5 border-bottom border-primary-subtle border-3 " >
                        Rest
                    </Link>
                </li>
                <li className="">
                    <Link onClick={surrender} to={"/"} className="text-decoration-none bg-danger text-white p-2 rounded-pill ps-5 pe-5  border-bottom border-danger-subtle border-3" >
                        <i className="bi bi-flag-fill"></i>  Surrender
                    </Link>
                </li>
                
            </ul>
    </header>  );
}

export default Header;