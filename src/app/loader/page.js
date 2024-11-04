async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
export default async function LoaderPage() {
  let user = await userList();
//   console.log(user);

  return (
    <div>
      <h1>User Name List </h1>
      {user.map((item) => (
        <div>
            <h2>User Name: {item.firstName}</h2>
        </div>
      ))}
    </div>
  );
}
