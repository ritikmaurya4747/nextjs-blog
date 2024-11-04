import Link from "next/link";
import getUsers from "../../../services/getUsers"
export default async function Page(){
    const getUsersList =  getUsers();
    const users = await getUsersList
    // console.log(users);
    return (
        <div>
            <h1>Users List </h1>
            {
                users.map((user)=>(
                    <h2 key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h2>

                ))
            }
        </div>
    )
}