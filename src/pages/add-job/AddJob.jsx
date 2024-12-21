import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const {
  title,
  location,
  salaryRange: { min, max },
  description,
  company,
  requirements,
  responsibilities,
  company_logo,
} = {
  title: "Software Engineer",
  location: "Halishohor, Chittagong",
  category: "Engineering",
  salaryRange: {
    min: 40000,
    max: 60000,
  },
  description:
    "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
  company: "Favorite IT",
  requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
  responsibilities: ["maintain software", "Collaborate", "Participate"],
  status: "active",
  hr_email: "jubayerdesigner46@gmail.com",
  hr_name: "Jubayer Ahmed",
  company_logo: "https://i.ibb.co/mXD5MNf/facebook.png",
};

function AddJob() {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...jobProps } = data;
    jobProps.salaryRange = {
      max,
      min,
      currency,
    };

    jobProps.requirements = jobProps.requirements.split(",");
    jobProps.responsibilities = jobProps.responsibilities.split(",");
    const jobDeadline = new Date(jobProps.applicationDeadline);
    const currDate = new Date();

    jobProps.status = jobDeadline > currDate ? "active" : "unActive";

    (async function () {
      try {
        const res = await axios.post(
          "https://job-portal-server-blond.vercel.app/jobs",
          jobProps
        );
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Job Added Successfully");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-7">Post a new Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            defaultValue={title}
            required
          />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            defaultValue={location}
            className="input input-bordered"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          {/* job Type */}
          <div className="form-control ">
            <label className="label ">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="jobType"
              defaultValue="Pick a Job type"
              className="select select-ghost w-full shadow-sm ring-1 ring-gray-300"
            >
              <option disabled>Pick a Job type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job Type */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              defaultValue="Pick a Job Field"
              className="select select-ghost w-full  shadow-sm ring-1 ring-gray-300"
              name="category"
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>
        {/* salary range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              defaultValue={min}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max "
              className="input input-bordered"
              defaultValue={max}
              required
            />
          </div>
          <div className="form-control">
            <select
              defaultValue="Currency"
              name="currency"
              className="select select-ghost w-full max-w-xs shadow-sm ring-1 ring-gray-300"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            defaultValue={description}
            required
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            defaultValue={company}
            className="input input-bordered"
            required
          />
        </div>
        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="put each requirements in a new line"
            name="requirements"
            defaultValue={requirements}
            required
          ></textarea>
        </div>
        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each responsibility in a new line"
            name="responsibilities"
            defaultValue={responsibilities}
            required
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              defaultValue={user?.displayName}
              readOnly
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          {/* application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="company_logo"
              defaultValue={company_logo}
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
