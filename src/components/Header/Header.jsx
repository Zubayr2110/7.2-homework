import "./Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/addproduct">Add Product</a>
      </nav>

      <footer>&copy; 2023 Reducer in React. All rights reserved.</footer>
    </div>
  );
}
