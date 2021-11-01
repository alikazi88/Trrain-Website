import React, {Component} from 'react';

class HostingFeaturesItem extends Component {
    render(){
        let {rowClass, hImage, hTitle, hPragraph}= this.props;
        return(
            <div className={`row ${rowClass}`}>
                <div className="col-lg-6">
                    <div className="h_features_img">
                        <img src={require ("../../img/" + hImage)} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h_features_content">
                        <div className="hosting_title">
                            <h2>{hTitle}</h2>
                            <p>{hPragraph}</p>
                            <a href=".#" className="btn_six1 slider_btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HostingFeaturesItem;