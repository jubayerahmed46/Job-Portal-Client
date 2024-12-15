import React, { useState } from "react";
import singupLottieData from "../../assets/signup-anim.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: singupLottieData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Signup() {
  const { singupUser } = useAuth();
  const [err, setErr] = useState("");
  const [conErr, setConErr] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
    setErr("");
    setConErr("");

    const form = e.target;

    const email = form.email.value;
    const displayName = form.name.value;
    const pass = form.pass.value;
    const conPass = form.conPass.value;

    console.log(displayName, email, pass, conPass);

    // password validation
    function validatePass() {
      const regex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%])(?=\S+$).{6,12}$/;

      return regex.test(pass.trim());
    }

    if (!validatePass()) {
      setErr(
        "The password must be include 6-12 char, at least one uppercase and lowecase latter, a special char (e.g,.@) a disit!"
      );
      return;
    }

    if (pass !== conPass) {
      setConErr("Password not matched!");
    }

    singupUser(email, pass)
      .then((user) => {
        return updateProfile(user.user, { displayName });
      })
      .then(() => {});
  };
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" md:h-64 md:w-[440px] w-auto h-52 ">
          <Lottie options={defaultOptions} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md border">
          <form className="card-body" onSubmit={signupHandler}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="pass"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-sm text-error mt-1">{err}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="conPass"
                required
              />
            </div>
            <p className="text-sm text-error mt-1">{conErr}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <div className="mt-2">
              <p>
                Create a new account{" "}
                <span className="hover:underline text-blue-600">
                  <Link to={"/auth/login"}>Signup</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
