import SidebarComponent from "../../../components/sidebar/sidebar";
import DashboardHeader from "../../dashboard/header";
import AirtimePurchaseComponentFaq from "../../../components/faq";
import DataSubscriptionForm from "./form";

function AirtimePurchaseComponent() {
  return (
    <div>
      <SidebarComponent>
        <DashboardHeader title="Purchase Airtime" />
        <div className="col-lg-10 mx-lg-auto mt-4 d-flex flex-column flex-xl-row justify-content-between">
          <div className="col-12 col-xl-6">
            <DataSubscriptionForm />
          </div>
          <div className="col-12 col-xl-5">
            <AirtimePurchaseComponentFaq />
          </div>
        </div>
        
      </SidebarComponent>
    </div>
  );
}

export default AirtimePurchaseComponent;
