
import { Link } from "react-router-dom";


const PdfPreview = ({ pdfUrl }) => {
  return (
    <Link to={pdfUrl} className="shadow-md rounded hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300">
      <iframe
        className="rounded shadow-md hover:shadow-xl"
        src={pdfUrl}
        width="100%"
        height="500px"
        title="Assignment"
      ></iframe>
    </Link>
  );
};

export default PdfPreview;
