import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="image-container">
          <div className="dark-overlay"></div>
          {/* Background image with animation */}
        </div>
        <div className="container">
          <div className="wrapper">
            <h2
              className="heading typed-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <Typewriter
                words={[
                  "Shaping the Future of Sustainable Systems and Ecosystem through climate-smart and responsible interventions",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p
              className="detail"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="100"
            >
              Delivering eco-conscious solutions that promote growth and environmental responsibility across the UK and EU.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
