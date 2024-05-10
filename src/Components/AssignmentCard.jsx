const AssignmentCard = ({ assignment }) => {
  const {
    assignment_title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    assignment_creator,
  } = assignment;
  return (
    <div className="rounded cursor-pointer hover:scale-105 transition-all duration-500  shadow-md p-4">
      <div className="flex flex-col mb-6 gap-1">
        <img className="h-[250px] w-full rounded" src={thumbnail} alt="" />
        <h3 className="mt-4 text-xl font-semibold">Title: {assignment_title}</h3>
        <p className="text-lg font-semibold">Full Marks: {marks}</p>
        <p className="text-lg font-semibold">Difficulty Level: {difficulty}</p>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-outline hover:bg-[#A87676] hover:border-[#A87676]">
          Delete
        </button>
        <button className="btn btn-outline hover:bg-[#A87676] hover:border-[#A87676]">Update</button>
        <button className="btn btn-outline hover:bg-[#A87676] hover:border-[#A87676]">View Assignment</button>
      </div>
    </div>
  );
};

export default AssignmentCard;
