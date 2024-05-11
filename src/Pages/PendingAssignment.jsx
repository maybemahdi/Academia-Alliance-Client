import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Components/Loader";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const PendingAssignment = () => {
  const queryStatus = "Pending";
  const navigate = useNavigate();
  const [dynamicModalData, setDynamicModalData] = useState([]);
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["pendingAssignments"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/pending-assignments?status=${queryStatus}`,
        { withCredentials: true }
      );
      return data;
    },
  });
  if (isLoading) return <Loader />;
  const handleDynamicData = (d) => {
    setDynamicModalData(d);
  };
  const handleMarkSubmission = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMarks = form.marks.value;
    const feedback = form.feedback.value;
    const status = "Completed";
    const data = { obtainedMarks, feedback, status };
    // console.log(data)
    axios
      .put(`${import.meta.env.VITE_API_URL}/update-marks/${id}`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          form.reset();
          refetch();
          navigate(-1);
          Swal.fire({
            title: "Good job!",
            text: "Assignment Marks Has been Updated!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="my-20 min-h-[calc(100vh-600px)]">
      <ScrollRestoration/>
      <h2 className="text-base-content font-bold my-20 text-2xl md:text-3xl text-center">
        All Pending Assignments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {data.map((d) => (
          <div
            key={d._id}
            className="rounded cursor-pointer hover:scale-105 transition-all duration-500  shadow-xl p-4"
          >
            <div className="flex flex-col mb-6 gap-1">
              <h3 className="mt-4 text-xl font-semibold">
                Title: {d.assignment_title}
              </h3>
              <p className="text-lg font-semibold">Full Marks: {d.marks}</p>
              <p className="text-lg font-semibold">
                Examinee Name: {d.examineeName}
              </p>
              <button
                onClick={() => {
                  handleDynamicData(d);
                  document.getElementById("my_modal_2").showModal();
                }}
                className="btn btn-outline mt-5 hover:bg-[#CA8787] hover:border-[#CA8787]"
              >
                Give Mark
              </button>
            </div>
          </div>
        ))}
        <div>
          <dialog id="my_modal_2" className="modal cursor-default">
            <div className="modal-box">
              <h3 className="font-bold mb-4 text-xl">Give Marks Here!</h3>
              <div className="flex flex-col mb-4">
                <p>
                  Assignment Link:{" "}
                  <span>
                    <Link
                      target="_blank"
                      className="text-blue-500 font-bold"
                      to={dynamicModalData?.submittedLink}
                    >
                      {dynamicModalData?.submittedLink?.length > 40
                        ? dynamicModalData?.submittedLink?.slice(0, 40)
                        : dynamicModalData?.submittedLink}
                      {/* {dynamicModalData.submittedLink} */}
                    </Link>
                  </span>
                </p>
                <p>
                  Notes:{" "}
                  <span className="text-black font-bold">
                    {dynamicModalData.note}
                  </span>
                </p>
              </div>
              <form
                onSubmit={(e) => handleMarkSubmission(e, dynamicModalData._id)}
              >
                <p className="font-semibold text-base mb-3">
                  Give Marks Out Of{" "}
                  <span className="font-bold text-blue-500">
                    {dynamicModalData.marks}
                  </span>
                </p>
                <input
                  name="marks"
                  type="number"
                  required
                  placeholder="Give Marks"
                  className="input input-bordered w-full"
                />
                <p className="font-semibold text-base mt-4 my-3">
                  Write Feedback
                </p>
                <textarea
                  placeholder="Feedback"
                  name="feedback"
                  required
                  className="textarea textarea-bordered textarea-sm w-full"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline mt-4 hover:bg-[#CA8787] hover:border-[#CA8787] btn-block"
                >
                  Submit Marks
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

export default PendingAssignment;
