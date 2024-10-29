"use client";

import { useState } from "react";
import styles from "../page.module.css";
// import styles from '@/page.red.css'  ye outside folder banake kr sakate hain
export default function Page() {
    const {red} = styles
  const [style, setStyle] = useState({ backgroundColor: "green" });
  const [color, setColor] = useState("red");
  return (
    <div>
      <h4>This is red Text</h4>
      <h3 style={{ backgroundColor: "blue" }}>This is red Text</h3>
      <h2 style={style}>Heading 3 for user</h2>
      <h2 className={styles.red}>This is mudular css</h2>
      <button onClick={() => setStyle({ backgroundColor: "yellow" })}>
        Update Style
      </button>
      <div>
        <h1 className={color === "red" ? styles.red : styles.green}>
          Condition with style
        </h1>
        <h2 style={{backgroundColor:color=='red'?'red':'green'}}>Heading 2</h2>
        <h3 id={styles.orange}>Heading 3</h3>
        <button onClick={() => setColor("green")}>Update Color Green</button>
        <h4 className={red}>Destructure CSS</h4>
        <h4 className={red}>Destructure CSS</h4>
        <h4 className={red}>Destructure CSS</h4>
        <h4 className={red}>Destructure CSS</h4>
      </div>
    </div>
  );
}
