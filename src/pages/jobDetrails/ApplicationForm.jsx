import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

function ApplicationForm({ jobId }) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const applicationHandler = (applicationData) => {
    applicationData.job_id = jobId;
    applicationData.email = user.email;

    (async function () {
      try {
        const res = await axios.post(
          "http://localhost:5000/applications",
          applicationData
        );
        console.log(res.data);
        if (res.data.acknowledged) {
          reset();
          toast.success("Submission Successfull");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-xl font-bold text-center my-2">
            Fillup the Profile URLs
          </h2>
          <div className="card bg-base-100 w-full shrink-0 shadow-sm border">
            <form
              className="card-body"
              onSubmit={handleSubmit(applicationHandler)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn </span>
                </label>
                <input
                  type="url"
                  placeholder="linkedin url"
                  className="input input-bordered"
                  {...register("linkedin")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github </span>
                </label>
                <input
                  type="url"
                  placeholder="github url"
                  {...register("github")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ApplicationForm;
