import AdminSidebarComponent from "../../components/sidebar";
import AllProducts from "./transaction";

function AllProductWrapper() {
  return (
    <div className="col-12 d-flex flex-row justify-content-between">
      <div className="col-xl-2">
        <AdminSidebarComponent />
      </div>
      <div className="col-12 col-xl-10 mt-5">
        <AllProducts />
      </div>
    </div>
  );
}

export default AllProductWrapper;
