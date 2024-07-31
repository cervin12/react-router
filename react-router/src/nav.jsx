
import { Link } from "react-router-dom"

export default function nav(){
    return(
        <nav>
            <ul>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/user' >User</Link>
            </ul>
        </nav>
    )
}