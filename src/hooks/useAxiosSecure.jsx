import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-blond.vercel.app",
  withCredentials: true,
});

function useAxiosSecure() {
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        // make some login on the err
        console.log(err);
        return Promise.reject(err);
      }
    );

    axiosInstance.interceptors.response.use(
      (response) => {
        console.log(response);
        return response;
      },
      (err) => {
        console.log(err);
        navigate("/");

        // use some logic or navigate user to the login/home page
        return Promise.reject(err);
      }
    );
  }, []);

  return axiosInstance;
}

export default useAxiosSecure;
