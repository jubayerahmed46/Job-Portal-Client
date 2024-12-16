import React from "react";
import { motion } from "motion/react";

function Banner() {
  return (
    <div className="hero bg-blue-200 md:rounded-full rounded-b-full px-3 border-y-8 border-blue-300/85 shadow-inner min-h-screen">
      <div className="hero-content flex-col md:flex-row">
        <div className="flex-1 ">
          <h1 className="text-5xl font-bold">
            The Easiest Way to Get Your New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 50, 0], x: [0, 10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            src="./assets/banner1.png"
            className="w-64"
            alt=""
          />
          <motion.img
            animate={{ x: [100, 50, 100] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            src="./assets/banner2.png"
            className="w-64"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
