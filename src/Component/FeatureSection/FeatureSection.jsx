// import React, { useState, useEffect } from "react";
import "./FeatureSection.css";
// import smsIcon from "../../Images/svg/feature/message.svg";
// import smsBoldIcon from "../../Images/svg/feature/message-bold.svg";
// import arrowRight from "../../Images/svg/feature/arrow-right-line (3).svg";
import support from "../../Images/p.svg";
import supportbold from "../../Images/policy-bold.svg";
// import support from "../../Images/support.svg";
// import supportbold from "../../Images/support-bold.svg";
import assistance from "../../Images/Group 25.svg";
import assistancebold  from "../../Images/Group 29.svg";
// import assistance from "../../Images/assistance.svg";
// import assistancebold from "../../Images/assistance-bold.svg";
import policy from "../../Images/Group 30.svg";
import policyBold from "../../Images/Group 31.svg";
import train from "../../Images/train.svg";
import trainbold from "../../Images/trainBold.svg";
import featureBg from "../../Images/feature-bg.png";
const FeatureSection = (() => {

  return (
    <>
      <section
        className="feature-section section-b-space"
        id="#featureSection"
        // ref={ref}
      >
        {/* <div className="bg-effect">
          <img src={featureBg} className="img-fluid feature-bg" alt="" />
        </div> */}

        <div className="container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
          <div className="title-basic">
            <p className="features-heading">
            Key Highlights
            </p>
          </div>
          <p className="paragraph">We are on a mission to empower businesses with sustainable solutions that address today's most pressing environmental challenges. By blending nature and technology, we aim to make agriculture greener and businesses more climate-resilient.To be pioneers in the transition towards a more sustainable, eco-friendly future in agriculture and carbon management, starting in the UK and expanding across the EU.</p>
          <br></br><br></br>
          <div className="container-fluid">
          <div className="row g-10 justify-content-center">
            
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
              <div className="feature-box">
                <div className="feature-top">
                  <div className="feature-icon">
                    <img src={policy} className="outline-icon" alt="" />
                    <img src={policyBold} className="bold-icon" alt="" />
                  </div>
                  
                </div>
                <hr className="divider" />
                <ul className="ul-h4">
                <p className="features-title">Innovative Eco-Products</p>
                  <p className="h4">Exploring nature-based solutions to enhance soil health and crop resilience.</p>
                  
                </ul>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
              <div className="feature-box">
                <div className="feature-top">
                  <div className="feature-icon">
                    <img src={support} className="outline-icon" alt="" />
                    <img src={supportbold} className="bold-icon" alt="" />
                  </div>
                  
                </div>
                <hr className="divider" />
                <ul className="ul-h4">
                <p className="features-title">Climate-Friendly Roadmap</p>
                  <p className="h4">Creating tailored strategies to help businesses achieve carbon neutrality.</p>
                </ul>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <div className="feature-box">
                <div className="feature-top">
                  <div className="feature-icon">
                    <img src={assistance} className="outline-icon" alt="" />
                    <img src={assistancebold} className="bold-icon" alt="" />
                  </div>
                  
                </div>
                <hr className="divider" />
                <ul className="ul-h4">
                <p className="features-title">AI-Driven IoT Systems</p>
                  <p className="h4">Leveraging advanced technology to monitor and optimize environmental impact.</p>
                </ul>
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>
    </>
  );
});

export default FeatureSection;
