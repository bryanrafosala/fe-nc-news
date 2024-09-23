import { useState, useContext } from "react";
import { UserContext } from "../AccountPage/User";
import { getUserByUsername } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
// import './SignIn.css'; // Import your custom CSS file

function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const [signInUsername, setSignInUsername] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSignIn(event) {
    setSignInUsername(event.target.value);
  }

  function handleSubmitSignIn(event) {
    event.preventDefault();
    if (!signInUsername) {
      setError("Username cannot be blank! Try entering: cooljmessy");
    } else {
      getUserByUsername(signInUsername)
        .then((currUser) => {
          setUser([currUser]);
          setError(null);
          navigate("/");
        })
        .catch(() => {
          setError("This user does not exist. Please try again.");
        });
    }
  }

  return (
    <div className="form-container">
      <form className="sign-in-form">
        <h1 className="form-title">Sign In</h1>
        <label className="form-group">
          <div className="form-label">
            <span>Username</span>
          </div>
          <input
            onChange={handleSignIn}
            value={signInUsername}
            name="username"
            type="text"
            placeholder="Enter your username"
            className="input-field"
          />
        </label>
        <label className="form-group">
          <input
            onClick={handleSubmitSignIn}
            type="submit"
            value="Sign in"
            className="btn-submit"
          />
        </label>
      </form>
      {error ? (
        <div className="error-message">⚠️ {error}</div>
      ) : null}
    </div>
  );
}

export default SignIn;
