import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Teams from '../components/Team/Team';
import FooterData from '../components/Footer/FooterData';
import FooterSecurity from '../components/Footer/FooterSecurity';
import CustomNavbarSec from '../components/CustomNavbarSec'

const Team =()=>{
    return(
        <div className="body_wrapper">
            <CustomNavbarSec nClass="m-auto" hbtnClass="new_btn"/>
            <Teams/>
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
export default Team;