import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function MyJobPosts() {
  const { user } = useAuth();
  const [myPost, setMyPost] = useState([]);
  useEffect(() => {
    if (user?.email) {
      try {
        axios
          .get(`http://localhost:5000/jobs?email=${user.email}`)
          .then((res) => {
            setMyPost(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);
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
              <th>Deadline</th>
              <th>Applied</th>
              <th>Status</th>
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
                applicationDeadline,
              } = post;
              return (
                <tr key={_id}>
                  <th>{i} </th>
                  <td>{title}</td>
                  <td>{company}</td>
                  <td>{location}</td>
                  <td>
                    {min} - {max} {currency?.toUpperCase() || "BDT"}{" "}
                  </td>
                  <td>{applicationDeadline}</td>
                  <td>0</td>
                  <td>{status}</td>
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
