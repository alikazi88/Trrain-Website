import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Featuresitems from '../components/Features/Featuresitems';
import FooterSecurity from '../components/Footer/FooterSecurity';
import FooterData from '../components/Footer/FooterData';
import Sectitle from '../components/Title/Sectitle';
import AgencyAction from '../components/AgencyAction';
import SecurityIntegration from '../components/SecurityIntegration';
import CustomNavbarSec from '../components/CustomNavbarSec'

const Process_Engage = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbarSec nClass="m-auto"
        hbtnClass="new_btn"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Employee Engagement" tClass="t_color3" TitleP="Employee wellbeing is not only the absence of illness amongst them but 
also taking care of the health as well as other areas that impact it."/>
                    <div className="features_info">
                    <img className="dot_img" src={require ('../img/home7/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Engage with your employees with our one-stop solution" descriptions="To help you we’ve created an enterprise solution called My Work section, as a one-stop solution that can help you engage, communicate and empower your employees at the click of a button."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Keep your workplace safe with our PoSH and Whistleblower tool" descriptions="Sometimes female employees are hesitant to report any incident or situation because they’re don’t trust the process or the person you’re supposed to report to. We at TRRAIN Circle have created a tool which can help you stay connected to all your employees and establish a trusting relationship with all your employees so they can reach out to your in case of an circumstances"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Rewards and Recognition for all your employees at the click of a button" descriptions="Rewards and Recognitions have been proven to improve in your employees organisational values, enhance team efforts, increase customer satisfaction and motivate them to do better. With a distributed team, it gets challenging to conduct Rewards and Recognitions, hence at TRRAIN Circle we built a tool to help you to recognise your employees at the click of a button and at the comfort of your desk."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="GP4A_1.png" iImg="icon_04.png" ftitle="A lot more than wellbeing" 
                        descriptions="We believe the learning of your employees should never stop and hence we also offer on our platform courses and content, which can help the employee achieve his aspirations, and content, which can inspire and motivate the employee"/>
                    </div>
                </div>
            </section>
            <SecurityIntegration/>
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
export default Process_Engage;