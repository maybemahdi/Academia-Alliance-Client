import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const MySubmittedAssignment = () => {
  const { user } = useAuth();
  const [modalData, setModalData] = useState(null);
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["mySubmittedAssignment"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/mySubmitted?email=${user?.email}`,
        { withCredentials: true }
      );
      return data;
    },
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-20 min-h-[calc(100vh-600px)]">
      <ScrollRestoration/>
      <h2 className="text-base-content font-bold text-2xl md:text-3xl text-center">
        My Submission
      </h2>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Full Marks</th>
              <th>Your Obtained Marks</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d._id}>
                <th>{d.assignment_title}</th>
                <td>
                  <p
                    className={`w-fit px-2 py-1 font-semibold rounded-[20px] ${
                      d.status === "Completed"
                        ? "bg-green-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {d.status}
                  </p>
                </td>
                <td className="font-bold">{d.marks}</td>
                <td>
                  <p
                    className={`w-fit px-2 py-1 font-semibold rounded-[20px] ${
                      d.obtainedMarks ? "bg-green-600" : "bg-yellow-600"
                    }`}
                  >
                    {d.obtainedMarks ? d.obtainedMarks : "Pending"}
                  </p>
                </td>
                <button
                  className="hover:bg-[#CA8787] mt-2 font-semibold hover:border-[#CA8787] transition-all duration-300 px-4 py-2 border border-black"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                    setModalData(d);
                  }}
                >
                  See Feedback
                </button>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-xl text-center mb-10">
              Examiner Feedback!
            </h3>
            <p
              className={`w-fit px-2 text-lg py-1 mb-10 mx-auto font-semibold rounded-[20px]`}
            >
              {modalData?.feedback ? modalData?.feedback : "Pending..."}
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MySubmittedAssignment;
