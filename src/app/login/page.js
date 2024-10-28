'use client'
import Link from "next/link";
import styles from '../page.module.css';
import { useRouter } from "next/navigation"; 

const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    // router.push(page);  ye bhi sahi hain h
    router.push('/login/' + page)
  }
  return (
    <div className={styles.main} >
      <h1>Login</h1>
      <Link href='/' className={styles.link}>Go to Home Page</Link>
      <button onClick={()=>navigate('loginstudent')} className={styles.btn2}>Go to Student Login Page</button>
      <button onClick={()=>navigate('loginteacher')} className={styles.btn2}>Go to Teacher Login Page</button>
    </div>
  );
};

export default Login;