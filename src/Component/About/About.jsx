import React from 'react';
import './About.css';
import featureBg from "../../Images/feature-bg.png";

function About() {
    return (
        <>
            <section className="About-details">
                <div className="container-fluid">
                    <div className="row row-custom">
                        <div className="bg-effect">
                            <img src={featureBg} className="img-fluid feature-bg1" alt="" />
                        </div>
                        <div className="col-lg-10 col-blog-detail-otr">

                            <div className="col-blog-detail-inr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                                <div className="main-about">
                                    
                                <p className="head">Our Story</p>
                                <p className="About-detail">Organica began with a vision to transform agriculture by making it more sustainable and inclusive. Our founders recognized the potential of women in rural farming communities and the urgent need for greener agricultural practices. By combining these two powerful forces, Organica was born, a movement dedicated to regenerative agriculture, empowering women farmers, and digitalizing green farming. Today, we stand at the crossroads of tradition and innovation, bringing the best of both worlds to the farming industry.</p>
                                </div>
                                <ul className="heading3-ul" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                                    <p className="heading3-head">Our Values</p>
                                    <li className="heading3-li">
                                        <p className="heading3-p ">
                                    <span className='heading3-p-span'>Sustainability:</span>
                                            
                                            We believe that farming should be in harmony with nature, which is why we champion regenerative agriculture practices that restore the land while feeding communities.
                                        </p>
                                    </li>
                                    <li className="heading3-li">
                                        <p className="heading3-p ">
                                            <span className='heading3-p-span'>Empowerment: </span>
                                            Women are the backbone of agriculture, and we’re dedicated to equipping them with the skills, resources, and opportunities they deserve.
                                        </p>
                                    </li>
                                    <li className="heading3-li">
                                        <p className="heading3-p ">
                                            <span className='heading3-p-span'>Innovation: </span>
                                            From organic farming to digital tools, we embrace technology to improve farming efficiency, enhance agricultural patterns, and create a sustainable future.
                                        </p>
                                    </li>
                                </ul>
                                <div className="lower-about" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">

                                <p className="heading3-head1">Our Impact</p>
                                <p className="heading3-p">Since our inception, Organica has touched the lives of hundreds of women farmers, helping them grow their skills, improve their yields, and create healthier products. By providing hands-on training, access to organic markets, and the latest farming technologies, we are proud to contribute to greener agriculture and stronger communities.</p>
                                <p className="heading3-head1">Our Vision for the Future</p>
                                <p className="heading3-p">We aim to scale our efforts, empowering even more women farmers, enhancing sustainable farming practices across regions, and expanding our marketplace for organic products. Our vision is a world where farming nurtures both people and the planet, with women leading the way to a healthier, greener tomorrow.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default About
