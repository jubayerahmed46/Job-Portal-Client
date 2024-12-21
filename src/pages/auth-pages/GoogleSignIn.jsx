import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function GoogleSignIn() {
  const { singinWithGoogle } = useAuth();
  const navigate = useNavigate();

  const googleSignHandler = () => {
    singinWithGoogle().then(() => {
      navigate("/");
    });
  };
  return (
    <div className="flex justify-center items-center mt-3 flex-col">
      <button
        className="py-2 px-4 rounded-md bg-purple-500 text-white border font-bold"
        onClick={googleSignHandler}
      >
        SignIn with <span className="font-extrabold">Google</span>
      </button>

      <p className="font-extrabold"> OR</p>
    </div>
  );
}

export default GoogleSignIn;
