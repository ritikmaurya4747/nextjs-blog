import { API_BASE_URL } from "../config/constants";

export default function Page() {
  console.log(process.env.SERVER_PASSWORD);

  return (
    <div>
      {process.env.NODE_ENV == "development" ? (
        <h1>You are on development Mode</h1>
      ) : (
        <h1>You are on Production Mode</h1>
      )}
      <h1>Environment Variables in next js </h1>
      {API_BASE_URL}
    </div>
  );
}
