import AdminSidebarComponent from "../components/sidebar";
import AllPosts from "./transaction";

function AllPostWrapper() {
  return (
    <div className="col-12 d-flex flex-row justify-content-between">
      <div className="col-xl-2">
        <AdminSidebarComponent />
      </div>
      <div className="col-12 col-xl-10 mt-5">
        <AllPosts />
      </div>
    </div>
  );
}

export default AllPostWrapper;
