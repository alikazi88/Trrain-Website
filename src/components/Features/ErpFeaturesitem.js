import React, {Component} from 'react';


class ErpFeaturesitem extends Component {
    render(){
        let {rowClass, roundClass, image} = this.props;
        return(
            <div className={`row erp_item_features ${rowClass}`}>
                <div className="col-lg-6">
                    <div className="erp_features_img_two">
                        <div className={`img_icon ${roundClass}`}><span className="pluse_1"></span><span className="pluse_2"></span><i className="icon_lightbulb_alt"></i></div>
                        <img src={require ("../../img/home7/" + image)} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="erp_content_two">
                        <div className="hosting_title erp_title">
                            <h2>Quote on Employee Importance</h2>
                            <p>Employees who believe that management is concerned about them as a whole person – not just an employee – are more productive, more satisfied, more fulfilled. Satisfied employees mean satisfied customers, which leads to profitability.
</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeaturesitem;