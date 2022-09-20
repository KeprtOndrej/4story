import {Link} from "react-router-dom";

export default function GlobalMenu(){

    return (
        <>
            <h1> Navigace </h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dobko">Conquest</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}