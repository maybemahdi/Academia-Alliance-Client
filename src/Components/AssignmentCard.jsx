import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
  const { user } = useAuth();
  const {
    _id,
    assignment_title,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    assignment_creator,
  } = assignment;
  const handleDelete = (id, creator) => {
    // console.log(id, creator)
    if (user?.email !== creator) {
      return toast.error("Only Owner Can Delete This");
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/assignment/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              const remaining = assignments.filter((a) => a._id !== id);
              setAssignments(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Assignment has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div
      data-aos="zoom-in-right"
      className="rounded hover:scale-105 hover:shadow-2xl transition-all duration-700 shadow-md p-4"
    >
      <div className="flex flex-col mb-6 gap-1">
        <img className="h-[250px] w-full rounded" src={thumbnail} alt="" />
        <h3 className="mt-4 text-xl font-semibold">
          Title: {assignment_title}
        </h3>
        <p className="text-lg font-semibold">Full Marks: {marks}</p>
        <p className="text-lg font-semibold">Difficulty Level: {difficulty}</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleDelete(_id, assignment_creator)}
          className="btn btn-outline hover:bg-[#CA8787] hover:border-[#CA8787]"
        >
          Delete
        </button>
        <Link
          to={`/update-assignment/${_id}`}
          className="btn btn-outline hover:bg-[#CA8787] hover:border-[#CA8787]"
        >
          Update
        </Link>
        <Link
          to={`/assignment-details/${_id}`}
          className="btn btn-outline hover:bg-[#CA8787] hover:border-[#CA8787]"
        >
          View Assignment
        </Link>
      </div>
    </div>
  );
};

export default AssignmentCard;
