'use client'
import Script from "next/script";

export default function Location(){
    return (
        <div>
        <Script src="/location.js" onLoad={()=>{
            console.log('file loaded');
        }}/>
            <h1>Get user GEO location</h1>
        </div>
    )
}