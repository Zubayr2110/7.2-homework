import { useGlobalContext } from "../context";
import "./Login.css";

export default function Login() {
  const { user, setUser, handeSubmit, setPsw, psw } = useGlobalContext();

  return (
    <div className="container">
      <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={handeSubmit}>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              required
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}
