import React from 'react';
import CustomNavbarSec from '../components/CustomNavbarSec';
import FooterSecurity from '../components/Footer/FooterSecurity';
import Contacts from '../components/Contacts';
import FooterData from '../components/Footer/FooterData';

const Contact = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbarSec nClass="m-auto" hbtnClass="new_btn"/>
            <Contacts/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default Contact;