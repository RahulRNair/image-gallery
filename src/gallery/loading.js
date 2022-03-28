import { Spinner } from "react-bootstrap";
function Loading() {
  return (
    <div className="container">
      <div className="container-fliud">
        <Spinner animation="border" role="status" className="center-aligned">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}

export default Loading;
