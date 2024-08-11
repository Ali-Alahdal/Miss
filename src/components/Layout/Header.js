import { Link } from "react-router-dom";


function Header() {
    return (<header className="w-75 m-auto rounded-5 ps-5 pe-5 d-flex align-items-center border  " style={{height:"10%",backgroundColor:"#c47d51",borderBottom:"#e3a57f"}}>
            <ul className="w-100 list-unstyled d-flex justify-content-between align-items-center mt-auto  ">
                <li className="">
                    <Link to={"/"} className="text-decoration-none bg-warning text-white p-2 rounded-pill ps-5 pe-5 border-bottom border-warning-subtle border-3 " >Back</Link>
                </li>
                <li className="">
                    <Link to={"/"} className="text-decoration-none bg-primary text-white p-2 rounded-pill ps-5 pe-5 border-bottom border-primary-subtle border-3 " >Rest</Link>
                </li>
                <li className="">
                    <Link to={"/"} className="text-decoration-none bg-danger text-white p-2 rounded-pill ps-5 pe-5  border-bottom border-danger-subtle border-3" >Surrender</Link>
                </li>
                <li className="">
                    <Link to={"/"} className="text-decoration-none bg-success text-white p-2 rounded-pill ps-5 pe-5 border-bottom border-success-subtle border-3" >Next</Link>
                </li>
            </ul>
    </header>  );
}

export default Header;