import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import { useState } from "react";

const PendingAssignment = () => {
  const queryStatus = "Pending";
  const [dynamicModalData, setDynamicModalData] = useState([]);
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["pendingAssignments"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/pending-assignments?status=${queryStatus}`
      );
      return data;
    },
  });
  if (isLoading) return <Loader />;
  const handleDynamicData = (d) => {
    setDynamicModalData(d);
  };
  return (
    <div className="my-20">
      <h2 className="text-base-content font-bold my-20 text-3xl text-center">
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
                    {dynamicModalData?.submittedLink?.length > 40? dynamicModalData?.submittedLink?.slice(0,40) : dynamicModalData?.submittedLink}
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
              //   onSubmit={handleAssignmentSubmission}
              >
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
