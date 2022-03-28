import { Link } from "react-router-dom";

function DashboardActionCard(props) {
  return (
    <Link
      to={props.path}
      className={`${props.className} d-flex flex-row justify-content-start align-items-center`}
      style={
        {
        height: 100,
        backgroundColor: "#fff",
        boxShadow: "1px 3px 1px 1px rgba(0,0,0,0.03)",
        width: props.width,
        cursor: "pointer"
      }}
    >
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        style={{ height: "100%", width: "28%", backgroundColor: props.bg }}
      >
        <i
          className={`bi bi-${props.icon}`}
          style={{ color: "#fff", fontSize: 40 }}
        ></i>
      </div>
      <span className="mx-4">{props.title}</span>
    </Link>
  );
}

export default DashboardActionCard;
