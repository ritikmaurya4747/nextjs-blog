'use client'
export default function Lecture({params}) {
    return (
         <div>
            <h1>Lectures</h1>
            <h2>Day of college {params.lecture[0]}</h2>
            <h2>Lecture No.  {params.lecture[1]}</h2>
         </div>
    )
}