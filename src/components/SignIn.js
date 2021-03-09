import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  // Because it's a hook, it has to be here within the component rather than in the actions
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(user, history));
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            value={user.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password </label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
