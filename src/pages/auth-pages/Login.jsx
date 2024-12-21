import loginLottieData from "../../assets/login-anim.json";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleSignIn from "./GoogleSignIn";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loginLottieData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Login() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const pass = form.pass.value.trim();

    loginUser(email, pass).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:h-64 h-52">
          <Lottie options={defaultOptions} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md border">
          <h2 className="text-center text-3xl font-bold ">Login </h2>
          <GoogleSignIn />
          <form className="card-body -mt-9" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="pass"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="mt-2">
              <p>
                Create a new account{" "}
                <span className="text-blue-600 hover:underline">
                  <Link to={"/auth/signup"}>Signup</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
