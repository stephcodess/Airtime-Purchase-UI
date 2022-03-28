import Button from "../../components/customButton/button";
import "./style.css";
const AllProducts = () => {
  return (
    <div className="single-product col-12 col-md-4 col-lg-3 mx-1 d-flex flex-column justify-content-between mt-5">
      <img
        src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
        alt=""
      />
      <div className="px-2">
        <h6>Ice cream</h6>
        <div>
          <span>Price: $2299</span>
        </div>
      </div>
      <Button title="proceed" mb={10} />
    </div>
  );
};

export default AllProducts;
