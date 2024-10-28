import Link from 'next/link'
import styles from '../page.module.css'
export default function StudentList () {
    return (
        <div className={styles.main}>
            <h1>Student List</h1>
            <ul>
                <li><Link href="/studentlist/lavkush">Lavkush</Link></li>
                <li><Link href="/studentlist/sakaria">Sakaria</Link></li>
                <li><Link href="/studentlist/pratik">Pratik</Link></li>
                <li><Link href="/studentlist/sumit">Sumit</Link></li>
                <li><Link href="/studentlist/pradeep">Pradeep</Link></li>
            </ul>
        </div>
    )
}