import Input from "../../../components/input/input";
import emptyCard from "../../../assets/images/emptycards.svg";
import "./style.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
function FundWalletForm() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [amountToPay, setAmountToPay] = useState(0)
  const config = {
    public_key: "FLWPUBK_TEST-04026e70515777c36a0a0caef9b24b42-X",
    tx_ref: "fidpress-" + Date.now(),
    amount: amountToPay,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: phone,
      name: "joel ugwumadu",
    },
    customizations: {
      title: "Fidpress",
      description: "Fidpress wallet funding.",
      // logo: "../../../assets/images/fidpressLogo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="container m-5 mx-auto" style={{ backgroundColor: "#fff" }}>
      <div className="row main">
        <div className="col-lg-6 col-12 my-5 rcol">
          <h3 className="product text-center">PRODUCT DETAILS</h3>
          <div className="image text-center">
            <img alt="" src={emptyCard} width="300px" height="350px" />
          </div>
          <p className="text-center my-3">
            Toilet paper is a tissue paper product primarily used to clean
            <br />
            the anus and surrounding area of feces after defecation,
            <br /> and to clean the vulva and perineum of puppies
          </p>
        </div>
        <div className="col-lg-6 col-12 my-5 scol">
          <div className="row r1">
            <h6 className="text-muted">ORDER TOTAL:</h6>
            <h4 className="text-danger">&#35;{amountToPay}</h4>
          </div>
          <div className="row r2">
            <h6>Fidpress Wallet Topup</h6>
          </div>
          <div className="row r3">
            <h3 className="payment">PAYMENT DETAILS</h3>
          </div>
          <div className="row r4">
            <h6 className="payment-method">Select Payment method:</h6>
          </div>
          <div className="row r5">
            <div className="col-2">
              <img
                alt=""
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              />
            </div>
            <div className="col-2">
              <img
                alt=""
                src="https://img.icons8.com/color/48/000000/visa.png"
              />
            </div>
            <div className="col-2">
              <img
                alt=""
                src="https://img.icons8.com/color/48/000000/amex.png"
              />
            </div>
            <div className="col-2">
              <img
                alt=""
                src="https://img.icons8.com/color/48/000000/paypal.png"
              />
            </div>
          </div>
          <div className="row r6">
            <div className="personalDetails col-10">
              <div className="form-group">
                <Input
                  type="text"
                  required
                  placeholder="Enter Email Address"
                  className="mb-4"
                  onChangeText={(e)=>setEmail(e.target.value)}
                  borderBottom="2px solid rgba(0,0,0,0.1)"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="mb-4"
                  required
                  onChangeText={(e)=>setPhone(e.target.value)}
                  borderBottom="2px solid rgba(0,0,0,0.1)"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Enter Amount To Pay"
                  className="mb-4"
                  required
                  onChangeText={(e)=>setAmountToPay(parseInt(e.target.value) + (parseInt(e.target.value) * 0.05))}
                  borderBottom="2px solid rgba(0,0,0,0.1)"
                />
              </div>
              
              <button
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      if (response.status === "completed"){
                        alert("completed")
                      }
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {
                      alert("closed")
                    },
                  });
                }}
                type="submit"
                className="btn btn-primary mt-3"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundWalletForm;
