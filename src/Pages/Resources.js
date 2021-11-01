import React from 'react';
import CustomNavbarSec from '../components/CustomNavbarSec';
import FooterData from '../components/Footer/FooterData';
import ResourcesGrid from '../components/Blog/ResourcesGrid';
import FooterSecurity from '../components/Footer/FooterSecurity';

const Resources = () => {
    return(
        <div className="body_wrapper">
          <CustomNavbarSec nClass="m-auto"
        hbtnClass="new_btn"/>
            <ResourcesGrid/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default Resources;