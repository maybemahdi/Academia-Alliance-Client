import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  //   const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleAssignmentSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = assignment.assignment_title;
    const submittedLink = form.link.value;
    const note = form.note.value;
    const status = "Pending";
    const examineeEmail = user?.email;
    const marks = assignment.marks;
    const examineeName = user?.displayName;
    if (!submittedLink) {
      return toast.error("You Must Provide Assignment Link");
    }
    if (!note) {
      return toast.error("You Must Provide A Note");
    }
    const data = {
      assignment_title,
      marks,
      submittedLink,
      note,
      status,
      examineeEmail,
      examineeName,
    };
    // console.log(data);
    axios
      .post(`${import.meta.env.VITE_API_URL}/submit-assignment`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          navigate(-1);
          Swal.fire({
            title: "Good job!",
            text: "You just Submitted an Assignment!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="my-10">
      <h2 className="text-base-content font-bold text-3xl text-center">
        Take A Challenge
      </h2>
      <div className="flex items-center justify-center mt-5">
        <div className="rounded md:w-[50%] mx-auto hover:shadow-lg transition-all duration-500 shadow p-4">
          <div className="flex flex-col mb-6 gap-1">
            <img
              className="h-[350px] w-full rounded"
              src={assignment.thumbnail}
              alt=""
            />
            <h3 className="mt-4 text-xl font-semibold">
              Title: {assignment.assignment_title}
            </h3>
            <h3 className="mt-4 text-lg font-semibold">
              Description: {assignment.description}
            </h3>
            <p className="text-lg font-semibold">
              Full Marks: {assignment.marks}
            </p>
            <p className="text-lg font-semibold">
              Difficulty Level: {assignment.difficulty}
            </p>
            <p className="text-lg font-semibold">
              Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn btn-outline hover:bg-[#CA8787] hover:border-[#CA8787] btn-block"
            >
              Take Assignment
            </button>
          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold mb-4 text-xl">
                Submit Your Assignment Here!
              </h3>
              <form onSubmit={handleAssignmentSubmission}>
                <p className="font-semibold text-base mb-3">Submission Link</p>
                <input
                  name="link"
                  type="text"
                  required
                  placeholder="PDF/DOC Link"
                  className="input input-bordered w-full"
                />
                <p className="font-semibold text-base mt-4 my-3">
                  Write Your Note
                </p>
                <textarea
                  placeholder="Quick Note"
                  name="note"
                  className="textarea textarea-bordered textarea-sm w-full"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline mt-4 hover:bg-[#CA8787] hover:border-[#CA8787] btn-block"
                >
                  Submit Assignment
                </button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
