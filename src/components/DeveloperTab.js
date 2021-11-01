import React, { Component } from "react";
import Sectitle from "./Title/Sectitle";
import SecurityIntegration from "../components/SecurityIntegration";

class DeveloperTab extends Component {
  render() {
    return (
      <section className="developer_product_area">
        <div className="container">
          <Sectitle
            sClass="sec_title1 text-center mb_70"
            Title="Engage with our employees using our white labelled enterprise solution"
            tClass="t_color3" TitleP="The employer has no way to communicate directly with the last mile and has to go through multiple levels of hierarchy for any communication. To help the employer we’ve created an enterprise solution through our My Work section, as a one-stop solution for any communication and engagement. Our customers use our solution for"/>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="col-lg-5">
                <div className="app_img">
                  <img
                    className="wow fadeIn phone_img"
                    src={require("../img/home-chat/Messages.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <a href="/#" className="s_integration_item1">
                        <img
                          src={require("../img/Why-us-icons/Conduct.png")}
                          alt=""
                        />
                        <h5>
                          Conduct quizzes <br></br> & surveys
                        </h5>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <a href="/#" className="s_integration_item1">
                        <img
                          src={require("../img/Why-us-icons/publish.png")}
                          alt=""
                        />
                        <h5>
                          Publish SOPs & <br></br> Policies
                        </h5>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <a href="/#" className="s_integration_item1">
                        <img
                          src={require("../img/Why-us-icons/conduct_web.png")}
                          alt=""
                        />
                        <h5>
                          Conduct webinars<br></br> and share Videos
                        </h5>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <a href="/#" className="s_integration_item1">
                        <img
                          src={require("../img/Why-us-icons/onboard.png")}
                          alt=""
                        />
                        <h5>
                          Onboard new <br></br>employees
                        </h5>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <a href="/#" className="s_integration_item1">
                        <img
                          src={require("../img/Why-us-icons/understand.png")}
                          alt=""
                        />
                        <h5>
                          Understand happiness<br></br> of employees
                        </h5>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <a href="/#" className="s_integration_item1">
                        <img
                          src={require("../img/Why-us-icons/trainings.png")}
                          alt=""
                        />
                        <h5>
                          Conduct<br></br> trainings
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    );
  }
}

export default DeveloperTab;
