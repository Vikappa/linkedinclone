/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function SpinnerComponent(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setIsLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default SpinnerComponent;
