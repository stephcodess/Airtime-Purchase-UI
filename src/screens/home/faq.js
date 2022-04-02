import FAQ from "../../assets/images/faq.svg";
import AirtimePurchaseComponentFaq from "../../components/faq";
const HomeFaq = () => {
  return (
    <div className="col-12 pt-5 bg-light">
        <h2 className="text-center" >Frequently Asked Questions(FAQ)</h2>
      <div className="container row m-auto bg-height mt-5">
        <div className="col-12 col-lg-6">
          <img src={FAQ} alt="FAQ" width="80%" height="80%"/>
        </div>
        <div className="col-12 col-lg-6">
          <AirtimePurchaseComponentFaq />
        </div>
      </div>
    </div>
  );
};
export default HomeFaq;
