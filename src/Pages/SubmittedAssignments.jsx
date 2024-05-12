import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import Loader from "../Components/Loader";
import PdfPreview from "../Components/PdfPreview";
import { ScrollRestoration } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const SubmittedAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data } = useQuery({
    queryKey: ["pendingAssignments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/submitted-assignments`);
      return data;
    },
  });
  if (isLoading) return <Loader />;
  // console.log(data)
  return (
    <div className="my-20 min-h-[calc(100vh-500px)]">
      <ScrollRestoration />
      <h2
        data-aos="zoom-in-right"
        className="text-base-content font-bold text-2xl md:text-3xl text-center"
      >
        All Submitted Assignments Here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
        {data.map((d) => (
          <PdfPreview key={d._id} pdfUrl={d.submittedLink} />
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
