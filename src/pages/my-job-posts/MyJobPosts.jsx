import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import PageLoader from "../loaders/PageLoader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function MyJobPosts() {
  const { user } = useAuth();
  const [myPost, setMyPost] = useState([]);
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    if (user) {
      try {
        axiosInstance.get(`/jobs?email=${user.email}`).then((res) => {
          setMyPost(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  if (!myPost.length) {
    return <PageLoader />;
  }
  return (
    <div>
      <div className="text-center my-8 text-3xl font-bold">
        <h2>My Job Post</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>*</th>
              <th>title</th>
              <th>company</th>
              <th>location</th>
              <th>Salary Range</th>
              <th>Applied</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myPost.map((post, i) => {
              const {
                _id,
                title,
                location,
                company,
                salaryRange: { min, max, currency },
                status,
                applicationCount,
              } = post;
              return (
                <tr key={_id}>
                  <th>{i + 1} </th>
                  <td>{title}</td>
                  <td>{company}</td>
                  <td>{location}</td>
                  <td>
                    {min} - {max} {currency?.toUpperCase() || "BDT"}{" "}
                  </td>
                  <td>{applicationCount || 0} </td>
                  <td>{status}</td>
                  <td>
                    <Link to={`view-applications/${_id}`}>
                      <button className="p-2 rounded-md bg-amber-300 font-semibold hover:bg-amber-200">
                        View Applications
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyJobPosts;
