import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLoader from "../../loaders/PageLoader";

function RunningJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        "https://job-portal-server-blond.vercel.app/jobs"
      );
      setJobs(res.data);
    })();
  }, []);

  if (!jobs.length) {
    return <PageLoader />;
  }

  return (
    <div className="mt-20 mb-10">
      <div className="flex justify-center items-center flex-col  mb-8 ">
        <h2 className="font-bold text-3xl">Jobs of the day</h2>
        <p className="">Search and connect with the right candidates faster</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5">
        {jobs.map((job) => {
          const {
            title,
            _id,
            location,
            salaryRange: { min, max },
            description,
            requirements,
            company_logo,
          } = job;
          return (
            <div
              key={job._id}
              className="p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200
         border shadow-md  rounded-md"
            >
              <div className="flex gap-2 mb-3">
                <img src={company_logo} alt="" className="h-14 aspect-square" />
                <div>
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p>{location}</p>
                </div>
              </div>
              <p className="mb-3">{description.slice(0, 50)}...</p>

              <div className="flex flex-wrap gap-2">
                {requirements.map((req, i) => (
                  <button
                    key={i}
                    className="mb-3 font-semibold py-1 px-2 rounded-md bg-slate-200 text-xs"
                  >
                    {req}
                  </button>
                ))}
              </div>
              <p className="my-2">
                SalaryRange &nbsp;&nbsp; (
                <span>
                  {min} - {max}
                </span>{" "}
                )
              </p>
              <div className="flex justify-between items-center">
                <Link to={`job/details/${_id}`}>
                  <button className="btn btn-secondary">Apply Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RunningJobs;
