import React, {Component} from 'react';

class ResourceGridItem extends Component{
    render(){
        let{date, month, Title, description, btn, comment, image}=this.props;
        return(
            <div className="col-lg-6">
                <div className="blog_list_item blog_list_item_two">
                    <a href="/#" className="post_date">
                        <h2>{date} <span>{month}</span></h2>
                    </a>
                    <a href="blog-single.html"><img className="img-fluid" src={require ("../../img/new/blog/" + image)}alt=""/></a>
                    <div className="blog_content">
                        <a href="/#">
                            <h5 className="blog_title">{Title}</h5>
                        </a>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResourceGridItem;