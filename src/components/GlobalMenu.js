import {Link} from "react-router-dom";

export default function GlobalMenu(){

    return (
    <>
        <h1> Navigace </h1>
        <nav>
            <ul>
                <li><Link to={`${process.env.REACT_APP_ROOT_URL}/`}>Home</Link></li>
                <li><Link to={`${process.env.REACT_APP_ROOT_URL}/dobko`}>Conquest</Link></li>
                <li><Link to={`${process.env.REACT_APP_ROOT_URL}/login`}>Login</Link></li>
                <li>{process.env.REACT_APP_ROOT_URL}</li>
            </ul>
        </nav>
    </>
)
}