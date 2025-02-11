import Link from "next/link";

export default function Navbar(){
    return(
        <div className="navbar">
            <h5>Logo</h5>
            <ul className="navGuys">
                <Link href='/home'>
                    <li className="nav-item">home</li>
                </Link>
                <Link href='/About'>
                    <li className="nav-item">About</li>
                </Link>
            </ul>
        </div>
    )
}





















































