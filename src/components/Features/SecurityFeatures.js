import React from 'react';
import SecurityFeaturesItem from './SecurityFeaturesItem';

const SecurityFeatures =()=>{
    return(
        <section className="h_security_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Our Values</h2>
                </div>
                <div className="row">
                    <SecurityFeaturesItem itemClass="pr_70" image="customer.png" Title="Customer Centricity" pText="We put our customer at the centre of everything we do"/>
                    <SecurityFeaturesItem itemClass="pl_70" image="respect.png" Title="Respect" pText="We are respectful towards each other and towards the commitments we make"/>
                    <SecurityFeaturesItem itemClass="pr_70" image="leadership.png" Title="Leadership" pText="We take the lead in all that we do"/>
                    <SecurityFeaturesItem itemClass="pl_70" image="purpose.png" Title="Purpose & Goal Oriented" pText="We are a purpose driven & goal oriented organization"/>
                </div>
            </div>
        </section>
    )
}
export default SecurityFeatures;