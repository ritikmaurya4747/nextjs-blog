import Link from "next/link";
import './about.css'
export default function ({children}) {
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <h4>About Page</h4>
                </li>
                <li>
                    <Link href="/about">About Main</Link>
                </li>
                <li>
                    <Link href="/about/aboutcollege">About Page for College</Link>
                </li>
                <li>
                    <Link href="/about/aboutstudent">About Page for Student</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}