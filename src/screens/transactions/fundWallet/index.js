import SidebarComponent from "../../../components/sidebar/sidebar";
import FundWalletForm from "./form";
import { useState } from "react";

function FundWallet() {
  // const [paymentType, setPaymentType] = useState("");

  return (
    <div>
      <SidebarComponent>
        <div className="mt-5 d-flex flex-column justify-content-between">
          
          <FundWalletForm />
        </div>
      </SidebarComponent>
    </div>
  );
}

export default FundWallet;
