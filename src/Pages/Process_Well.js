import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Featuresitems from '../components/Features/Featuresitems';
import FooterSecurity from '../components/Footer/FooterSecurity';
import FooterData from '../components/Footer/FooterData';
import Sectitle from '../components/Title/Sectitle';
import CustomNavbarSec from '../components/CustomNavbarSec'

const Process_Well = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbarSec nClass="m-auto"
        hbtnClass="new_btn"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Employee Wellbeing" tClass="t_color3" TitleP="Engaged employees are the key to a successful business; a highly engaged workforce has been shown to boost retention, productivity and profitability rates, among others."/>
                    <div className="features_info">
                    <img className="dot_img" src={require ('../img/home7/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Physical Wellbeing" descriptions="It is observed that physically fit employees are more productive, less absent and have lower rates of illness and presenteeism. This helps you have a healthier and happier workforce. To help you improve the physical wellbeing of your employees we provide them"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Financial Wellbeing" descriptions="Supporting the financial wellbeing of your employees is good for them and for your business. Poor financial wellbeing can affect physical, mental and social health which can result in poorer job performance, reduced ability to concentrate, lower productivity and absenteeism. We help you improve their financial wellbeing by"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Mental Wellbeing" descriptions="Mental health is something we all possess. When it is good, we have a sense of purpose and direction and feel that we can cope with whatever life (and work) throws at us. But just as our physical health fluctuates, so too our mental health goes through ups and downs. We help you help improve and maintain mental wellbeing of your employees by providing them access to"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="GP4A_3.png" iImg="icon_04.png" ftitle="A lot more than wellbeing" 
                        descriptions="We believe the learning of your employees should never stop and hence we also offer on our platform courses and content, which can help the employee achieve his aspirations, and content, which can inspire and motivate the employee"/>
                     
                    </div>
                </div>
            </section>
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
export default Process_Well;