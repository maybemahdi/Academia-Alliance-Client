import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CreateAssignment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const dueDate = startDate;
    const assignment_creator = user?.email;

    //validation
    if (!assignment_title) {
      return toast.error("You Must Provide Assignment Title");
    }
    if (!description) {
      return toast.error("You Must Provide Assignment Description");
    }
    if (!marks) {
      return toast.error("You Must Provide Assignment Full Marks");
    }
    if (!thumbnail) {
      return toast.error("You Must Provide Assignment Thumbnail URL");
    }
    if (!difficulty) {
      return toast.error("You Must Provide Assignment Difficulty Level");
    }

    const data = {
      assignment_title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate,
      assignment_creator,
    };
    // console.log(data)
    axiosSecure.post(`/add-assignment`, data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          title: "Good job!",
          text: "You just created an assignment!",
          icon: "success",
        });
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
        Create An Assignment
      </h2>
      <form
        data-aos="zoom-in-right"
        onSubmit={handleCreateAssignment}
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
              name="title"
              // required
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
              name="description"
              // required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="marks">
              Marks
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="number"
              defaultValue={60}
              placeholder="Assignment Marks"
              name="marks"
              // required
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
              name="thumbnail"
              // required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="category">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              id="difficulty"
              required
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
              value="Create Assignment"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;
