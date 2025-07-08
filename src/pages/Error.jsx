import { Link } from "react-router";
import "../assets/css/error.css";

function Error() {
  return (
    <>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to={"/"} className="more-link">
          Quay lại trang chủ
        </Link>
      </div>
    </>
  );
}
export default Error;
