"use client";
import Image from "next/image";
import { useState } from "react";
// import styles from '@/page.red.css'  ye outside folder banake kr sakate hain
import styles from "../page.module.css";
import Profile from "../../../public/krishna.jpeg";
export default function Page() {
  const { red } = styles;
  const [style, setStyle] = useState({ backgroundColor: "green" });
  const [color, setColor] = useState("red");
  console.log(Profile);
  
  return (
    <>
      {/* <div>
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
        <h2 style={{ backgroundColor: color == "red" ? "red" : "green" }}>
          Heading 2
        </h2>
        <h3 id={styles.orange}>Heading 3</h3>
        <button onClick={() => setColor("green")}>Update Color Green</button>
        <h4 className={red}>Destructure CSS</h4>
        <h4 className={red}>Destructure CSS</h4>
        <h4 className={red}>Destructure CSS</h4>
        <h4 className={red}>Destructure CSS</h4>
      </div>
    </div> */}
      <div>
        <h1>Image Optimization i Next</h1>
        {/* <Image src={Profile} alt="Profile Logo" width={500} height={500} />
        <img src={Profile.src } alt="" /> */}
        <Image src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600" width={500} height={500}/>
      </div>
    </>
  );
}
