import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";

const Assignments = () => {
  const { loading } = useAuth();
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/assignments`).then((res) => {
      console.log(res.data);
      setAssignments(res.data);
    });
  }, []);
  if(loading) return <Loader/>
  return (
    <div className="my-10">
      <h2 className="text-base-content font-bold text-3xl text-center">
        All Assignment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {assignments.map((a) => (
          <AssignmentCard key={a._id} assignment={a} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
