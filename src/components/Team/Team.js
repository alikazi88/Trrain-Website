import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="The strength of the team is each individual member. The strength of each member is the team. - Phil Jackson
Presenting you the team behind TRRAIN Circle"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="G N V Ravi Teja" memberd="Key Account Manager"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Akash Vishwakarma" memberd="Marketing & Engagement Manager"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Ameesha Prabhu" memberd="Co-founder & CEO"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_04.jpg" memberN="Asha Sanghavi" memberd="Sales Manager West"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_5.jpg" memberN="BS Nagesh" memberd="Co-founder"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_6.jpg" memberN="Deekshith Moolya" memberd="Lead Android Developer"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Team;