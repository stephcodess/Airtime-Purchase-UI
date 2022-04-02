import "./style.css";
const WhyChooseUs = () => {
    return(
        <section className="container-fluid vw-100">
        <div className="text-center"  style={{backgroundColor: "#754ffe", height: 350, paddingTop: 50, marginBottom: 200}}>
            <div className="text-white">
                <span className="mb-5" style={{fontSize: 25}}>Why choose us</span>
                <h2 style={{fontSize: 25}} >Our bank has been providing services to its customers for almost 25 years.</h2>
            </div>
            
            <div className="container why-choose text-center" style={{backgroundColor: "#fff",height: "100%",}}>
                <div className="row">
                    <div className="col-6 col-lg-3 mt-5">
                        <div className="single-fun-fact align-self-center">
                            <h3>
                                <span className="odometer" data-count="358412" style={{fontSize: 30}}>00</span>
                            </h3>
                            <p style={{fontSize: 23}}>Happy customers</p>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mt-5">
                        <div className="single-fun-fact">
                            <h3>
                                <span className="odometer" data-count="25" style={{fontSize: 30}}>00</span>
                            </h3>
                            <p style={{fontSize: 23}}>Years in banking</p>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mt-5">
                        <div className="single-fun-fact">
                            <h3>
                                <span className="odometer" data-count="2545" style={{fontSize: 30}}>00</span>
                            </h3>
                            <p style={{fontSize: 23}}>Our branches</p>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mt-5">
                        <div className="single-fun-fact">
                            <h3>
                                <span className="odometer" data-count="54285" style={{fontSize: 30}}>00</span>
                            </h3>
                            <p style={{fontSize: 23}}>Successfully works</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default WhyChooseUs