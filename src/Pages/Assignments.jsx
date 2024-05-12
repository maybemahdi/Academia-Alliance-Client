import { useEffect, useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";
import { ScrollRestoration } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init({
//   duration: 1200,
// });

const Assignments = () => {
  const { loading } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/assignments?page=${
          currentPage - 1
        }&size=${itemsPerPage}&filter=${filter}`
      );
      setAssignments(data);
    };
    getData();
  }, [currentPage, itemsPerPage, filter]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/getCount?filter=${filter}`
      );
      // console.log(data.count)
      setCount(data.count);
    };
    getCount();
  }, [filter]);
  const handlePagination = (val) => {
    setCurrentPage(val);
  };
  const handleReset = () => {
    setFilter("");
    setCurrentPage(1);
  };
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  if (loading) return <Loader />;
  return (
    <div className="my-10">
      <ScrollRestoration />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <h2 data-aos="zoom-in-right" className="text-base-content font-bold text-2xl md:text-3xl text-center">
          All Assignment
        </h2>
        <select
         data-aos="zoom-in-right"
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          value={filter}
          name="difficulty"
          id="difficulty"
          className="border px-4 py-3 cursor-pointer rounded-lg"
        >
          <option value="">Filter By Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button
         data-aos="zoom-in-right"
          onClick={handleReset}
          className="hover:bg-[#CA8787] rounded font-semibold hover:border-[#CA8787] transition-all duration-300 px-4 py-2 border border-black"
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {assignments.map((a) => (
          <AssignmentCard
            key={a._id}
            assignment={a}
            assignments={assignments}
            setAssignments={setAssignments}
          />
        ))}
      </div>
      <div data-aos="zoom-in" className="flex justify-center mt-12">
        {/* previous btn */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#A87676]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePagination(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#A87676] text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#A87676]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* next btn */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePagination(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#A87676] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Assignments;
