import SidebarComponent from "../../../components/sidebar/sidebar";
import DashboardHeader from "../../dashboard/header";
import AirtimePurchaseComponentFaq from "../../../components/faq";
import AirtimePurchaseComponentForm from "./form";

function AirtimePurchaseComponent() {
  return (
    <div>
      <SidebarComponent>
        <DashboardHeader title="Purchase Airtime" />
        <div className="col-lg-10 mx-lg-auto mt-4 d-flex flex-column flex-xl-row justify-content-between">
          <div className="col-12 col-xl-6">
            <AirtimePurchaseComponentForm />
          </div>
          <div className="col-12 col-xl-5">
            <AirtimePurchaseComponentFaq />
          </div>
        </div>
        {/* <div className="col-12 position-fixed bg-dark" style={{height: 50}}>
          <span>Fidpress Network</span>
        </div> */}
      </SidebarComponent>
    </div>
  );
}

export default AirtimePurchaseComponent;
