import {  useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";
import Loader from "../Components/Loader";
import useRefetch from "../Hooks/useRefetch";

const Assignments = () => {
const { isLoading, refetch, data : assignments } = useRefetch()
  const [filter, setFilter] = useState("");
  if (isLoading) return <Loader />;
  return (
    <div className="my-10">
      <div className="flex items-center justify-center gap-8">
      <h2 className="text-base-content font-bold text-3xl text-center">
        All Assignment
      </h2>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
            // setCurrentPage(1);
          }}
          value={filter}
          name="difficulty"
          id="difficulty"
          className="border p-4 rounded-lg"
        >
          <option value="">Filter By Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {assignments.map((a) => (
          <AssignmentCard key={a._id} assignment={a} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
