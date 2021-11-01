import React from 'react';
const SecurityIntegration =()=>{
    return(
        <section className="security_integration_area">
            <div className="container">
                <div className="hosting_title analytices_title text-center">
                    <h2 className="wow fadeInUp">How are our customers using our My Work Section</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/Conduct.png")} alt=""/>
                            <h5>Conduct quizzes <br></br> & surveys</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/publish.png")} alt=""/>
                            <h5>Publish SOPs & <br></br> Policies</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/conduct_web.png")} alt=""/>
                            <h5>Conduct webinars<br></br> and share Videos</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/onboard.png")} alt=""/>
                            <h5>Onboard new <br></br>employees</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/understand.png")} alt=""/>
                            <h5>Understand happiness<br></br> of employees</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/trainings.png")} alt=""/>
                            <h5>Conduct<br></br> trainings</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/update.png")} alt=""/>
                            <h5>Update employee<br></br> info</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/Why-us-icons/Rewards.png")} alt=""/>
                            <h5>Conduct Rewards<br></br> and Recognition</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecurityIntegration;