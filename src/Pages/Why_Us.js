import React from "react";
import Featuresitems from "../components/Features/Featuresitems";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from "../components/Footer/FooterData";
import Stservice from '../components/Service/StartupService';
import Sectitle from "../components/Title/Sectitle";
import EventFact from "../components/EventFact";
import CoreFeaturesIcon from "../components/Features/CoreFeaturesIcon";
import CustomNavbarSec from "../components/CustomNavbarSec";

const Why_Us = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbarSec nClass="m-auto" hbtnClass="new_btn" />
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <Sectitle
            sClass="sec_title text-center mb_70"
            Title="Why choose TRRAIN Circle?
"
            tClass="t_color3"
            TitleP="TRRAIN Circle is a secure, and easy to use enterprise engagement tool that helps connect all your distributed teams. We provide you the best tool to enhance your employee productivity and experience starting at a modest fee starting from Rs. 144 per year per user
"
          />
          <div className="features_info">
            <img
              className="dot_img"
              src={require("../img/home7/divider1.png")}
              alt=""
            />
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="process_1.png"
              iImg="icon01.png"
              ftitle="Enhance the wellbeing of your employees"
              descriptions="The life of a blue/grey collar employee is filled with personal,career and family issues. To help the employee we bring curated and exclusive content, products and services which help the employee in maintaining physical, mental and financial wellbeing. We also bring to him courses, which can help the employee achieve his aspirations, and content, which can inspire and motivate the employee"
            />
            <Featuresitems
              rowClass="row"
              aClass="pl_100"
              fimage="process_2.png"
              iImg="icon02.png"
              ftitle="Understand your employees using insights and analytics"
              descriptions="The employer has no direct understanding of the wellbeing and status of his employees. Through our innovative features like Happiness Index, and Surveys, we help the employer stay in constant touch with the employees."
            />
            {/* <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/> */}
          </div>
        </div>
        <Stservice/>
        <CoreFeaturesIcon />
        <EventFact />
      </section>
      <section className="seo_call_to_action_area sec_pad">
        <div className="container">
          <div className="seo_call_action_text">
            <h2>
              Want to know More ? <br /> Book a free demo now
            </h2>
            <a href="/" className="about_btn">
              Schedule a demo
            </a>
          </div>
        </div>
      </section>
      <FooterSecurity FooterData={FooterData} />
    </div>
  );
};
export default Why_Us;
