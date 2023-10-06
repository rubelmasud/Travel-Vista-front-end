import { Link } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <img src="" alt="" />
      <h1>404 - Page Not Found</h1>
      <p className="my-12">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        {" "}
        <button className="btn-style">Go Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
