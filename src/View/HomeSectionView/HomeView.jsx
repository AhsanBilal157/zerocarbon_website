import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
import "./HomeView.css";
// import FAQSection from "../../Component/FAQSection/FAQSection";
import FeatureSection from "../../Component/FeatureSection/FeatureSection";
import HomeContent from "../../Component/HomeContent/HomeContent";
import WrapperSection from "../../Component/WrapperSection/WrapperSection";
import whatWeDo from "../../Images/image-back.svg";
import OurVision from "../../Images/climate_change.jpg";
import ourImpact from "../../Images/bg-hero.jpg";
import SwiperSection from "../../Component/SwiperSection/SwiperSection";
import HomeContent2 from "../../Component/HomeContent2/HomeContent2";
import blog1 from "../../Images/image-what we do.svg"
import teamimg from"../../Images//d8b572203795711.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png";
// Bootstrap CSS and JS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Blog from '../../Component/Blog/Blog';
const DashboardView = () => {
  return (
    <div>
      <WrapperSection>
        <HeroSection />
        <FeatureSection />
        {/* <SwiperSection /> */}
        {/* <HomeContent
          class="row-custom-hContent"
          heading="Who We Are"
          image={whatWeDo}
          detail="At Organica, we are dedicated to revolutionizing agriculture through sustainable practices and empowering women farmers. We combine regenerative farming techniques with modern digital tools to create a future where farming is eco-friendly, inclusive, and efficient."
        />
        <HomeContent2
          class="row-custom-hContent reverse"
          heading="Our Vision"
          image={OurVision}
          detail="We envision a world where sustainable agriculture and gender equality go hand in hand. Our goal is to empower women to lead the shift toward greener farming, using innovative practices that benefit both the environment and their communities."
        />*/}
        
            <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={ourImpact} class="d-block w-100 carousel-img" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Our Mission</h5>
        <p>We are on a mission to empower businesses with sustainable solutions that address today's most pressing environmental challenges. By blending nature and technology, we aim to make agriculture greener and businesses more climate-resilient.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={whatWeDo} class="d-block w-100 carousel-img" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Our Story</h5>
        <p>EcoGrowth Solutions was founded by a group of industry veterans passionate about sustainability, innovation, and climate action. With decades of experience in agriculture, technology, and environmental strategy, we are committed to delivering impactful solutions that promote both business success and environmental stewardship.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={OurVision} class="d-block w-100 carousel-img" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Our Vision</h5>
        <p>To be pioneers in the transition towards a more sustainable, eco-friendly future in agriculture and carbon management, starting in the UK and expanding across the EU.</p>
      </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
<div className="title-basic" style={{textAlign:'center'}}>
            <p className="features-heading">
            Blogs
            </p>
          </div>
<Blog/>
<HomeContent
          class="row-custom-hContent"
          heading="Our Team"
          image={teamimg}
          detail="We help you to increase yields and sustainability through our innovative solutions"
        /> 
        {/* <FAQSection /> */}
      </WrapperSection>
    </div>
  );
};

export default DashboardView;
