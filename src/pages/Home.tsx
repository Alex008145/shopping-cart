import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to our store. You can find products in{" "}
        <Link to="/store">Store</Link> and add it to your cart. Have a nice day!
      </p>
    </div>
  );
}
