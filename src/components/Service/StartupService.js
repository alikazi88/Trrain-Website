import React, {Component} from 'react';
import Startupsitem from './Startupsitem';
import Reveal from 'react-reveal';
class Stservice extends Component {
    render(){
        return(
            <section className="stratup_service_area sec_pad bg_whyus_color">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                       <Reveal effect="fadeInUp"><h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Engage with our employees using our white labelled  <br/> enterprise solution</h2></Reveal>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="stratup_service_img">
                                <div className="shape"></div>
                                <img className="laptop_img" src={require('../../img/new/laptop.png')} alt=""/>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="stratup_service_info">
                                <Startupsitem Sicon="icon-screen-tablet" text="Conduct quizzes & Surveys"/>
                                <Startupsitem iconClass="icon_two" Sicon="ti-notepad" text="Publish SOPs & Policies"/>
                                <Startupsitem iconClass="icon_three" Sicon="icon-camera" text="Conduct webinars & share Videos"/>
                                <Startupsitem iconClass="icon_four" Sicon="ti-user" text="Onboard new employees"/>
                                <Startupsitem iconClass="icon_four" Sicon="ti-face-smile" text="Understand happiness of employees"/>
                                <Startupsitem iconClass="icon_four" Sicon="ti-desktop" text="Conduct trainings"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Stservice;