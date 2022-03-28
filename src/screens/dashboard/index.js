import SidebarComponent from "../../components/sidebar/sidebar";
import { AIRTIME, DATASUB, FUNDWALLET } from "../../constants/routeNames";
import DashboardActionCard from "./actionCard";
import DashboardHeader from "./header";
import TransactionTable from "./transaction";

function DashboardScreen() {
  return (
    <div>
      <SidebarComponent>
        <DashboardHeader title="Home" />
        <div className="mt-xl-4 col-lg-10 m-lg-auto d-flex flex-xl-row flex-column justify-content-between">
          <div className="col-12 col-xl-9">
            <div
              className="d-none d-xl-flex flex-row justify-content-between"
              style={{ width: "100%" }}
            >
              <DashboardActionCard
                path={FUNDWALLET}
                title="Fund Wallet"
                className="col-4"
                bg="#8bb8f1"
                icon="wallet"
              />
              <DashboardActionCard
                path={AIRTIME}
                title="Purchase Airtime" 
                bg="#007bff"
                className="mx-2 col-4"
                icon="phone"
              />
              <DashboardActionCard
                path = {DATASUB}
                title="Data Subscription"
                className="col-4"
                bg="#6610f2"
                icon="wallet"
              />
            </div>
            <TransactionTable />
          </div>
          <div
            className="d-flex flex-row flex-xl-column flex-wrap justify-content-around justify-content-xl-start mx-xl-4 col-12 col-xl-3"
          >
            <DashboardActionCard
              title="Fund Wallet"
              className="col-11 m-auto col-md-6 my-5 my-xl-0 col-xl-12"
              bg="#8bb8f1"
              icon="wallet"
            />
            <DashboardActionCard
              title="Fund Wallet"
              bg="#8bb8f1"
              icon="wallet"
              className="my-5 col-11 m-auto col-md-6 col-xl-12"
            />
            <DashboardActionCard
              title="Fund Wallet"
              bg="#8bb8f1"
              icon="wallet"
              className="my-5 col-11 m-auto col-md-6 col-xl-12"
            />
            <DashboardActionCard
              title="Fund Wallet"
              bg="#8bb8f1"
              icon="wallet"
              className="col-11 m-auto col-md-6 my-5 col-xl-12"
            />
          </div>
        </div>
      </SidebarComponent>
    </div>
  );
}

export default DashboardScreen;
