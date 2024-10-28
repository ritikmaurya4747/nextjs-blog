"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <h1 className="heading">About Page</h1>
      {/* <Link href="/" className={styles.link}>
        Go to Home Page
      </Link> */}
      <button onClick={() => router.push("/")} className={styles.btn2}>
        Navigate Home
      </button>
      <Link href="/about/aboutcollege" className={styles.link}>
        {" "}
        Go to About college page
      </Link>
      <Link href="/about/aboutstudent" className={styles.btn2}>
        {" "}
        Go to About student page
      </Link>
    </div>
  );
};

export default About;
