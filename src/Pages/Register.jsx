import useAuth from "../Hooks/useAuth";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import Loader from "../Components/Loader";
import signUp from "../assets/signUp.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

const Register = () => {
  const { createUser, loading, setUpdate, googleLogin, update, setLoading } =
    useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case "Firebase: Error (auth/email-already-in-use).":
        return toast.error(
          "The Email You provided is already registered in our Database."
        );
      default:
        return toast.error("An error occurred. Please try again later.");
    }
  };

  //   if (user) return navigate("/");
  if (loading) return <Loader />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (password.length < 6) {
      return toast.error("Password must be 6 characters or longer");
    }

    // if (!passwordRegex.test(password)) {
    //   return toast.error(
    //     "Password must contain at least one uppercase and one lowercase letter"
    //   );
    // }

    if (!name) {
      return toast.error("You Must Provide your Name");
    }
    if (!photo) {
      return toast.error("You Must Provide a Photo URL");
    }
    if (!password) {
      return toast.error("You Must Provide a Password");
    }
    if (!email) {
      return toast.error("You Must Provide a Email");
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        // const user = res.user; // Get the user object from the response
        form.reset();
        toast.success("Account created successfully");
        navigate("/");

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUpdate(!update);
            toast.success("Profile Updated");
            // window.location.reload();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage = handleFirebaseError(err.message);
        console.log(err.message);
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.name.value = "";
        e.target.photoURL.value = "";
        toast.error(errorMessage);
      });
  };
  const loginWithGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        toast.success("Logged in successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div data-aos="zoom-in-right" className="flex my-10 justify-center items-center">
      <div className="flex gap-12 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <FaUserAlt className="w-12 text-[#CA8787] h-12" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>

          <div
            onClick={loginWithGoogle}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or Registration with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                placeholder="Your Full Name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                placeholder="Your Photo URL"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                placeholder="Your Email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4 relative">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                placeholder="Your Password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type={open ? "text" : "password"}
              />
              <span
                className="absolute bottom-3 right-4 cursor-pointer text-xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CA8787] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${signUp})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
