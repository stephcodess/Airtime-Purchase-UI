import Modal from "../../components/modal/modal";
import useModal from "../../components/modal/useModal";
import SidebarComponent from "../../components/sidebar/sidebar";
import AllProducts from "./product";

const FidpressCommerce = () => {
    const { isShowing, toggle } = useModal();
  return (
    <SidebarComponent>
        <Modal isShowing={isShowing} hide={toggle}>
        <div>cytctrx</div>
      </Modal>
      <div className="container col-12" style={{ marginTop: 100 }}>
        <h4>All Products</h4>
        <div className="row">
          <AllProducts />
          <AllProducts />
          <AllProducts />
          <AllProducts />
          <AllProducts />
          <AllProducts />
          <AllProducts />
          <AllProducts />
          <AllProducts />
        </div>
      </div>
    </SidebarComponent>
  );
};

export default FidpressCommerce;
