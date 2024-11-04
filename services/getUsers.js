export default async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = await response.json();
    return response; 
  }
  