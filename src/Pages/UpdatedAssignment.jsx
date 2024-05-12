import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UpdatedAssignment = () => {
  const assignment = useLoaderData();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const dueDate = startDate;
    const assignment_creator = assignment.assignment_creator;
    const data = {
      assignment_title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate,
      assignment_creator,
    };
    axiosSecure.put(`/update-assignment/${id}`, data).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        form.reset();
        Swal.fire({
          title: "Good job!",
          text: "You just Updated this assignment!",
          icon: "success",
        });
        navigate("/assignments");
      }
    });
  };
  return (
    <div className="my-10">
      <ScrollRestoration />
      <h2
        data-aos="zoom-in-right"
        className="text-base-content font-bold text-2xl md:text-3xl text-center"
      >
        Update An Assignment
      </h2>
      <form
        data-aos="zoom-in-right"
        onSubmit={handleUpdateAssignment}
        className="my-10 md:w-[80%] mx-auto"
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              placeholder="Assignment Title"
              defaultValue={assignment.assignment_title}
              name="title"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              placeholder="Assignment Description"
              defaultValue={assignment.description}
              name="description"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="marks">
              Marks
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="number"
              defaultValue={assignment.marks}
              placeholder="Assignment Marks"
              name="marks"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="marks">
              Thumbnail Image URL
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              placeholder="Thumbnail URL"
              defaultValue={assignment.thumbnail}
              name="thumbnail"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="category">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              id="difficulty"
              defaultValue={assignment.difficulty}
              className="w-full p-2 border rounded-md"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="block mb-2" htmlFor="date">
              Duo Date
            </label>
            <DatePicker
              className="w-full p-2 border rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="col-span-2">
            <input
              className="w-full p-3 rounded transition-all duration-300 cursor-pointer font-medium hover:bg-[#b47575] bg-[#CA8787]"
              type="submit"
              value="Update Assignment"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatedAssignment;
