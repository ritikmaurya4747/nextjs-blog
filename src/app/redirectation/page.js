import { redirect } from "next/navigation"
export default function Page(){
    redirect('/')
    return (
        <div>
            <h1>Redirect in Next js</h1>
            
        </div>
    )
}