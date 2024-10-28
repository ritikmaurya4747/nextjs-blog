'use client';
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("Ritik");

  const apple = () => {
    setName("Pradeep");
  };

  const InnerCompo = () => {
    return <h1>Inner component</h1>;
  };
  const navigate = (name) => {
    router.push(name)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          Events, function, and state{" "}
          <span className={styles.text}>{name}</span>
        </h1>
        <button className={styles.btn} onClick={apple}>
          Click me
        </button>
        <InnerCompo />
        <div className={styles.div_btn}>
          <Link href="/login" className={styles.link}>
            Go to Login Page
          </Link>
          <Link href="/about" className={styles.link}>
            Go to About Page
          </Link>
          <Link href="/productlist" className={styles.link}>
            Fetch Products
          </Link>
        </div>
        <div className={styles.div_btn}>
        <button onClick={() => navigate("/login") } className={styles.btn2}>Navigate to Login page</button>
        <button onClick={() => navigate("/about") } className={styles.btn2}>Navigate to About page</button>
        </div>
      </main>
    </div>
  );
}
 