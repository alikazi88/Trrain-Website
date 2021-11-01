import React from 'react';
import Reveal from 'react-reveal';
const AppFeatures = () => {
    return(
        <section className="app_featured_area_two">
            <div className=""></div>
            <div className="container">
                <div className="row app_feature_info">
                    <div className="col-lg-5">
                        <div className="app_img_faq">
                            <img className="wow fadeIn phone_img" src={require('../../img/GP4A_2.png')} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center">
                        <Reveal bottom cascade>
                            <div className="app_featured_content"> 
                                <h2 className="f_p f_size_30 f_700 t_color3 l_height45 mb-30 wow fadeInUp">Why Companies Choose <br/> <span> TRRAIN Circle</span></h2>
                                <p className="f_400">Its features are built to aid the use cases and operations of all departments in an organization</p>
                                <p className="f_400"> - Exhaustive Content</p>
                                <p className="f_400"> - Comprehensive Analytics</p>
                                <p className="f_400"> - Essential Services</p>
                                <p className="f_400"> - One stop solution for any communication</p>
                                <a href="/About" className="btn_six slider_btn">Learn More</a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppFeatures;
