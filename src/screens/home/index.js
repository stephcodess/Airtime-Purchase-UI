import Header from "../../components/header";
import HomeBlogComponent from "../../components/home/blog";
// import FaqPage from "../../components/home/faq";
// import HomeFooter from "../../components/home/footer";
import LandingBanner from "../../components/home/landing";
import WhyChooseUs from "../../components/home/why";
import ContentWrapper from "./content";
import FooterComponent from "./footer";
// import HomeContent from "../../components/home/middle";
// import Services from "../../components/home/services";

function HomeScreen(){
    return(
        <div>
            <Header />
            <LandingBanner />
            <ContentWrapper />
            <WhyChooseUs />
            <HomeBlogComponent />
            <FooterComponent />
            {/* <Services />
            <HomeContent />
            <FaqPage />
            <HomeFooter/> */}
        </div>
    )
}

export default HomeScreen;