import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";

function Details() {
  const jobData = useLoaderData();
  console.log(jobData);

  const {
    title,
    _id,
    location,
    salaryRange: { min, max },
    description,
    requirements,
    company_logo,
    company,
  } = jobData;
  return (
    <div className="mt-20 mb-10">
      <div className="flex justify-center items-center flex-col  mb-8 ">
        <h2 className="font-bold text-3xl">{title} </h2>
        <p className="">{description} </p>
      </div>
      <div
        className="p-5 max-w-4xl flex flex-col items-center mx-auto
     border shadow-md  rounded-md py-16"
      >
        <div className="flex gap-2 mb-3">
          <img src={company_logo} alt="" className="h-14 aspect-square" />
          <div>
            <h2 className="text-lg font-bold">{company}</h2>
            <p>{location}</p>
          </div>
        </div>
        <p className="mb-2">Requrements</p>
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
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-secondary"
          >
            Apply
          </button>
        </div>
      </div>
      <ApplicationForm jobId={_id} />
    </div>
  );
}

export default Details;
