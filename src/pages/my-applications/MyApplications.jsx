import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    console.log(user?.email);
    if (user?.email) {
      axios
        .get(`http://localhost:5000/my-applications?email=${user?.email}`)
        .then((res) => {
          setApplications(res.data);
        });
    }
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <button className="btn w-14 btn-xs mb-3">Select</button>
                <label className="flex  flex-col gap-2">
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company Info</th>
              <th>Jobs</th>
              <th>Salary Range</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => {
              const {
                title,
                salaryRange: { min, max, currency },
                location,
                company_logo,
                company,
                _id,
              } = app;
              return (
                <tr key={_id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={company_logo} alt={title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{location}</div>
                      </div>
                    </div>
                  </td>
                  <td>{title}</td>
                  <td>
                    {" "}
                    {min}- {max}
                    &nbsp;{currency.toUpperCase()}
                  </td>
                  <th>
                    <button className="btn bg-red-400 hover:bg-red-500 text-white btn-xs">
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyApplications;
