import Link from "next/link";
import style from '../../page.module.css'
export default function AboutNotFound () {
    return (
        <div className={style.main}>
            <h1>About Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/" className={style.link}>Go Back Home</Link>
        </div>
    )
}