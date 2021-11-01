import React, {Component} from 'react';
import StudySlider from '../components/StudySlider';
import SeoTitle from '../components/Title/SeoTitle';
import Fade from 'react-reveal/Fade'

class Subscribe extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <React.Fragment>
            
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
            </React.Fragment>
        )
    }
}

export default Subscribe;