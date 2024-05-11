import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";

const MySubmittedAssignment = () => {
  const { user } = useAuth();
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
                <td>
                  <p
                    className={`w-fit px-2 py-1 font-semibold rounded-[20px] ${
                      d.feedback ? "bg-green-600" : "bg-yellow-600"
                    }`}
                  >
                    {d.feedback ? d.feedback : "Pending"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmittedAssignment;
