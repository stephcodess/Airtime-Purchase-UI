import AdminSidebarComponent from "../components/sidebar";
import AllUsers from "./transaction";

function AllUserWrapper() {
  return (
    <div className="col-12 d-flex flex-row justify-content-end">
      <div className="col-xl-2">
        <AdminSidebarComponent />
      </div>
      <div className="col-12 col-xl-10 mt-5">
      <AllUsers />
      </div>
        
    </div>
  );
}

export default AllUserWrapper;
