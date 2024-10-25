'use client'
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
  const [name, setName] = useState("Ritik")
  const apple = () => {
    setName("Pradeep")
  }
  const InnerCompo= () => {
    return (
      <h1>Innner componenet</h1>
    )
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Events, function and state {name}</h1>
        <button onClick={()=>apple("Fruit")}>Click me</button>
        <InnerCompo />
        {InnerCompo()}
      </main>
    </div>
  );
}
