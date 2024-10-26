'use client'
import Link from "next/link";
import styles from '../page.module.css';
import { useRouter } from "next/navigation"; 

const Login = () => {
  const router = useRouter();
  return (
    <div className={styles.main} >
      <h1>Login</h1>
      <Link href='/' className={styles.link}>Go to Home Page</Link>
      <button onClick={()=>router.push('/')} className={styles.btn2}>Navigate Home</button>
    </div>
  );
};

export default Login;