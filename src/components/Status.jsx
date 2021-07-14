const SStatus = ({ status, code }) => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h2>{status}</h2>
        {code ? (
          <i
            style={{ fontSize: "80px", color: "green" }}
            className="far fa-check-circle"
          ></i>
        ) : (
          <i
            style={{ fontSize: "80px", color: "red" }}
            className="far fa-times-circle"
          ></i>
        )}
        {code ? (
          <p>You will receive the assessment link e-mail within 24-48 Hours</p>
        ) : (
          <p>
            Payment Failed, If money deducted please{" "}
            <a href="/contact">Contact Us</a>
          </p>
        )}
        <button
          onClick={() => (window.location.href = "/")}
          style={{ color: "white" }}
          className="btn btn-success"
        >
          Go Back To Homepage
        </button>
      </div>
    </>
  );
};

export default SStatus;
