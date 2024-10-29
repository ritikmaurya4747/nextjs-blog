'use client'

import { useState } from "react"

export default function Page(){
    const [style,setStyle]= useState({backgroundColor:"green"})
    return (
        <div>
            <h4>This is red Text</h4>
            <h3 style={{backgroundColor:"blue"}}>This is red Text</h3>
            <h2 style={style}>Heading 3 for user</h2>
            <button onClick={()=> setStyle({backgroundColor:"yellow"})}>Update Style</button>
        </div>
    )
}