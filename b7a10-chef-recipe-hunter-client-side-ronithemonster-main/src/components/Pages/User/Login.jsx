import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, googlePopUp, gitPopUp } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState();
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/home'


  //  pop up
  const handlePopUp = () => {
    googlePopUp(provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitPopUp = () => {
    const provider = new GithubAuthProvider();
    gitPopUp(provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!password || password.length < 6 || !email) {
      setError("please enter valid email and password");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from,{replace:true})
        form.reset()
      })
      .catch((error) => {
        console.log(error.message);
      });

    // popup
  };

  return (
    <div className="container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-block mb-3 mt-3"
                  >
                    Login
                  </Button>

                  <p className="text-danger">
                    <small>{error}</small>
                  </p>

                  <p>
                    <small>
                      New here? Click here{" "}
                      <Link to={"/register"}> to register</Link>{" "}
                    </small>
                  </p>
                  <hr />
                </form>
                <div>
                  <Button
                    onClick={handlePopUp}
                    className="mb-2"
                    variant="outline-danger"
                    size="sm"
                  >
                    {" "}
                    <FaGoogle /> Login with Google
                  </Button>{" "}
                  <br />
                  <Button
                    onClick={handleGitPopUp}
                    size="sm"
                    variant="outline-warning"
                  >
                    {" "}
                    <FaGithub /> Login with Github
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
