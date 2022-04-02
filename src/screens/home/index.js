import AirtimePurchaseComponentFaq from "../../components/faq";
import Header from "../../components/header";
import HomeBlogComponent from "../../components/home/blog";
import LandingBanner from "../../components/home/landing";
import ContentWrapper from "./content";
import HomeFaq from "./faq";
import FooterComponent from "./footer";

function HomeScreen(){
    return(
        <div>
            <Header />
            <LandingBanner />
            <ContentWrapper />
            {/* <WhyChooseUs /> */}
            <HomeBlogComponent />
            <HomeFaq />
            <FooterComponent />
        </div>
    )
}

export default HomeScreen;