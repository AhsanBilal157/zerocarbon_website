import React from 'react';
import WrapperSection from '../../Component/WrapperSection/WrapperSection';
import OtrHeader from "../../Component/OtrHeader/Header";
import About from '../../Component/About/About';

const AboutView = () => {
  return (
    <>
      <WrapperSection>
      <OtrHeader
         headname="About"/>
         <About/>
      </WrapperSection>
    </>
  )
}

export default AboutView
