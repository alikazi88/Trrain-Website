import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
class Featuresitems extends Component{
    render(){
        var {rowClass, fimage, ftitle, descriptions, aClass, bbutton} = this.props;
        return(
            <div className={`agency_featured_item ${rowClass} `}>
                <div className="col-lg-6">
                   <Reveal effect="fadeInLeft">
                        <div className="agency_featured_img text-right">
                            <img src={require ("../../img/" + fimage)} alt=""/>
                        </div>
                   </Reveal>
                </div>
                <div className="col-lg-6">
                    <div className={`agency_featured_content wow fadeInLeft ${aClass}`} data-wow-delay="0.6s">
                    <Reveal effect="fadeInRight">
                        <h3>{ftitle}</h3>
                        <p>{descriptions}</p>
                        <img src={("../../img/" + bbutton)} alt=""/>
                    </Reveal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featuresitems;