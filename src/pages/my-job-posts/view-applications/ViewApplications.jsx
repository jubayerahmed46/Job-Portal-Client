import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

function ViewApplications() {
  const applications = useLoaderData();

  const statusHandler = (e, id) => {
    const body = { status: e.target.value };
    try {
      axios
        .patch(`http://localhost:5000/job/applicatons/application/${id}`, body)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-10">
      <div className="">
        <h2 className="text-3xl text-center my-5">All Application</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th colSpan={7}>Email</th>
                  <th>Github</th>
                  <th>LinkedIn</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, i) => {
                  const { _id, email, github, linkedin, status } = app;
                  return (
                    <tr className="bg-base-200" key={_id}>
                      <th>{i + 1} </th>
                      <td colSpan={7}>{email} </td>
                      <td>
                        <Link to={github}>
                          <img
                            src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
                            alt=""
                            className="h-9"
                          />
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <Link to={linkedin}>
                          <img
                            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                            alt=""
                            className="h-9"
                          />
                        </Link>
                      </td>
                      <td>
                        <label className="form-control ">
                          <select
                            className="select select-bordered"
                            defaultValue={status}
                            onChange={(e) => statusHandler(e, _id)}
                          >
                            <option disabled>Change Status</option>
                            <option value={"Under Review"}>Under Review</option>
                            <option value={"Set Interview"}>
                              Set Interview
                            </option>
                            <option value={"Hired"}>Hired</option>
                            <option value={"Rejected"}>Rejected</option>
                          </select>
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewApplications;
