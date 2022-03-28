import "./style.css";

function HomeContent() {
  return (
    <div className="what-you-see col-12 vw-100 d-flex flex-row justify-content-center align-items-center">
      <div className="col-6 text-center">
        <h3>Like what You see??</h3>
        <p>Taste the experience and enjoy the taste after.</p>
        <div className="col-4 d-flex flex-row mx-auto">
          <button
            className="btn w-20"
            style={{
              backgroundColor: "#3cb690",
              color: "#fff",
              width: 110,
              borderRadius: 10,
            }}
          >
            Login
          </button>
          <button
            className="btn w-20 ms-3"
            style={{
              backgroundColor: "#ee283c",
              color: "#fff",
              width: 110,
              borderRadius: 10,
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
