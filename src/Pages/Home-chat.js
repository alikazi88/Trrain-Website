import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import ChatIntegration from "../components/ChatIntegration";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from "../components/Footer/FooterData";
import HostingBlog from "../components/Blog/HostingBlog";
import FaqSection from "../components/FaqSection";
import AppFeatures from "../components/Features/AppFeatures";
import HostingFeatures from "../components/Service/HostingFeatures"
import HostingFeaturesTwo from "../components/Service/HostingFeaturesTwo"
import Testimonial from "../components/Testimonials/Testimonial"
import AgencyAction from "../components/AgencyAction";
import Subscribe from "../components/Subscribe";


const homechat = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        nClass="m-auto"
        hbtnClass="new_btn"
      />
      <ChatBanner />
      <CoreFeatures/>
      <AppFeatures/>
      <HostingFeatures/>
      <HostingFeaturesTwo/>
      <ChatIntegration/>
      <Testimonial tClass="testimonial_area_four sec_pad" FooterData={FooterData}/>
      <FaqSection/>
      {/* <ChatClients/> */}
      <Subscribe/>
      <FooterSecurity FooterData={FooterData}/>
    </div>
  );
};
export default homechat;
