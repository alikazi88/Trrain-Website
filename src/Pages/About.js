import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';
import FooterSecurity from '../components/Footer/FooterSecurity';
import AppWork from '../components/Service/AppWork';
import ErpFeatures from '../components/Features/ErpFeatures';
import SecurityFeatures from '../components/Features/SecurityFeatures'
import AgencyAction from '../components/AgencyAction';
import CustomNavbarSec from '../components/CustomNavbarSec'

const About = () => {
    return(
        <div className="body_wrapper">         
            <CustomNavbarSec nClass="m-auto" hbtnClass="new_btn"/>
            <ErpFeatures/>
            <SecurityFeatures/>
            <section className="seo_call_to_action_area sec_pad">
                    <div className="container">
                        <div className="seo_call_action_text">
                            <h2>Want to know More ? <br/> Book a free demo now</h2>
                            <a href="/" className="about_btn">Schedule a demo</a>
                        </div>
                    </div>
            </section>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default About;