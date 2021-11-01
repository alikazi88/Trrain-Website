import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Featuresitems from '../components/Features/Featuresitems';
import FooterSecurity from '../components/Footer/FooterSecurity';
import FooterData from '../components/Footer/FooterData';
import Sectitle from '../components/Title/Sectitle';
import StudySlider from '../components/StudySlider';
import SeoTitle from '../components/Title/SeoTitle';
import CustomNavbarSec from '../components/CustomNavbarSec'

const Process_Insights = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbarSec nClass="m-auto"
        hbtnClass="new_btn"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Employee Insights" tClass="t_color3" TitleP="Highly satisfied and happy employees are more productive and stay longer. The simplest way to track employee satisfaction is to regularly understand the pulse of your employees using different forms of feedback mechanisms
"/>
                        <div className="features_info">
                        <img className="dot_img" src={require ('../img/home7/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Track all your employee insights at the comfort of your desk" descriptions="With a distributed team, we understand that it gets tough for you to reach your employees in different geographies and different layers of hierarchy. By using our dashboard you can track the engagement and wellbeing of your employees at the comfort of your desk 24x7."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Launch surveys, quizzes and a lot more from your officeon" descriptions="The simple fact that the organization is conducting a survey and cares about their opinions can send a positive message to employees that their opinions are valued. Using TRRAIN Circle you can not only not launch such surveys but also get actionable insights on your employees"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Continuously measure happiness of your employees" 
                        descriptions="Highly engaged & satisfied employees are more productive, and have higher retention rates leading to lower HR costs. But how do you track your employees satisfaction? We’ve built our happiness index tool just for that! Using it you can track daily employee happiness and create a more productive workplace."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="GP4A_2.png" iImg="icon_04.png" ftitle="How an apparel retailer increased employee happiness by using TRRAIN Circle" 
                        descriptions="An apparel retailer, which has more than 100 stores Pan India, with over 800 employees, onboarded their employees. With their Pan India presence, their users have been using TRRAIN Circle for more than 6 months and more than 90% of their employees are engaged on the platform."
                        bbutton="play_btn.png"/>
                    </div>
                </div>
            </section>
            <section className="case_studies_area sec_pad">
                    <div className="container">
                        <SeoTitle Title="Our Latest News" />
                        <StudySlider/>
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
export default Process_Insights;