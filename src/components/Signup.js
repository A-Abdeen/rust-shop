import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  // Because it's a hook, it has to be here within the component rather than in the actions
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name (optional)</label>
          <input
            name="firstName"
            type="text"
            value={user.firstName}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name (optional)</label>
          <input
            name="lastName"
            type="text"
            value={user.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </div>

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
          <label className="form-label">Email </label>
          <input
            name="email"
            type="text"
            value={user.email}
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
          Complete Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
